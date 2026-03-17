<template>
  <section class="call-to-action fade-in">
    <div class="cta-content">
      <div class="cta-text">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
      <NuxtLink v-if="isInternalLink" :to="link" class="cta-button">
        {{ buttonText }}
        <span class="arrow">→</span>
      </NuxtLink>
      <a v-else :href="link" class="cta-button">
        {{ buttonText }}
        <span class="arrow">→</span>
      </a>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    default: "Neem contact op",
  },
});

const isInternalLink = computed(() => props.link.startsWith("/"));
</script>

<style scoped>
.call-to-action {
  max-width: 1100px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
}

.cta-content {
  background: rgba(255, 255, 255, 0.03);
  padding: 2.25rem 2.5rem;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: border-color 0.3s ease;
}

.cta-content:hover {
  border-color: rgba(43, 76, 140, 0.4);
}

.cta-text {
  flex: 1;
  text-align: left;
}

.cta-content h2 {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 0.2rem;
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.cta-content p {
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.7;
  margin: 0;
  max-width: 700px;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  color: white;
  padding: 0.95rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  white-space: nowrap;
}

.cta-button:hover {
  filter: brightness(1.08);
}

.arrow {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .call-to-action {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  .cta-content {
    padding: 1.75rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .cta-content h2 {
    font-size: 1.7rem;
  }

  .cta-content p {
    font-size: 1.1rem;
  }

  .cta-button {
    align-self: stretch;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .call-to-action {
    margin-bottom: 2rem;
  }

  .cta-content {
    padding: 1.5rem;
  }

  .cta-button {
    padding: 0.8rem 1.25rem;
    font-size: 1rem;
  }
}
</style>
