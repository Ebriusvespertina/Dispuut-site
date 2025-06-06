<template>
  <div class="layout-wrapper">
    <Header />
    <Container>
      <slot />
    </Container>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Container from '~/components/Container.vue';
import Footer from '~/components/Footer.vue';
</script>

<style>
.layout-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
