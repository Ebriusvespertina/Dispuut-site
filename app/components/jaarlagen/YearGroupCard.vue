<template>
  <div
    class="jaarlaag-card"
    @click="$emit('click')"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="card-overlay">
      <h3>Jaarlaag {{ year }}</h3>
      <p class="jaarlaag-nickname" v-if="group.name">"{{ group.name }}"</p>
      <div class="jaarlaag-members">
        <span>{{ group.members.length }} leden</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  year: String,
  group: Object,
});

const fallbackImage = computed(
  () => `https://picsum.photos/400/300?random=${props.year}`,
);

const backgroundImage = ref(fallbackImage.value);
let resolveRequestId = 0;

const isImageAvailable = async (photoPath) => {
  try {
    const response = await fetch(photoPath, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
};

const resolveBackgroundImage = async (photoPath) => {
  const requestId = ++resolveRequestId;

  if (!photoPath) {
    backgroundImage.value = fallbackImage.value;
    return;
  }

  const available = await isImageAvailable(photoPath);
  if (requestId !== resolveRequestId) {
    return;
  }

  if (available) {
    backgroundImage.value = photoPath;
  } else {
    backgroundImage.value = fallbackImage.value;
  }
};

watch(
  () => [props.group?.groupPhoto, props.year],
  ([groupPhoto]) => {
    resolveBackgroundImage(groupPhoto);
  },
  { immediate: true },
);
</script>

<style scoped>
.jaarlaag-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.1),
    0 5px 15px rgba(0, 0, 0, 0.2);
}

.jaarlaag-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(4px) brightness(0.7);
  z-index: 1;
}

.jaarlaag-card:hover {
  transform: translateY(-10px);
  box-shadow:
    inset 0 0 0 1px rgba(43, 76, 140, 0.6),
    0 20px 40px rgba(0, 0, 0, 0.4);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.6),
    rgba(43, 76, 140, 0.5),
    rgba(58, 95, 58, 0.5)
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;
  z-index: 2;
}

.jaarlaag-card:hover .card-overlay {
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7),
    rgba(43, 76, 140, 0.6),
    rgba(58, 95, 58, 0.6)
  );
}

.jaarlaag-card h3 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: white;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.jaarlaag-nickname {
  font-style: italic;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.jaarlaag-members {
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.jaarlaag-description {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  max-width: 250px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .jaarlaag-card {
    height: 250px;
  }

  .card-overlay {
    padding: 1.5rem;
  }

  .jaarlaag-card h3 {
    font-size: 1.6rem;
  }

  .jaarlaag-nickname {
    font-size: 1.1rem;
  }

  .jaarlaag-members {
    font-size: 1rem;
  }

  .jaarlaag-description {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .jaarlaag-card {
    height: 220px;
  }

  .card-overlay {
    padding: 1rem;
  }

  .jaarlaag-card h3 {
    font-size: 1.4rem;
  }
}
</style>
