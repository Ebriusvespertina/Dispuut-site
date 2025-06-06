<template>
  <div>
    <NuxtImg
      class="rounded card"
      src="/logo-dev.svg"
      alt="Dispuut Ebrius Vespertina"
      width="256"
      height="256"
      sizes="sm:256px md:256px lg:256px"
      style="
        margin: 24px auto auto;
        background-color: color-mix(in srgb, var(--primary-color) 60%, var(--background-color));
      "
    />
    <h1 class="center">
      Over Dispuut
      <!-- This inline div groups the name for smaller screens -->
      <div style="display: inline-block">
        <span class="secondary">Ebrius </span>
        <span class="primary">Vespertina</span>
      </div>
    </h1>

    <div class="card">
      <p>
        Dispuut Ebrius Vespertina (D.E.V.) is een gemengd dispuut dat is gelieerd aan Studievereniging Indicium. Ons
        dispuut vormt een hechte vriendengroep die elk jaar wordt uitgebreid met een nieuwe jaarlaag.
      </p>
      <p>
        Wij streven ernaar om het studentenleven volledig te omarmen door elke maand activiteiten te organiseren voor
        onze leden, meestal onder het genot van een drankje.
      </p>
      <p></p>
      <section>
        <h3>Activiteiten</h3>
        <p>
          Maandelijks organiseren we diverse activiteiten om onze band te versterken en plezier te maken. Van gezellige
          borrels tot uitdagende sportevenementen, er is voor ieder wat wils.
        </p>

        <h3>Jaarlijkse Hoogtepunten</h3>
        <p>
          Elk jaar gaan we als groep op vakantie en organiseren we een kennismakingskamp om nieuwe leden te verwelkomen.
          Daarnaast vieren we onze verjaardag uitgebreid met allerlei festiviteiten.
        </p>

        <h3>Vriendschap voor het Leven</h3>
        <p>
          De vriendschappen die binnen D.E.V. ontstaan, zijn voor het leven. Lid zijn van dit dispuut betekent dat je
          deel uitmaakt van een gemeenschap die je de rest van je leven zal blijven koesteren.
        </p>
      </section>
      <p>
        Bij Dispuut Ebrius Vespertina draait alles om het opzoeken van het studentenleven en het smeden van
        onvergetelijke herinneringen. Sluit je aan bij ons en word deel van een groep vrienden die je altijd zal
        bijstaan. Voor meer informatie of om lid te worden, kun je contact met ons opnemen via de mail.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Set page title
useHead({
  title: 'Over ons - Dispuut Ebrius Vespertina',
});
</script>
