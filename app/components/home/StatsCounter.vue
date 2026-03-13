<template>
  <section id="stats" class="fade-in">
    <h2 class="section-title">D.E.V. in Cijfers</h2>
    <div class="stats-grid">
      <div class="stat-card" v-for="stat in stats" :key="stat.label">
        <div class="stat-number">{{ formatStatValue(stat.value) }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { getStats } = useDevData();

const { data: statsData } = await useAsyncData("home-stats", () => getStats());

const stats = computed(() => {
  const s = statsData.value || {
    totalMembers: 0,
    yearGroups: 0,
    totalActivities: 0,
    totalBakken: 0,
  };

  return [
    { label: "Leden", value: s.totalMembers },
    { label: "Jaarlagen", value: s.yearGroups },
    { label: "Activiteiten", value: s.totalActivities },
    { label: "Bakken", value: s.totalBakken },
  ];
});

function formatStatValue(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return "0";
  }

  if (value < 10000) {
    return String(value);
  }

  const units = [
    { threshold: 1e12, suffix: "T+" },
    { threshold: 1e9, suffix: "B+" },
    { threshold: 1e6, suffix: "M+" },
    { threshold: 1e3, suffix: "k+" },
  ];

  for (const unit of units) {
    if (value >= unit.threshold) {
      const scaled = value / unit.threshold;
      const display =
        scaled >= 100 ? Math.floor(scaled) : Math.floor(scaled * 10) / 10;
      const normalized = Number.isInteger(display)
        ? String(display)
        : String(display).replace(/\.0$/, "");

      return `${normalized}${unit.suffix}`;
    }
  }

  return String(value);
}
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.stat-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem 0;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary-blue);
}
.stat-number {
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(
    135deg,
    var(--primary-blue),
    var(--primary-green)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 0.5rem;
}
.stat-label {
  font-size: 1.1rem;
  color: #999;
}
</style>
