<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="header-inner">
      <NuxtLink to="/" class="brand">D.E.V.</NuxtLink>

      <nav class="desktop-nav" aria-label="Desktop navigatie">
        <ul class="desktop-list">
          <li v-for="item in navItems" :key="item.to">
            <NuxtLink :to="item.to" class="desktop-link">{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <DialogRoot v-model:open="mobileMenuOpen">
        <DialogTrigger as-child>
          <button class="menu-button" aria-label="Open mobiele navigatie">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </DialogTrigger>

        <DialogPortal>
          <DialogOverlay class="menu-overlay" />
          <DialogContent class="menu-panel">
            <DialogTitle class="sr-only">Navigatiemenu</DialogTitle>

            <div class="menu-top">
              <NuxtLink to="/" class="brand" @click="closeMobileMenu">D.E.V.</NuxtLink>
              <DialogClose as-child>
                <button class="close-button" aria-label="Sluit menu">✕</button>
              </DialogClose>
            </div>

            <nav class="mobile-nav" aria-label="Mobiele navigatie">
              <NuxtLink
                v-for="item in navItems"
                :key="`mobile-${item.to}`"
                :to="item.to"
                class="mobile-link"
                @click="closeMobileMenu"
              >
                {{ item.label }}
              </NuxtLink>
            </nav>
          </DialogContent>
        </DialogPortal>
      </DialogRoot>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const { data: siteNavigation } = await useAsyncData("site-navigation-main", () =>
  queryCollection("siteNavigation").first(),
);

const navItems = computed(() => siteNavigation.value?.mainNav || []);

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 24;
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
});
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1200;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(90deg, rgba(16, 16, 16, 0.94), rgba(26, 26, 26, 0.88));
  backdrop-filter: blur(8px);
  transition:
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.site-header.scrolled {
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.35);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.9rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  font-size: 1.9rem;
  line-height: 1;
  letter-spacing: 0.18em;
  text-decoration: none;
  color: #f2f2f2;
  font-weight: 700;
}

.desktop-nav {
  margin-left: auto;
}

.desktop-list {
  list-style: none;
  display: flex;
  gap: 1.4rem;
  margin: 0;
  padding: 0;
  align-items: center;
}

.desktop-link {
  color: #ddd;
  text-decoration: none;
  font-size: 1.05rem;
  padding-bottom: 0.28rem;
  position: relative;
  transition: color 0.2s ease;
}

.desktop-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-blue), var(--primary-green));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.desktop-link:hover,
.desktop-link.router-link-active {
  color: #fff;
}

.desktop-link:hover::after,
.desktop-link.router-link-active::after {
  transform: scaleX(1);
}

.menu-button {
  display: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  width: 44px;
  height: 44px;
  padding: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}

.menu-button span {
  width: 20px;
  height: 2px;
  background: #fff;
}

.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(6, 8, 14, 0.65);
  backdrop-filter: blur(3px);
  z-index: 1300;
}

.menu-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: min(86vw, 380px);
  height: 100dvh;
  background: linear-gradient(180deg, #111520 0%, #10131b 100%);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1301;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
}

.menu-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.4rem;
}

.close-button {
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 1.8rem;
  line-height: 1;
  cursor: pointer;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.mobile-link {
  color: #f0f0f0;
  text-decoration: none;
  padding: 0.85rem 0.6rem;
  border-radius: 10px;
  font-size: 1.35rem;
  border: 1px solid transparent;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;
}

.mobile-link:hover,
.mobile-link.router-link-active {
  background: rgba(43, 76, 140, 0.22);
  border-color: rgba(43, 76, 140, 0.55);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 900px) {
  .desktop-nav {
    display: none;
  }

  .menu-button {
    display: inline-flex;
  }

  .brand {
    font-size: 1.85rem;
  }
}
</style>
