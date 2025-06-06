<template>
  <Container>
    <header>
      <h1 class="center">
        Welkom bij Dispuut
        <!-- This inline div groups the name for smaller screens -->
        <div style="display: inline-block">
          <span class="secondary">Ebrius </span>
          <span class="primary">Vespertina</span>
        </div>
      </h1>
    </header>

    <main>
      <img
        class="rounded card"
        src="/dispuut-bier.webp"
        alt="Groepsfoto van Dispuut Ebrius Vespertina leden tijdens een gezellige bijeenkomst"
        width="666.67"
        height="476.19"
        style="margin-bottom: 16px"
        fetchpriority="high"
        loading="eager"
      />

      <section class="card" style="text-align: justify">
        <h2 class="bold" style="font-size: 1.25rem; margin-top: 0">
          Dispuut <span class="secondary bold">Ebrius</span> <span class="primary">Vespertina</span>
          <span style="display: inline-block; font-size: 0.75rem; font-weight: normal">( D.E.V. )</span>
        </h2>

        <p>
          is een gemengd dispuut dat aangesloten zit bij Indicium. Het dispuut is een hechte vrienden groep waar elke
          jaar een nieuwe jaarlage bij komt. Als groepering proberen we ervoor te zorgen dat wij het studenten leven op
          zoeken door elke maand activiteiten te houden voor onze leden onder het genot van een drankje.
        </p>

        <p>
          Elk jaar zal het dispuut als groep ook op vakantie gaan, een kennismakingskamp om de nieuwe leden te ontmoeten
          en vieren we onze verjaardag uitgebreid. De vrienden die je hier maakt worden vrienden voor het leven en lid
          van dit Dispuut zal je voor de rest van je leven blijven.
        </p>
      </section>
    </main>
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue';
</script>
