<template>
  <div ref="particlesRef" class="particles"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const particlesRef = ref(null);
const prefersReducedMotion = ref(false);

let particles = [];
let animationId = null;
let resizeParticles = null;
let heroObserver = null;
let mediaQueryList = null;
let motionPreferenceListener = null;

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > this.canvas.width) this.x = 0;
    if (this.x < 0) this.x = this.canvas.width;
    if (this.y > this.canvas.height) this.y = 0;
    if (this.y < 0) this.y = this.canvas.height;
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  if (!particlesRef.value) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  particlesRef.value.appendChild(canvas);

  const drawStaticParticles = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.draw(ctx);
    });
  };

  const stopAnimation = () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw(ctx);
    });
    animationId = requestAnimationFrame(animate);
  };

  const applyMotionMode = () => {
    stopAnimation();

    if (prefersReducedMotion.value) {
      drawStaticParticles();
      return;
    }

    animate();
  };

  const updateCanvasSize = () => {
    const bounds = particlesRef.value?.getBoundingClientRect();
    if (!bounds) return;

    const previousWidth = canvas.width || 1;
    const previousHeight = canvas.height || 1;
    const nextWidth = Math.max(1, Math.floor(bounds.width));
    const nextHeight = Math.max(1, Math.floor(bounds.height));

    if (previousWidth === nextWidth && previousHeight === nextHeight) {
      return;
    }

    canvas.width = nextWidth;
    canvas.height = nextHeight;

    const scaleX = nextWidth / previousWidth;
    const scaleY = nextHeight / previousHeight;

    particles.forEach((particle) => {
      particle.x *= scaleX;
      particle.y *= scaleY;
    });

    if (prefersReducedMotion.value) {
      drawStaticParticles();
    }
  };

  updateCanvasSize();

  particles = [];
  for (let i = 0; i < 50; i += 1) {
    particles.push(new Particle(canvas));
  }

  if (typeof globalThis.matchMedia === "function") {
    mediaQueryList = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.value = mediaQueryList.matches;
    motionPreferenceListener = (event) => {
      prefersReducedMotion.value = event.matches;
      applyMotionMode();
    };

    if (typeof mediaQueryList.addEventListener === "function") {
      mediaQueryList.addEventListener("change", motionPreferenceListener);
    } else if (typeof mediaQueryList.addListener === "function") {
      mediaQueryList.addListener(motionPreferenceListener);
    }
  }

  applyMotionMode();

  resizeParticles = () => {
    updateCanvasSize();
  };

  window.addEventListener("resize", resizeParticles);

  if (typeof ResizeObserver !== "undefined") {
    heroObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    heroObserver.observe(particlesRef.value);
  }
}

onMounted(() => {
  initParticles();
});

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  if (resizeParticles) {
    window.removeEventListener("resize", resizeParticles);
  }

  if (heroObserver) {
    heroObserver.disconnect();
  }

  if (mediaQueryList && motionPreferenceListener) {
    if (typeof mediaQueryList.removeEventListener === "function") {
      mediaQueryList.removeEventListener("change", motionPreferenceListener);
    } else if (typeof mediaQueryList.removeListener === "function") {
      mediaQueryList.removeListener(motionPreferenceListener);
    }
  }
});
</script>

<style scoped>
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particles canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
