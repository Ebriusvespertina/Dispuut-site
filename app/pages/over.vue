<template>
  <div class="about-page page-content">
    <!-- Hero Section -->
    <section class="about-hero fade-in">
      <h1 class="section-title">Over D.E.V.</h1>
      <p class="hero-subtitle">Dispuut Ebrius Vespertina - Een hechte vriendengroep voor het leven</p>
    </section>

    <!-- Main About Content -->
    <section id="about-main" class="fade-in">
      <div class="about-content">
        <div class="about-text">
          <h2>Wie zijn wij?</h2>
          <p>
            Dispuut Ebrius Vespertina (D.E.V.) is een gemengd dispuut dat is gelieerd aan Studievereniging Indicium. Ons
            dispuut vormt een hechte vriendengroep die elk jaar wordt uitgebreid met een nieuwe jaarlaag.
          </p>
          <p>
            Wij streven ernaar om het studentenleven volledig te omarmen door elke maand activiteiten te organiseren
            voor onze leden, meestal onder het genot van een drankje. De vriendschappen die binnen D.E.V. ontstaan, zijn
            voor het leven. Lid zijn van dit dispuut betekent dat je deel uitmaakt van een gemeenschap die je de rest
            van je leven zal blijven koesteren.
          </p>
        </div>
        <div class="values">
          <h3>Onze Waarden</h3>
          <ul>
            <li>
              <Icon name="lucide:swords" class="value-icon" />
              <span>Vriendschap voor het leven</span>
            </li>
            <li>
              <Icon name="lucide:swords" class="value-icon" />
              <span>Het studentenleven omarmen</span>
            </li>
            <li>
              <Icon name="lucide:swords" class="value-icon" />
              <span>Maandelijkse gezelligheid</span>
            </li>
            <li>
              <Icon name="lucide:swords" class="value-icon" />
              <span>Onvergetelijke herinneringen</span>
            </li>
            <li>
              <Icon name="lucide:swords" class="value-icon" />
              <span>Samen groeien als groep</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Join Us Section -->
    <section class="join-section fade-in">
      <div class="join-content">
        <h2>Wordt onderdeel van D.E.V.</h2>
        <p>
          Ben je geïnteresseerd om lid te worden van ons dispuut? We zijn altijd op zoek naar nieuwe leden die onze
          waarden delen en bij willen dragen aan onze hechte gemeenschap.
        </p>
        <div class="join-requirements">
          <div class="requirement">
            <h4>
              <Icon name="lucide:graduation-cap" class="requirement-icon" />
              Student
            </h4>
            <p>Je bent student aan de HU en lid van Studievereniging Indicium</p>
          </div>
          <div class="requirement">
            <h4>
              <Icon name="lucide:handshake" class="requirement-icon" />
              Sociale instelling
            </h4>
            <p>Je houdt van gezelligheid en wilt actief bijdragen aan de vriendengroep</p>
          </div>
          <div class="requirement">
            <h4>
              <Icon name="lucide:beer" class="requirement-icon" />
              Borrel mentaliteit
            </h4>
            <p>Je waardeerd een lekkere borrel maar vooral de gezelligheid van het studentenleven</p>
          </div>
        </div>
        <div class="cta-section">
          <NuxtLink to="/contact" class="cta-button">
            Neem Contact Op
            <span class="arrow">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
}

/* Hero Section */
.about-hero {
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
}

/* Main About Section */
#about-main {
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.about-content h2 {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 1.5rem;
}

.values {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.values:hover {
  transform: translateY(-5px);
  border-color: var(--primary-green);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.values h3 {
  color: var(--primary-green);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.values ul {
  list-style: none;
  font-size: 1.1rem;
}

.values li {
  padding: 0.5rem 0;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  color: #ccc;
  line-height: 1.6;
}

.value-icon {
  color: var(--primary-green);
  font-size: 1rem;
  margin-top: 0.25rem;
}

/* Join Section */
.join-section {
  max-width: 900px;
  margin: 5rem auto;
  padding: 0 2rem;
}

.join-content {
  background: rgba(255, 255, 255, 0.05);
  padding: 3rem;
  border-radius: 25px;
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.join-content:hover {
  transform: translateY(-5px);
  border-color: rgba(43, 76, 140, 0.4);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.join-content h2 {
  background: linear-gradient(135deg, var(--primary-blue), var(--primary-green));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.join-content > p {
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.join-requirements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.requirement {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.requirement:hover {
  transform: translateY(-5px);
  border-color: var(--primary-blue);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.requirement h4 {
  color: var(--text-light);
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.requirement-icon {
  color: var(--primary-blue);
}

.requirement p {
  color: #ccc;
  line-height: 1.6;
}

.cta-section {
  margin-top: 3rem;
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
  .about-hero {
    padding: 2rem 1rem 3rem;
    margin: 1rem 1rem 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-content h2 {
    font-size: 2rem;
  }

  .join-content {
    padding: 2rem 1.5rem;
  }

  .join-content h2 {
    font-size: 2rem;
  }

  .join-requirements {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  #about-main,
  .join-section {
    padding: 0 1rem;
    margin: 3rem auto;
  }
}

@media (max-width: 480px) {
  .requirement,
  .values {
    padding: 1.5rem;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>
