<template>
  <section id="bak-time-leaderboard" class="fade-in">
    <h2 class="section-title">
      <Icon name="lucide:beer" class="title-icon" />
      Bakken Leaderboard
    </h2>
    <div class="leaderboard-container">
      <div class="leaderboard-header">
        <span>Rang</span>
        <span>Naam</span>
        <span>Tijd</span>
      </div>
      <div
        v-for="(entry, i) in visibleLeaderboard"
        :key="entry.name + entry.time"
        :class="['leaderboard-item', i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '']"
      >
        <span class="rank">
          <Icon v-if="i === 0" name="lucide:medal" class="rank-icon rank-gold" />
          <Icon v-else-if="i === 1" name="lucide:medal" class="rank-icon rank-silver" />
          <Icon v-else-if="i === 2" name="lucide:medal" class="rank-icon rank-bronze" />
          <span v-else>{{ i + 1 }}</span>
        </span>
        <span class="name">{{ entry.name }}</span>
        <span class="time">{{ entry.time.toFixed(3) }}s</span>
      </div>
    </div>
    <div style="text-align: center; margin-top: 1rem">
      <button
        v-if="leaderboard.length > pageSize"
        @click="showMore"
        class="show-more-btn"
        v-show="visibleCount < leaderboard.length"
      >
        Toon meer
      </button>
      <button
        v-if="visibleCount > pageSize"
        @click="collapseOnePage"
        class="show-more-btn"
        v-show="visibleCount > pageSize"
      >
        Toon minder
      </button>
    </div>
    <p style="text-align: center; color: #999; margin-top: 1rem">
      * Gemeten onder toezicht met een Qiyi Speedcube timer
    </p>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const { getBakkenLeaderboard } = useDevData();

const { data: leaderboardData } = await useAsyncData("bakken-leaderboard", () => getBakkenLeaderboard());

const leaderboard = computed(() => leaderboardData.value || []);

const pageSize = 5;
const visibleCount = ref(pageSize);
const fullyExpanded = ref(false);

const visibleLeaderboard = computed(() =>
  fullyExpanded.value ? leaderboard.value : leaderboard.value.slice(0, visibleCount.value),
);

function showMore() {
  visibleCount.value = Math.min(visibleCount.value + pageSize, leaderboard.value.length);
  if (visibleCount.value === leaderboard.value.length) fullyExpanded.value = true;
}
function collapseOnePage() {
  visibleCount.value = Math.max(pageSize, visibleCount.value - pageSize);
  fullyExpanded.value = false;
}
</script>

<style scoped>
.leaderboard-container {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}
.leaderboard-header {
  display: grid;
  grid-template-columns: 60px 1fr 100px;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  font-weight: bold;
  color: #ccc;
  font-size: 0.9rem;
  text-transform: uppercase;
}
.leaderboard-item {
  display: grid;
  grid-template-columns: 60px 1fr 100px;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  align-items: center;
  max-width: 100%;
}
.leaderboard-item:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px) scale(1.05);
  transform-origin: left center;
  z-index: 1;
  max-width: calc(95% - 20px);
}
.leaderboard-item.gold {
  background: linear-gradient(90deg, rgba(255, 215, 0, 0.1), transparent);
}
.leaderboard-item.silver {
  background: linear-gradient(90deg, rgba(192, 192, 192, 0.1), transparent);
}
.leaderboard-item.bronze {
  background: linear-gradient(90deg, rgba(205, 127, 50, 0.1), transparent);
}
.rank {
  font-size: 1.2rem;
  font-weight: bold;
}

.rank-icon {
  font-size: 1.1rem;
}

.rank-gold {
  color: #ffd700;
}

.rank-silver {
  color: #c0c0c0;
}

.rank-bronze {
  color: #cd7f32;
}

.title-icon {
  margin-right: 0.5rem;
  color: var(--primary-green);
}
.name {
  font-weight: 500;
  color: var(--text-light);
}
.time {
  font-weight: bold;
  color: var(--primary-green);
}
.show-more-btn {
  background: var(--primary-green, #4caf50);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  margin: 0.25rem 0.5rem 0 0.5rem;
  transition: background 0.2s;
}
.show-more-btn:hover {
  background: #388e3c;
}
</style>
