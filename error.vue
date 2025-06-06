<template>
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
    <p class="card center">Error code: {{ error.statusCode }}</p>
    <p>De pagina die u zoekt is niet gevonden.</p>
    <NuxtLink to="/" class="card" style="text-decoration: none; display: inline-block; margin-top: 16px">
      🏠 Terug naar de homepage
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// Set page title
useHead({
  title: 'Pagina niet gevonden - Dispuut Ebrius Vespertina',
});

// Define props for error handling
defineProps<{
  error: {
    statusCode: number;
    statusMessage?: string;
  };
}>();
</script>
