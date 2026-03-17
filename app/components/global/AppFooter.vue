<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Dispuut Ebrius Vespertina</h3>
        <p>
          Een vrienden dispuut voor HBO-ICT studenten die graag samenkomen voor borrels, activiteiten en gezelligheid.
        </p>
      </div>

      <div class="footer-section">
        <h4>Navigatie</h4>
        <nav class="footer-nav" aria-label="Footer navigatie">
          <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to">
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <div class="footer-section">
        <h4>Contact</h4>
        <div class="contact-info">
          <p>
            <Icon name="lucide:mail" class="contact-icon" />
            info@ebriusvespertina.nl
          </p>
          <p>
            <Icon name="lucide:map-pin" class="contact-icon" />
            Heidelberglaan 15, Utrecht
          </p>
          <p>
            <Icon name="lucide:beer" class="contact-icon" />
            Ook te vinden in de Hideout!
          </p>
        </div>
      </div>

      <div class="footer-section">
        <h4>Volg ons</h4>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <span>
          &copy; {{ new Date().getFullYear() }} D.E.V. Dispuut Ebrius Vespertina. Alle rechten voorbehouden.
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { data: siteNavigation } = await useAsyncData("site-navigation-footer", () =>
  queryCollection("siteNavigation").first(),
);

const navItems = computed(() => siteNavigation.value?.footerNav || []);
</script>

<style scoped>
.app-footer {
  background: var(--dark-bg);
  color: var(--text-light);
  margin-top: auto;
  border-top: 3px solid;
  border-image: linear-gradient(90deg, var(--primary-blue), var(--primary-green)) 1;
  font-family: "Georgia", serif;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 0.8fr;
  gap: 1.6rem;
}

.footer-section h3 {
  background: linear-gradient(90deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
}

.footer-section h4 {
  color: var(--text-light);
  font-size: 1.05rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.footer-section p {
  margin: 0 0 0.5rem 0;
  line-height: 1.75;
  color: #ccc;
  font-size: 1rem;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.footer-nav a {
  color: #ccc;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.2rem 0;
  font-size: 1rem;
}

.footer-nav a::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-blue), var(--primary-green));
  transition: width 0.3s ease;
}

.footer-nav a:hover::after {
  width: 100%;
}

.footer-nav a:hover {
  color: #fff;
  transform: translateX(5px);
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.7rem 0;
  font-size: 1rem;
}

.contact-icon {
  color: var(--primary-green);
  flex-shrink: 0;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ccc;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: linear-gradient(90deg, var(--primary-blue), var(--primary-green));
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border-color: transparent;
}

.social-link svg {
  width: 22px;
  height: 22px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom span {
  color: #ccc;
  font-size: 0.9rem;
}

/* Responsive design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 1.3rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    padding: 2rem 1rem 1.6rem;
    gap: 1.1rem;
  }

  .footer-section {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 1rem;
  }

  .footer-section h3 {
    font-size: 1.35rem;
  }

  .footer-bottom-content {
    text-align: center;
    padding: 1rem;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
