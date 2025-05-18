<template>
  <div class="header-container">
    <header class="header">
      <div class="logo">
        <router-link to="/">
          <img src="/logo-dev.svg" alt="Dispuut Ebrius Vespertina" />
        </router-link>
      </div>
      <nav class="nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/over-ons">Over ons</router-link></li>
          <a href="mailto:info@ebriusvespertina.nl" target="_blank" rel="noopener noreferrer"> Contact </a>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.header-container {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 0.5rem 0;
  box-shadow: 0 0 8px var(--background-color);
  margin-bottom: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  max-width: 740px;
  margin: 0 auto;
  & a:hover {
    color: white;
    text-decoration: underline;
    text-decoration-color: var(--secondary-color);
    text-decoration-thickness: 0.1em;
  }
}

.logo img {
  height: 2.5em;
  width: 2.5em;
  transform: scale(1.75);

  &:hover {
    filter: grayscale(20%);
    transform: scale(1.7);
  }
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

.nav a:hover {
  color: var(--secondary-color);
}
</style>
