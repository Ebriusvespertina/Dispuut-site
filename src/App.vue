<script setup lang="ts">
import Header from '@/components/Header.vue';
import Container from '@/components/Container.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Header />
  <Container>
    <router-view></router-view>
  </Container>
  <Footer />
</template>
