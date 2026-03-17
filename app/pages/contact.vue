<template>
  <div class="contact-page page-content">
    <!-- Hero Section -->
    <section class="contact-hero fade-in">
      <h1 class="section-title">Contact</h1>
      <p class="hero-subtitle">
        Interesse in D.E.V.? Neem contact met ons op en word onderdeel van onze hechte vriendengroep.
      </p>
    </section>

    <!-- Contact Information -->
    <section class="contact-main fade-in">
      <div class="contact-grid">
        <div class="info-item">
          <Icon name="lucide:mail" class="icon" />
          <h3>Email</h3>
          <p>Voor vragen of om lid te worden:</p>
          <a href="mailto:info@dev-dispuut.nl" class="link-a"> info@ebriusvespertina.nl </a>
        </div>

        <div class="info-item">
          <Icon name="lucide:map-pin" class="icon" />
          <h3>Locatie</h3>
          <p>In de Hogeschool Utrecht:</p>
          <a href="https://maps.app.goo.gl/uxbGNK7vgbF6iucp7" target="_blank" class="link-b"> Bekijk op Google Maps </a>
        </div>

        <div class="info-item">
          <Icon name="lucide:clock-3" class="icon" />
          <h3>Activiteiten</h3>
          <p>Wekelijks en maandelijks:</p>
          <a href="https://maps.app.goo.gl/QGVp4KAUyu5DYr1dA" target="_blank" class="link-a"> Donderdag avonden </a>
        </div>

        <div class="info-item">
          <Icon name="lucide:smartphone" class="icon" />
          <h3>Social Media</h3>
          <p>Volg ons voor updates en foto's:</p>
          <div class="social-links">
            <a href="https://instagram.com/dispuutebriusvespertina" target="_blank" class="link-b"> Instagram </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="call-to-action fade-in">
      <div class="cta-content">
        <h2>Word Lid van D.E.V.</h2>
        <p>
          Klaar om deel uit te maken van onze vriendenkring? Stuur ons een bericht en ontdek wat D.E.V. voor jou kan
          betekenen!
        </p>
        <a href="mailto:info@ebriusvespertina.nl" class="cta-button">
          Neem contact op
          <span class="arrow">→</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: "Contact - D.E.V. Dispuut",
  meta: [
    {
      name: "description",
      content:
        "Neem contact op met Dispuut Ebrius Vespertina. Word lid van onze hechte gemeenschap en ontdek het studentenleven zoals het bedoeld is.",
    },
  ],
});
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
}

/* Hero Section */
.contact-hero {
  text-align: center;
  padding: 4rem 2rem;
  background: radial-gradient(circle at center, rgba(43, 76, 140, 0.2), transparent);
  margin: 0 auto 4rem;
  max-width: 1200px;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #999;
  margin-top: 1rem;
  font-style: italic;
  font-weight: 300;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Main Section */
.contact-main {
  max-width: 1480px;
  margin: 0 auto 5rem;
  padding: 0 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}

@media (max-width: 1480px) {
  .contact-main {
    max-width: 800px;
  }

  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.info-item {
  text-align: center;
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(43, 76, 140, 0.4);
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.icon {
  font-size: 3rem;
  margin: 0 auto 1rem;
  display: block;
  line-height: 1;
}

.info-item h3 {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.info-item p {
  color: #ccc;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.info-item .detail {
  color: #999;
  font-size: 1rem;
  font-style: italic;
  margin-top: 0.5rem;
}

.link-a {
  display: inline-block;
  color: var(--primary-blue);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(43, 76, 140, 0.1);
  margin-top: 0.5rem;
  transition: all 0.3s ease;
}

.link-a:hover {
  color: white;
  background: var(--primary-blue);
  transform: translateY(-2px);
}

.social-links {
  margin-top: 1rem;
}

.link-b {
  display: inline-block;
  color: var(--primary-green);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(58, 95, 58, 0.1);
  margin: 0.25rem;
  transition: all 0.3s ease;
}

.link-b:hover {
  color: white;
  background: var(--primary-green);
  transform: translateY(-2px);
}

/* Call to Action Section */
.call-to-action {
  max-width: 900px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
}

.cta-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 25px;
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.cta-content:hover {
  transform: translateY(-5px);
  border-color: rgba(43, 76, 140, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.cta-content h2 {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.cta-content p {
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 5px 20px rgba(43, 76, 140, 0.4);
  position: relative;
  overflow: hidden;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(43, 76, 140, 0.6);
}

.cta-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.6s,
    height 0.6s;
}

.cta-button:hover::before {
  width: 300px;
  height: 300px;
}

.arrow {
  transition: transform 0.3s ease;
  z-index: 1;
  position: relative;
}

.cta-button:hover .arrow {
  transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-hero {
    padding: 2rem 1rem 3rem;
    margin: 1rem 1rem 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .contact-main {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .info-item {
    padding: 2rem 1.5rem;
  }

  .icon {
    font-size: 2.5rem;
  }

  .info-item h3 {
    font-size: 1.3rem;
  }

  .call-to-action {
    padding: 0 1rem;
    margin-bottom: 3rem;
  }

  .cta-content {
    padding: 2rem 1.5rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-content p {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .contact-main {
    margin-bottom: 2rem;
  }

  .info-item {
    padding: 1.5rem 1rem;
  }

  .icon {
    font-size: 2rem;
  }

  .call-to-action {
    margin-bottom: 2rem;
  }

  .cta-content {
    padding: 1.5rem;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>
