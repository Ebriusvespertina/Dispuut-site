<template>
  <div class="jaarlagen-page page-content">
    <!-- Hero Section -->
    <section class="jaarlagen-hero fade-in">
      <h1 class="section-title">Jaarlagen</h1>
      <p class="hero-subtitle">Elk jaar wordt ons dispuut uitgebreid met een nieuwe groep enthousiaste studenten.</p>
    </section>

    <!-- Main Content -->
    <section class="jaarlagen-main fade-in">
      <div class="jaarlagen-container">
        <YearGroupCard
          v-for="(group, year) in normalizedYearGroups"
          :key="year"
          :year="year"
          :group="group"
          @click="navigateToYear(year)"
        />
        <div v-if="Object.keys(normalizedYearGroups).length === 0" class="no-year-groups">Geen jaarlagen gevonden.</div>
      </div>
    </section>

    <AppCallToAction
      title="Wordt onderdeel van D.E.V."
      description="Ben je geïnteresseerd in het worden van lid van D.E.V.? Sluit je aan bij onze volgende jaarlaag en word onderdeel van onze hechte gemeenschap!"
      link="/contact"
    />
  </div>
</template>

<script setup>
import YearGroupCard from "~/components/jaarlagen/YearGroupCard.vue";
const { getYearGroups } = useDevData();
const { data: yearGroups } = await useAsyncData("yeargroups-index", () => getYearGroups());

const normalizedYearGroups = computed(() => yearGroups.value || {});

const router = useRouter();

const navigateToYear = (year) => {
  router.push(`/jaarlagen/${year}`);
};
</script>

<style scoped>
.jaarlagen-page {
  min-height: 100vh;
}

/* Hero Section */
.jaarlagen-hero {
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

/* Main Section */
.jaarlagen-main {
  max-width: 1200px;
  margin: 0 auto 5rem;
  padding: 0 2rem;
}

.jaarlagen-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.no-year-groups {
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ccc;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .jaarlagen-hero {
    padding: 2rem 1rem 3rem;
    margin: 1rem 1rem 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .jaarlagen-main {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  .jaarlagen-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
