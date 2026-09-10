document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.setProperty("--primary", SITE_CONFIG.branding.primary);
  document.documentElement.style.setProperty("--secondary", SITE_CONFIG.branding.secondary);
  document.documentElement.style.setProperty("--accent", SITE_CONFIG.branding.accent);
  document.documentElement.style.setProperty("--light", SITE_CONFIG.branding.light);

  document.querySelectorAll("[data-company-name]").forEach(e => e.textContent = SITE_CONFIG.company.name);
  document.querySelectorAll("[data-short-name]").forEach(e => e.textContent = SITE_CONFIG.company.shortName);
  document.querySelectorAll("[data-tagline]").forEach(e => e.textContent = SITE_CONFIG.company.tagline);
  document.querySelectorAll("[data-description]").forEach(e => e.textContent = SITE_CONFIG.company.description);
  document.querySelectorAll("[data-email]").forEach(e => { e.textContent = SITE_CONFIG.contact.email; e.href = "mailto:"+SITE_CONFIG.contact.email; });
  document.querySelectorAll("[data-phone]").forEach(e => { e.textContent = SITE_CONFIG.contact.phone; e.href = "tel:"+SITE_CONFIG.contact.phone.replace(/\s/g,""); });
  document.querySelectorAll("[data-address]").forEach(e => e.textContent = SITE_CONFIG.contact.address);
  document.querySelectorAll("[data-whatsapp]").forEach(e => e.href = "https://wa.me/"+SITE_CONFIG.contact.whatsapp);

  document.title = SITE_CONFIG.company.name + " | " + SITE_CONFIG.company.tagline;
  document.querySelectorAll("[data-year]").forEach(e => e.textContent = new Date().getFullYear());

  const grid = document.querySelector("#industry-grid");
  if (grid) {
    SITE_CONFIG.industries.forEach(([name, desc]) => {
      const card = document.createElement("article");
      card.className = "industry-card";
      card.innerHTML = `<div class="industry-icon">◆</div><h3>${name}</h3><p>${desc}</p><a href="contact.html">Discuss your project →</a>`;
      grid.appendChild(card);
    });
  }

  const menu = document.querySelector(".mobile-toggle");
  const nav = document.querySelector(".site-nav");
  if (menu && nav) menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", nav.classList.contains("open"));
  });

  document.querySelectorAll(".site-nav a").forEach(a => {
    if (a.href === location.href || (a.pathname === location.pathname && a.getAttribute("href") !== "#")) a.classList.add("active");
  });
});