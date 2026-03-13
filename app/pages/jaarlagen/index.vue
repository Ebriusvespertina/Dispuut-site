<template>
  <div class="jaarlagen-page page-content">
    <!-- Hero Section -->
    <section class="jaarlagen-hero fade-in">
      <h1 class="section-title">Jaarlagen</h1>
      <p class="hero-subtitle">
        Elk jaar wordt ons dispuut uitgebreid met een nieuwe groep enthousiaste
        studenten.
      </p>
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
        <div
          v-if="Object.keys(normalizedYearGroups).length === 0"
          class="no-year-groups"
        >
          Geen jaarlagen gevonden.
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="call-to-action fade-in">
      <div class="cta-content">
        <h2>Wordt onderdeel van D.E.V.</h2>
        <p>
          Ben je geïnteresseerd in het worden van lid van D.E.V.? Sluit je aan
          bij onze volgende jaarlaag en word onderdeel van onze hechte
          gemeenschap!
        </p>
        <NuxtLink to="/contact" class="cta-button">
          Neem contact op
          <span class="arrow">→</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import YearGroupCard from "~/components/jaarlagen/YearGroupCard.vue";
const { getYearGroups } = useDevData();
const { data: yearGroups } = await useAsyncData("yeargroups-index", () =>
  getYearGroups(),
);

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
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ccc;
  font-size: 1.1rem;
}

/* Call to Action Section */
.call-to-action {
  max-width: 900px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
}

.cta-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 25px;
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.cta-content:hover {
  transform: translateY(-5px);
  border-color: rgba(43, 76, 140, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.cta-content h2 {
  background: linear-gradient(
    135deg,
    var(--primary-blue),
    var(--primary-green)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(
    135deg,
    var(--primary-blue),
    var(--primary-green)
  );
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 5px 20px rgba(43, 76, 140, 0.4);
  position: relative;
  overflow: hidden;
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

.arrow {
  transition: transform 0.3s ease;
  z-index: 1;
  position: relative;
}

.cta-button:hover .arrow {
  transform: translateX(5px);
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

  .call-to-action {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  .cta-content {
    padding: 2rem 1.5rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 1.1rem;
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
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>
