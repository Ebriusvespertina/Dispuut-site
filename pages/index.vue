<template>
  <div>
    <h1 class="center">
      Welkom bij Dispuut
      <!-- This inline div groups the name for smaller screens -->
      <div style="display: inline-block">
        <span class="secondary">Ebrius </span>
        <span class="primary">Vespertina</span>
      </div>
    </h1>
    <img
      class="rounded card"
      src="/dispuut-bier.webp"
      alt="Dispuut Ebrius Vespertina"
      width="666.67"
      height="476.19"
      style="margin-bottom: 16px"
    />
    <div class="card" style="text-align: justify">
      <p>
        <span class="bold" style="font-size: 1.25rem"
          >Dispuut <span class="secondary bold">Ebrius</span> <span class="primary">Vespertina </span></span
        >
        <span style="display: inline-block; font-size: 0.75rem">( D.E.V. )</span> is een gemengd dispuut dat gelieerd is
        aan Indicium.<br /><br />Het dispuut is een hechte vrienden groep waar elk jaar een nieuwe jaarlaag bij komt.
        Als groepering zoeken wij het studenten leven op door elke maand een activiteit te organiseren voor onze leden,
        vaak onder het genot van een drankje.<br /><br />Elk jaar zal het dispuut op vakantie gaan, een
        kennismakingskamp organiseren om nieuwe leden te ontmoeten, en uitgebreid onze verjaardag vieren. De vrienden
        die je hier maakt worden vrienden voor het leven en lid van dit Dispuut zal je voor altijd blijven.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Set page title
useHead({
  title: 'Home - Dispuut Ebrius Vespertina',
});
</script>
