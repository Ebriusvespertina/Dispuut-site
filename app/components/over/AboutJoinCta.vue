<template>
  <div class="about-join-cta">
    <div class="cta-copy">
      <h3>Klinkt dit als iets voor jou?</h3>
      <p>Neem contact op en kom vrijblijvend kennismaken met D.E.V.</p>
    </div>
    <NuxtLink to="/contact" class="cta-link">
      Neem Contact Op
      <span class="arrow">→</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
.about-join-cta {
  margin-top: 3rem;
  padding: 1.5rem 1.75rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
}

.cta-copy {
  text-align: left;
}

.cta-copy h3 {
  font-size: 1.2rem;
  margin-bottom: 0.35rem;
  color: var(--text-light);
}

.cta-copy p {
  color: #ccc;
  line-height: 1.5;
}

.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  white-space: nowrap;
  padding: 0.95rem 2rem;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.cta-link:hover {
  filter: brightness(1.08);
}

.arrow {
  transition: transform 0.3s ease;
}

.cta-link:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .about-join-cta {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .cta-link {
    width: 100%;
    justify-content: center;
  }
}
</style>
