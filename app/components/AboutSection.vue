<template>
  <section id="about" class="about-section">
    <div class="about-content">
      <div class="about-photo">
        <img src="/about/photo.jpg" alt="3D-розробник" />
      </div>

      <div class="about-text">
        <h2>Про мене</h2>
        <p>
          Привіт! Я 3D-художник, спеціалізуюсь на створенні персонажів, локацій
          та ігрових асетів. Працюю з Blender, ZBrush та Substance Painter.
          Люблю поєднувати стилізовану естетику з технічно чистою топологією.
        </p>
        <p>
          Понад 3 роки досвіду в розробці 3D-контенту для ігор та рекламних проєктів.
          Готовий взятись за індивідуальне замовлення або продати вже готову модель
          з мого магазину.
        </p>

        <ul class="skills">
          <li>Blender</li>
          <li>ZBrush</li>
          <li>Substance Painter</li>
          <li>Low-poly / стилізація</li>
          <li>PBR-текстурування</li>
        </ul>

        <div class="about-socials">
          <a href="https://t.me/твій_нік" target="_blank">Telegram</a>
          <a href="mailto:твоя@пошта.com">Email</a>
          <a href="https://instagram.com/твій_нік" target="_blank">Instagram</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 80px 20px;
  max-width: 1100px;
  margin: 0 auto;
}

.about-content {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 50px;
  align-items: center;
}

.about-photo img {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  aspect-ratio: 1 / 1;
}

.about-text h2 {
  margin-top: 0;
  font-size: 2rem;
}

.about-text p {
  line-height: 1.7;
  color: #ccc;
}

.skills {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0;
}

.skills li {
  padding: 6px 14px;
  border: 1px solid #444;
  border-radius: 999px;
  font-size: 0.9rem;
  color: #ddd;
}

.about-socials {
  display: flex;
  gap: 20px;
}

.about-socials a {
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #555;
  padding-bottom: 2px;
  transition: border-color 0.2s;
}
.about-socials a:hover {
  border-color: #fff;
}

@media (max-width: 768px) {
  .about-section {
    padding: 50px 16px;
  }
  .about-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }
  .about-photo img {
    max-width: 220px;
    margin: 0 auto;
  }
  .skills {
    justify-content: center;
  }
  .about-socials {
    justify-content: center;
  }
  .about-section {
    padding: 80px 20px;
    max-width: 1100px;
    margin: 0 auto;
    scroll-margin-top: 80px;
  }
}
</style>