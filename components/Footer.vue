<template>
  <div class="footer-container">
    <footer class="footer">
      <div class="social-media">
        <a href="https://www.instagram.com/dispuutebriusvespertina/" target="_blank" rel="noopener noreferrer">
          <NuxtImg
            src="/instagram-icon.webp"
            alt="Instagram"
            width="40"
            height="40"
            format="webp"
            sizes="40px"
            loading="lazy"
          />
        </a>
        <a href="mailto:info@ebriusvespertina.nl" target="_blank" rel="noopener noreferrer">
          <NuxtImg
            src="/email-icon.webp"
            alt="Email"
            width="40"
            height="40"
            format="webp"
            sizes="40px"
            loading="lazy"
          />
        </a>
        <a href="https://svindicium.nl/dispuut" target="_blank" rel="noopener noreferrer">
          <NuxtImg
            src="https://svindicium.nl/icon.svg"
            alt="Indicium"
            style="filter: brightness(0) invert(1)"
            width="40"
            height="40"
            sizes="40px"
            loading="lazy"
          />
        </a>
      </div>
      <div class="copyright">
        <NuxtImg
          src="/logo-bw-200w.png"
          alt="Dispuut Ebrius Vespertina"
          width="18"
          height="18"
          format="webp"
          sizes="18px"
          loading="lazy"
        />
        <span> &copy; 2025 Dispuut Ebrius Vespertina.</span>
        <NuxtImg
          src="/logo-bw-200w.png"
          alt="Dispuut Ebrius Vespertina"
          width="18"
          height="18"
          format="webp"
          sizes="18px"
          loading="lazy"
        />
      </div>
    </footer>
  </div>
</template>
r

<style scoped>
.footer-container {
  background-color: var(--secondary-bg-color);
  color: white;
  width: 100%;
  padding: 0.5rem 0;
  box-shadow: 0 -2px 8px var(--secondary-bg-color);
  margin-top: 2rem;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.social-media {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  img {
    height: 2.5em;
    width: 2.5em;
    transform: scale(1.2);
  }
}

.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  font-size: 0.75rem;
  width: 100%;

  & img {
    height: 1.5em;
    width: 1.5em;
    margin: 0 10%;
  }

  & span {
    flex-shrink: 0;
  }
}
</style>
