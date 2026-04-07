<template>
  <section class="join-section fade-in">
    <div class="join-content">
      <h2>Wordt onderdeel van D.E.V.</h2>
      <p>
        Ben je geïnteresseerd om lid te worden van ons dispuut? We zijn altijd op zoek naar nieuwe leden die onze
        waarden delen en bij willen dragen aan onze hechte gemeenschap.
      </p>
      <div class="join-requirements">
        <div class="requirement">
          <h4>
            <Icon name="lucide:graduation-cap" class="requirement-icon" />
            Student
          </h4>
          <p>Je bent student aan de HU en lid van Studievereniging Indicium</p>
        </div>
        <div class="requirement">
          <h4>
            <Icon name="lucide:handshake" class="requirement-icon" />
            Sociale instelling
          </h4>
          <p>Je houdt van gezelligheid en wilt actief bijdragen aan de vriendengroep</p>
        </div>
        <div class="requirement">
          <h4>
            <Icon name="lucide:beer" class="requirement-icon" />
            Borrel mentaliteit
          </h4>
          <p>Je waardeerd een lekkere borrel maar vooral de gezelligheid van het studentenleven</p>
        </div>
      </div>
      <AboutJoinCta />
    </div>
  </section>
</template>

<script setup>
import AboutJoinCta from "~/components/over/AboutJoinCta.vue";
</script>

<style scoped>
.join-section {
  max-width: 900px;
  margin: 5rem auto;
  padding: 0 2rem;
}

.join-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 25px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.join-content h2 {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.join-content > p {
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.join-requirements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.requirement {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.requirement h4 {
  color: var(--text-light);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.requirement-icon {
  color: var(--primary-blue);
}

.requirement p {
  color: #ccc;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .join-content {
    padding: 2rem 1.5rem;
  }

  .join-content h2 {
    font-size: 2rem;
  }

  .join-requirements {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .join-section {
    padding: 0 1rem;
    margin: 3rem auto;
  }
}

@media (max-width: 480px) {
  .requirement {
    padding: 1.5rem;
  }
}
</style>
