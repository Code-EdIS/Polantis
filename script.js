const translations = {
  en: {
    hero_title: "Tech Beyond Limits",
    hero_subtitle: "Electronics redefined. Components, mobile tech and futuristic gadgets.",
    sec1_title: "PC Components",
    sec1_text: "Motherboards, GPUs, RAM, cooling systems and high-performance hardware.",
    sec2_title: "Mobile Universe",
    sec2_text: "Smartphones, wireless audio, chargers and portable technology.",
    sec3_title: "Smart Gadgets",
    sec3_text: "Small appliances and futuristic gadgets for everyday life."
  },
  pl: {
    hero_title: "Technologia bez granic",
    hero_subtitle: "Elektronika na nowo. Komponenty, mobilne technologie i futurystyczne gadżety.",
    sec1_title: "Komponenty PC",
    sec1_text: "Płyty główne, GPU, RAM, chłodzenie i wydajne podzespoły.",
    sec2_title: "Świat mobilny",
    sec2_text: "Smartfony, audio bezprzewodowe, ładowarki i technologia przenośna.",
    sec3_title: "Inteligentne gadżety",
    sec3_text: "Małe urządzenia i futurystyczne gadżety codziennego użytku."
  }
};

let lang = "en";

function setLang(l) {
  lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}

/* LOADER */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 800);
  }, 1200);
});

/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* NAV EFFECT ON SCROLL */
window.addEventListener("scroll", () => {
  const nav = document.getElementById("nav");
  if (window.scrollY > 50) {
    nav.classList.add("shadow-lg");
  } else {
    nav.classList.remove("shadow-lg");
  }
});