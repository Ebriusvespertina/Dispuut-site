<template>
  <div class="about-page page-content">
    <!-- Hero Section -->
    <section class="about-hero fade-in">
      <h1 class="section-title">Over D.E.V.</h1>
      <p class="hero-subtitle">Dispuut Ebrius Vespertina - Een hechte vriendengroep voor het leven</p>
    </section>

    <!-- Main About Content -->
    <section id="about-main" class="fade-in">
      <div class="about-content">
        <div class="about-text">
          <h2>Wie zijn wij?</h2>
          <p>
            Dispuut Ebrius Vespertina (D.E.V.) is een gemengd dispuut dat is gelieerd aan Studievereniging Indicium. Ons
            dispuut vormt een hechte vriendengroep die elk jaar wordt uitgebreid met een nieuwe jaarlaag.
          </p>
          <p>
            Wij streven ernaar om het studentenleven volledig te omarmen door elke maand activiteiten te organiseren
            voor onze leden, meestal onder het genot van een drankje. De vriendschappen die binnen D.E.V. ontstaan, zijn
            voor het leven. Lid zijn van dit dispuut betekent dat je deel uitmaakt van een gemeenschap die je de rest
            van je leven zal blijven koesteren.
          </p>
        </div>
        <div class="values">
          <h3>Onze Waarden</h3>
          <ul>
            <li>
              <Icon name="lucide:swords" class="value-icon" />
              <span>Vriendschap voor het leven</span>
            </li>
            <li>
              <Icon name="lucide:swords" class="value-icon" />
              <span>Het studentenleven omarmen</span>
            </li>
            <li>
              <Icon name="lucide:swords" class="value-icon" />
              <span>Maandelijkse gezelligheid</span>
            </li>
            <li>
              <Icon name="lucide:swords" class="value-icon" />
              <span>Onvergetelijke herinneringen</span>
            </li>
            <li>
              <Icon name="lucide:swords" class="value-icon" />
              <span>Samen groeien als groep</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <AboutJoinSection />
  </div>
</template>

<script setup>
import AboutJoinSection from "~/components/over/AboutJoinSection.vue";
</script>

<style scoped>
.about-page {
  min-height: 100vh;
}

/* Hero Section */
.about-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: radial-gradient(circle at center, rgba(43, 76, 140, 0.2), transparent);
  margin: 0 auto 4rem;
  max-width: 1200px;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #999;
  margin-top: 1rem;
  font-style: italic;
  font-weight: 300;
}

/* Main About Section */
#about-main {
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.about-content h2 {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 1.5rem;
}

.values {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.values h3 {
  color: var(--primary-green);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.values ul {
  list-style: none;
  font-size: 1.1rem;
}

.values li {
  padding: 0.5rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  color: #ccc;
  line-height: 1.6;
}

.value-icon {
  color: var(--primary-green);
  font-size: 1rem;
  margin-top: 0.25rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-hero {
    padding: 2rem 1rem 3rem;
    margin: 1rem 1rem 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-content h2 {
    font-size: 2rem;
  }

  #about-main {
    padding: 0 1rem;
    margin: 3rem auto;
  }
}

@media (max-width: 480px) {
  .values {
    padding: 1.5rem;
  }
}
</style>
