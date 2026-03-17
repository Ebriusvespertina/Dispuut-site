<template>
  <div class="activity-card">
    <Icon v-if="icon" :name="icon" class="activity-icon" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String,
});
</script>

<style scoped>
.activity-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.activity-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  opacity: 0;
  transition: all 0.3s ease;
  z-index: -1;
}

.activity-icon {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.activity-icon :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}

.activity-card h3 {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  overflow-wrap: break-word;
  word-break: break-word;
}

.activity-card p {
  color: #ccc;
  line-height: 1.6;
  font-size: 1rem;
}
</style>
