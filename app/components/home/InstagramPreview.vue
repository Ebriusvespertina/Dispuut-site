<template>
  <section id="instagram" class="fade-in">
    <h2 class="section-title">
      <Icon name="lucide:camera" class="section-icon" /> Instagram
    </h2>
    <!-- LightWidget Instagram Embed -->
    <div class="instagram-widget-wrapper">
      <iframe
        src="//cdn.lightwidget.com/widgets/328bb9df631351b3b848268b88321d49.html"
        class="lightwidget-widget"
        title="Instagram Feed"
      ></iframe>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
  script.async = true;
  document.body.appendChild(script);
});
</script>

<style scoped>
.instagram-widget-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}
.lightwidget-widget {
  max-width: 1200px;
  width: 100%;
  min-height: 600px;
  border: 0;
  overflow: hidden;
  border-radius: 12px;
}
.section-title {
  max-width: 100vw;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}

.section-icon {
  margin-right: 0.5rem;
  color: var(--primary-blue);
}
</style>
