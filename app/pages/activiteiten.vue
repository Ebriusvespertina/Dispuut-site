<template>
  <div class="activities-page page-content">
    <!-- Hero Section -->
    <section class="activities-hero fade-in">
      <h1 class="section-title">Onze Activiteiten</h1>
      <p class="hero-subtitle">
        Bij D.E.V. organiseren we het hele jaar door diverse activiteiten waar
        onze leden samen kunnen genieten, nieuwe herinneringen kunnen maken en
        onze vriendschappen kunnen versterken.
      </p>
    </section>

    <!-- Main Content -->
    <section class="activities-main fade-in">
      <div class="activities-grid">
        <ActivityCard
          title="Wekelijkse Borrels"
          description="Elke week komen we samen in de Hideout voor gezellige borrels. Er is altijd wel wat te zeggen en altijd een goede reden voor gezelligheid en een pilsje."
          icon="lucide:beer"
        />
        <ActivityCard
          title="Sport & Competitie"
          description="Van bowlen tot golven, van survival banen tot bierestafette - we houden van actie en vriendschappelijke competitie onder onze leden."
          icon="lucide:trophy"
        />
        <ActivityCard
          title="Jaarlijkse Uitjes"
          description="Elk jaar gaan we er als groep op uit. Samen nieuwe plekken ontdekken en onvergetelijke herinneringen maken, van stedentrips tot avontuurlijke activiteiten."
          icon="lucide:plane"
        />
        <ActivityCard
          title="Kennismakings​activiteiten"
          description="Voor nieuwe leden organiseren we kennismakingsactiviteiten om iedereen te verwelkomen, te leren kennen en direct deel te laten worden van onze hechte groep."
          icon="lucide:graduation-cap"
        />
        <ActivityCard
          title="Culinaire Avonturen"
          description="Van uitgebreide zomerse BBQ's tot etentjes bij de Ten Beste restaurants - samen genieten van lekker eten is een belangrijk onderdeel van ons dispuutsleven."
          icon="lucide:utensils-crossed"
        />
        <ActivityCard
          title="Feesten & Tradities"
          description="Van cantussen tot karaoke-avonden, van awards ceremonies tot onze jaarlijkse verjaardag - we hebben een boel tradities die ons verbinden en waar we naar uitkijken."
          icon="lucide:party-popper"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import ActivityCard from "~/components/activiteiten/ActivityCard.vue";

// SEO
useHead({
  title: "Activiteiten - D.E.V. Dispuut",
});
</script>

<style scoped>
.activities-page {
  min-height: 100vh;
}

/* Hero Section */
.activities-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: radial-gradient(
    circle at center,
    rgba(43, 76, 140, 0.2),
    transparent
  );
  margin: 0 auto 4rem;
  max-width: 1200px;
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

/* Main Section */
.activities-main {
  max-width: 1200px;
  margin: 0 auto 5rem;
  padding: 0 2rem;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .activities-hero {
    padding: 2rem 1rem 3rem;
    margin: 1rem 1rem 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .activities-main {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  .activities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .activities-main {
    margin-bottom: 2rem;
  }

  .activities-grid {
    gap: 1rem;
  }
}
</style>
