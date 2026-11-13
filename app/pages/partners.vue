<template>
  <div class="partners-page page-content">
    <!-- Hero Section -->
    <section class="partners-hero fade-in">
      <div class="hero-inner">
        <h1 class="section-title">{{ page?.hero.title }}</h1>
        <p class="hero-subtitle">{{ page?.hero.subtitle }}</p>
      </div>
    </section>

    <!-- Wat wij bieden -->
    <section v-if="page?.benefits" class="partners-section fade-in">
      <h2 class="block-title">{{ page.benefits.title }}</h2>
      <p class="block-intro">{{ page.benefits.intro }}</p>
      <div class="benefits-grid">
        <article v-for="benefit in page.benefits.items" :key="benefit.title" class="benefit-card">
          <Icon :name="benefit.icon" class="benefit-icon" />
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.description }}</p>
        </article>
      </div>
    </section>

    <!-- Wie wij zoeken -->
    <section v-if="page?.lookingFor" class="partners-section fade-in">
      <h2 class="block-title">{{ page.lookingFor.title }}</h2>
      <p class="block-intro">{{ page.lookingFor.intro }}</p>
      <ul class="looking-list">
        <li v-for="target in page.lookingFor.items" :key="target.title" class="looking-item">
          <Icon :name="target.icon" class="looking-icon" />
          <div>
            <h3>{{ target.title }}</h3>
            <p>{{ target.description }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!-- Onze partners -->
    <section v-if="page?.partnersSection" class="partners-section fade-in">
      <h2 class="block-title">{{ page.partnersSection.title }}</h2>

      <div v-if="page.partnersSection.items.length" class="partners-grid">
        <article v-for="partner in page.partnersSection.items" :key="partner.name" class="partner-card">
          <NuxtImg v-if="partner.logo" :src="partner.logo" :alt="partner.name" class="partner-logo" />
          <h3 class="partner-name">{{ partner.name }}</h3>
          <p v-if="partner.description" class="partner-description">{{ partner.description }}</p>
          <a v-if="partner.url" :href="partner.url" target="_blank" rel="noopener" class="partner-link">
            Bezoek website →
          </a>
        </article>
      </div>

      <div v-else class="partners-empty">
        <Icon name="lucide:handshake" class="empty-icon" />
        <p class="empty-title">{{ page.partnersSection.emptyState.title }}</p>
        <p class="empty-text">{{ page.partnersSection.emptyState.text }}</p>
        <a :href="page.partnersSection.emptyState.link" class="empty-link">
          {{ page.partnersSection.emptyState.linkText }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: page } = await useAsyncData("partners-page", () => queryCollection("partners").first());

// SEO
useHead(() => ({
  title: page.value?.hero.title ? `${page.value.hero.title} - D.E.V. Dispuut` : "Partners - D.E.V. Dispuut",
  meta: [
    {
      name: "description",
      content:
        page.value?.hero.subtitle ||
        "D.E.V. is op zoek naar partners. Ontdek wat een samenwerking met Dispuut Ebrius Vespertina oplevert.",
    },
  ],
}));
</script>

<style scoped>
.partners-page {
  min-height: 100vh;
}

/* Hero Section */
.partners-hero {
  text-align: center;
  padding: calc(var(--header-height) + 3rem) 0 4rem;
  background: radial-gradient(ellipse 50% 320px at 50% 0%, rgba(43, 76, 140, 0.2), transparent);
  margin: 0 0 4rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #999;
  margin-top: 1rem;
  font-style: italic;
  font-weight: 300;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Sections */
.partners-section {
  max-width: 1200px;
  margin: 0 auto 5rem;
  padding: 0 2rem;
}

.block-title {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.block-intro {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
  max-width: 750px;
  margin-bottom: 2.5rem;
}

/* Benefits */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.benefit-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(43, 76, 140, 0.4);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.benefit-icon {
  font-size: 2.5rem;
  color: var(--primary-green);
  margin-bottom: 1rem;
  display: block;
  line-height: 1;
}

.benefit-card h3 {
  color: var(--text-light);
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.benefit-card p {
  color: #ccc;
  line-height: 1.7;
  margin: 0;
}

/* Wie wij zoeken */
.looking-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
}

.looking-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.75rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.looking-item:hover {
  border-color: rgba(58, 95, 58, 0.5);
  transform: translateY(-3px);
}

.looking-icon {
  color: var(--primary-blue);
  font-size: 1.75rem;
  flex-shrink: 0;
  line-height: 1;
}

.looking-item h3 {
  color: var(--text-light);
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.looking-item p {
  color: #ccc;
  line-height: 1.7;
  margin: 0;
}

/* Partners */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.partner-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.partner-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(43, 76, 140, 0.4);
  transform: translateY(-5px);
}

.partner-logo {
  max-width: 140px;
  max-height: 80px;
  object-fit: contain;
}

.partner-name {
  color: var(--text-light);
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.partner-description {
  color: #ccc;
  line-height: 1.7;
  margin: 0;
}

.partner-link {
  color: var(--primary-green);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.partner-link:hover {
  color: #fff;
}

/* Lege staat voor partners */
.partners-empty {
  text-align: center;
  padding: 3.5rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 20px;
}

.empty-icon {
  font-size: 3rem;
  color: var(--primary-green);
  display: block;
  margin: 0 auto 1rem;
  line-height: 1;
}

.empty-title {
  font-size: 1.4rem;
  color: var(--text-light);
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.empty-text {
  color: #999;
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 500px;
  margin: 0 auto;
}

.empty-link {
  display: inline-block;
  margin-top: 1.25rem;
  color: var(--primary-green);
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(58, 95, 58, 0.1);
  transition: all 0.3s ease;
}

.empty-link:hover {
  color: white;
  background: var(--primary-green);
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .looking-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .partners-hero {
    padding: calc(var(--header-height) + 1.5rem) 0 3rem;
    margin: 0 0 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .partners-section {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  .block-title {
    font-size: 2rem;
  }

  .benefits-grid,
  .looking-list,
  .partners-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .benefit-card,
  .partner-card {
    padding: 1.75rem 1.5rem;
  }

  .partners-empty {
    padding: 2.5rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .partners-section {
    margin-bottom: 2rem;
  }

  .benefit-card,
  .looking-item,
  .partner-card {
    padding: 1.5rem 1.25rem;
  }

  .empty-icon {
    font-size: 2.5rem;
  }
}
</style>
