<template>
  <div class="year-page page-content" v-if="yearGroup">
    <!-- Hero Section with Back Link -->
    <section class="year-hero fade-in">
      <NuxtLink to="/jaarlagen" class="back-link">
        ← Terug naar Jaarlagen
      </NuxtLink>
      <h1 class="section-title">Jaarlaag {{ year }}</h1>
      <h2 class="year-nickname" v-if="yearGroup.name">
        "{{ yearGroup.name }}"
      </h2>
      <p class="hero-subtitle" v-if="yearGroup.description">
        {{ yearGroup.description }}
      </p>
    </section>

    <!-- Group Photo Section -->
    <section class="photo-section fade-in">
      <div class="photo-container">
        <img
          :src="yearGroup.groupPhoto || 'https://picsum.photos/600/400'"
          :alt="`Groepsfoto jaarlaag ${year}`"
          class="group-photo"
          @error="handleImageError"
        />
      </div>
    </section>

    <!-- Members Section -->
    <section class="members-section fade-in">
      <h3 class="section-subtitle">Leden</h3>
      <div class="members-grid">
        <MemberCard
          v-for="(member, index) in yearGroup.members"
          :key="`${member.firstName}-${member.lastName}-${index}`"
          :member="member"
        />
      </div>
    </section>

    <!-- Highlights Section -->
    <section
      class="highlights-section fade-in"
      v-if="yearGroup.highlights && yearGroup.highlights.length > 0"
    >
      <div class="highlights-content">
        <h3>Hoogtepunten</h3>
        <ul class="highlights-list">
          <li v-for="highlight in yearGroup.highlights" :key="highlight">
            {{ highlight }}
          </li>
        </ul>
      </div>
    </section>

    <section class="highlights-section fade-in" v-if="yearGroup?.body">
      <div class="highlights-content">
        <h3>Over Deze Jaarlaag</h3>
        <ContentRenderer :value="yearGroup" />
      </div>
    </section>
  </div>
</template>

<script setup>
import MemberCard from "~/components/jaarlagen/MemberCard.vue";

const route = useRoute();
const { getYearGroup } = useDevData();

const year = Number(route.params.year);

const { data: yearGroup } = await useAsyncData(`yeargroup-${year}`, () =>
  getYearGroup(String(year)),
);

if (!yearGroup.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Jaarlaag niet gevonden",
  });
}

// Handle image error by falling back to placeholder
const handleImageError = (event) => {
  event.target.src = "https://picsum.photos/600/400";
};

useHead({
  title: computed(
    () => `Jaarlaag ${year} - ${yearGroup.value?.name || "D.E.V."} - D.E.V.`,
  ),
});
</script>

<style scoped>
.year-page {
  min-height: 100vh;
}

/* Hero Section */
.year-hero {
  text-align: center;
  padding: 2rem 2rem 4rem;
  background: radial-gradient(
    circle at center,
    rgba(43, 76, 140, 0.2),
    transparent
  );
  margin: 0 auto 4rem;
  max-width: 1200px;
  position: relative;
}

.back-link {
  position: absolute;
  top: 1rem;
  left: 2rem;
  color: var(--primary-blue);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(43, 76, 140, 0.1);
}

.back-link:hover {
  color: white;
  background: var(--primary-blue);
  transform: translateY(-2px);
}

.year-nickname {
  background: linear-gradient(
    135deg,
    var(--primary-green),
    var(--primary-blue)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.8rem;
  font-style: italic;
  font-weight: 400;
  margin: 1rem 0;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #999;
  margin-top: 1rem;
  font-style: italic;
  font-weight: 300;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Photo Section */
.photo-section {
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
}

.photo-container {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 25px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.photo-container:hover {
  transform: translateY(-5px);
  border-color: rgba(43, 76, 140, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.group-photo {
  width: 100%;
  height: auto;
  border-radius: 15px;
  display: block;
  object-fit: cover;
  max-height: 400px;
}

/* Members Section */
.members-section {
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
}

.section-subtitle {
  background: linear-gradient(
    135deg,
    var(--primary-blue),
    var(--primary-green)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

/* Highlights Section */
.highlights-section {
  max-width: 900px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
}

.highlights-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 25px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.highlights-content:hover {
  transform: translateY(-5px);
  border-color: rgba(43, 76, 140, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.highlights-content h3 {
  background: linear-gradient(
    135deg,
    var(--primary-blue),
    var(--primary-green)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.highlights-list li {
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #ccc;
  font-size: 1.1rem;
  line-height: 1.6;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 3rem;
}

.highlights-list li:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(43, 76, 140, 0.3);
  transform: translateX(5px);
}

.highlights-list li::before {
  content: "✓";
  position: absolute;
  left: 1rem;
  color: var(--primary-green);
  font-weight: bold;
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .year-hero {
    padding: 4rem 1rem 3rem;
    margin: 1rem 1rem 3rem;
  }

  .back-link {
    position: static;
    display: inline-block;
    margin-bottom: 2rem;
  }

  .year-nickname {
    font-size: 1.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .photo-section {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  .photo-container {
    padding: 1.5rem;
  }

  .group-photo {
    max-height: 300px;
  }

  .members-section {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  .section-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .members-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .highlights-section {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  .highlights-content {
    padding: 2rem 1.5rem;
  }

  .highlights-content h3 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .year-hero {
    padding: 3rem 1rem 2rem;
  }

  .photo-section {
    margin-bottom: 2rem;
  }

  .photo-container {
    padding: 1rem;
  }

  .members-section {
    margin-bottom: 2rem;
  }

  .highlights-section {
    margin-bottom: 2rem;
  }

  .highlights-content {
    padding: 1.5rem;
  }

  .highlights-list li {
    padding: 0.8rem 1rem 0.8rem 2.5rem;
    font-size: 1rem;
  }

  .highlights-list li::before {
    left: 0.8rem;
  }
}
</style>
