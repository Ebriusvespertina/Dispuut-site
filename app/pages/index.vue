<template>
  <div>
    <HeroSection />
    <StatsSection />
    <BakkenLeaderboard />
    <InstagramPreview />
  </div>
</template>

<script setup>
import HeroSection from "~/components/home/HeroSection.vue";
import StatsSection from "~/components/home/StatsCounter.vue";
import BakkenLeaderboard from "~/components/bakken/BakkenLeaderboard.vue";
import InstagramPreview from "~/components/home/InstagramPreview.vue";

// SEO
useHead({
  title: "Home - D.E.V. Dispuut",
});
</script>
