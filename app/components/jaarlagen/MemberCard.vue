<template>
  <div class="member-card">
    <div class="member-info">
      <h4 class="member-name">{{ fullName }}</h4>
      <div class="member-details">
        <span v-if="member.bakTime && member.bakTime > 0" class="bak-time">
          <Icon name="lucide:beer" class="detail-icon" /> {{ member.bakTime }}s
        </span>
        <span v-if="member.role" class="member-role">{{ member.role }}</span>
        <span v-if="member.awards && member.awards.length > 0" class="awards">
          <span v-for="award in member.awards" :key="award" class="award">
            <Icon name="lucide:trophy" class="detail-icon" /> {{ award }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  member: {
    type: Object,
    required: true,
  },
});

// Compute full name from firstName, tussenvoegsel, lastName
const fullName = computed(() => {
  const { firstName, tussenvoegsel, lastName } = props.member;
  return [firstName, tussenvoegsel, lastName].filter(Boolean).join(" ");
});
</script>

<style scoped>
.member-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.member-card:hover {
  transform: translateY(-5px);
  border-color: rgba(43, 76, 140, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.member-info {
  padding: 2rem 1.5rem;
  text-align: center;
}

.member-name {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.member-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.bak-time {
  background: rgba(255, 215, 0, 0.2);
  color: #ffd700;
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 215, 0, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.member-role {
  color: #ccc;
  font-size: 0.95rem;
  font-style: italic;
}

.awards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.5rem;
}

.award {
  background: rgba(58, 95, 58, 0.2);
  color: var(--primary-green);
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(58, 95, 58, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.detail-icon {
  font-size: 0.9em;
}

/* Responsive Design */
@media (max-width: 768px) {
  .member-info {
    padding: 1.5rem 1rem;
  }

  .member-name {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .member-info {
    padding: 1rem;
  }

  .member-name {
    font-size: 1rem;
  }
}
</style>
