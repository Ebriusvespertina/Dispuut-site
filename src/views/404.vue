<template>
  <Container>
    <div
      style="
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        text-align: center;
      "
    >
      <h1>Sorry, deze pagina bestaat niet</h1>
      <p class="card center">Error code: 404</p>
      <p>De pagina die u zoekt is niet gevonden.</p>
      <router-link to="/" class="card" style="text-decoration: none; display: inline-block; margin-top: 16px">
        🏠 Terug naar de homepage
      </router-link>
    </div>
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/Container.vue';
</script>
