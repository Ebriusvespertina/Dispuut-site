<template>
  <section class="hero" id="home">
    <div class="hero-content">
      <!-- Static Logo -->
      <DevLogo class="emblem" />
      <h1 class="fade-in">{{ title }}</h1>
      <p class="fade-in">{{ subtitle }}</p>
      <div class="cta-buttons">
        <NuxtLink to="/over" class="cta-button fade-in primary">
          Ontdek Meer
        </NuxtLink>
        <NuxtLink to="/contact" class="cta-button fade-in secondary">
          Word Lid
        </NuxtLink>
      </div>
    </div>
    <!-- Scroll indicator -->
    <div class="scroll-indicator">
      <div class="scroll-indicator-inner">
        <span>Scroll</span>
        <div class="scroll-arrow"></div>
      </div>
    </div>
    <!-- Background particles -->
    <HeroParticles />
  </section>
</template>

<script setup>
import DevLogo from "~/components/global/DevLogo.vue";
import HeroParticles from "~/components/home/HeroParticles.vue";
import { onMounted, onUnmounted } from "vue";
// Props
defineProps({
  title: {
    type: String,
    default: "Dispuut Ebrius Vespertina",
  },
  subtitle: {
    type: String,
    default: "Een hechte vriendengroep voor het leven",
  },
});

let fadeObserver = null;

onMounted(() => {
  fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach((el) => {
    fadeObserver?.observe(el);
  });
});

onUnmounted(() => {
  if (fadeObserver) {
    fadeObserver.disconnect();
  }
});
</script>

<style scoped>
.hero {
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: radial-gradient(
    circle at center,
    rgba(43, 76, 140, 0.2),
    transparent
  );
  overflow: hidden;
}
.hero-content {
  text-align: center;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  min-height: 100%;
  padding: 6.5rem 1rem 4.5rem;
}
.emblem {
  width: 300px;
  height: 300px;
  margin: 0 auto 2rem;
  animation: float 6s ease-in-out infinite;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.7));
}
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(
    135deg,
    var(--primary-blue),
    var(--primary-green)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 3s ease-in-out infinite;
}
@keyframes glow {
  0%,
  100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.2);
  }
}
.hero p {
  font-size: 1.5rem;
  color: #999;
  font-style: italic;
  margin-bottom: 2rem;
}
.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.cta-button.primary {
  background: linear-gradient(
    135deg,
    var(--primary-blue),
    var(--primary-green)
  );
  box-shadow: 0 5px 20px rgba(43, 76, 140, 0.4);
}
.cta-button.secondary {
  background: transparent;
  border: 2px solid var(--primary-blue);
  color: var(--primary-blue);
}
.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(43, 76, 140, 0.6);
}
.cta-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
}
.cta-button:hover::before {
  width: 300px;
  height: 300px;
}
/* Scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  z-index: 2;
}

.scroll-indicator-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  text-align: center;
  animation: bounceIndicator 2s ease-in-out infinite;
}

@keyframes bounceIndicator {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-7px);
  }
}
.scroll-indicator span {
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1;
  white-space: nowrap;
}
.scroll-arrow {
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border-right: 2px solid #666;
  border-bottom: 2px solid #666;
  transform: rotate(45deg);
}
/* Fade in animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
.fade-in:nth-child(1) {
  transition-delay: 0.1s;
}
.fade-in:nth-child(2) {
  transition-delay: 0.2s;
}
.fade-in:nth-child(3) {
  transition-delay: 0.3s;
}
/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  .emblem {
    width: 200px;
    height: 200px;
  }
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  .cta-button {
    width: 200px;
    text-align: center;
  }
  .scroll-indicator {
    bottom: 1rem;
  }
}

@media (max-height: 800px) {
  .hero-content {
    justify-content: flex-start;
    padding-bottom: 2.75rem;
  }

  .emblem {
    width: 220px;
    height: 220px;
    margin-bottom: 1.25rem;
  }

  .hero h1 {
    font-size: 2.6rem;
    margin-bottom: 0.65rem;
  }

  .hero p {
    font-size: 1.2rem;
    margin-bottom: 1.25rem;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1.05rem;
  }

  .scroll-indicator {
    display: none;
  }
}

@media (max-height: 700px) {
  .hero-content {
    padding-bottom: 2rem;
  }

  .emblem {
    width: 170px;
    height: 170px;
    margin-bottom: 0.9rem;
  }

  .hero h1 {
    font-size: 2.1rem;
    line-height: 1.15;
  }

  .hero p {
    font-size: 1.05rem;
    margin-bottom: 1rem;
  }

  .cta-buttons {
    gap: 0.7rem;
  }

  .cta-button {
    padding: 0.65rem 1.5rem;
    font-size: 0.98rem;
  }
}
</style>
