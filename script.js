const translations = {
  en: {
    hero_title: "Tech Beyond Limits",
    hero_subtitle: "Electronics redefined. Components, mobile tech and futuristic gadgets.",
    hero_cta: "> ENTER SYSTEM",
    sec1_title: "PC Components",
    sec1_text: "Discover high-performance PC components designed for power, speed, and reliability. From advanced motherboards and cutting-edge GPUs to ultra-fast RAM and precision cooling systems, everything you need to build or upgrade your perfect machine is here..",
    sec2_title: "Mobile Universe",
    sec2_text: "Step into the world of mobile technology with the latest smartphones, wireless audio devices, fast chargers, and smart accessories. Designed to keep you connected, productive, and entertained wherever you go.",
    sec3_title: "SMART GADGETS",
    sec3_text: "Explore a curated selection of smart gadgets and compact electronic devices that enhance your everyday life. From innovative home accessories to practical small appliances, technology becomes part of your routine.",
    footer_address: "Address: ul. Piastowska 38, Bronisze 05-850",
    footer_vat: "VAT number: 5273183522",
    footer_email: "Contact us at:info@polantisspzoo.com"
  },
  pl: {
    hero_title: "Technologia bez granic",
    hero_subtitle: "Elektronika na nowo. Komponenty, mobilne technologie i futurystyczne gadżety.",
    hero_cta: "> wejdź do systemu",
    sec1_title: "Komponenty PC",
    sec1_text: "Odkryj wysokowydajne komponenty komputerowe zaprojektowane z myślą o mocy, szybkości i niezawodności. Od zaawansowanych płyt głównych i nowoczesnych kart graficznych po szybkie pamięci RAM i systemy chłodzenia – wszystko, czego potrzebujesz do stworzenia idealnego komputera..",
    sec2_title: "Świat mobilny",
    sec2_text: "Odkryj wysokowydajne komponenty komputerowe zaprojektowane z myślą o mocy, szybkości i niezawodności. Od zaawansowanych płyt głównych i nowoczesnych kart graficznych po szybkie pamięci RAM i systemy chłodzenia – wszystko, czego potrzebujesz do stworzenia idealnego komputera.",
    sec3_title: "Inteligentne gadżety",
    sec3_text: "Poznaj starannie wybraną kolekcję inteligentnych gadżetów i kompaktowych urządzeń elektronicznych, które ułatwiają codzienne życie. Od nowoczesnych akcesoriów domowych po praktyczne małe AGD – technologia staje się częścią Twojej codzienności.",
    footer_address: "Adres: ul. Piastowska 38, Bronisze 05-850",
    footer_vat: "Numer Vat: 5273183522",
    footer_email: "Skontaktuj się z nami: info@polantisspzoo.com"
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

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

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

const cards = document.querySelectorAll(".img-card");

const observerCard = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.3
});

cards.forEach(card => observerCard.observe(card));