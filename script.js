const translations = {
  en: {
    hero_title: "Tech Beyond Limits",
    hero_subtitle: "Electronics redefined. Components, mobile tech and futuristic gadgets.",
    hero_cta: "> ENTER SYSTEM",

    contact_cta: "> Ready to upgrade your tech experience?",
    contact1_mail: "> Contact us",
    contact2_mail: "> error? click here: info@polantisspzoo.com",

    sec4_title: "Our Mission",
    sec4_text: "Our mission is to make advanced technology accessible to everyone by offering high-quality products at competitive prices. We carefully select each item to ensure performance, reliability, and innovation, without inflating costs. By optimizing our supply chain and focusing on efficiency, we deliver cutting-edge solutions that empower users, businesses, and enthusiasts to stay ahead in a rapidly evolving digital world.",

    sec1_title: "PC Components",
    sec1_text: "Discover high-performance PC components designed for power, speed, and reliability. From advanced motherboards and cutting-edge GPUs to ultra-fast RAM and precision cooling systems, everything you need to build or upgrade your perfect machine is here. Each product is selected to guarantee maximum compatibility and durability, ensuring a smooth and efficient experience even under heavy workloads or demanding gaming sessions.",

    sec2_title: "Mobile Universe",
    sec2_text: "Step into the world of mobile technology with the latest smartphones, wireless audio devices, fast chargers, and smart accessories. Designed to keep you connected, productive, and entertained wherever you go, our selection combines performance and style. Whether for work or leisure, these devices integrate seamlessly into your daily routine, offering speed, reliability, and long-lasting battery life.",

    sec3_title: "SMART GADGETS",
    sec3_text: "Explore a curated selection of smart gadgets and compact electronic devices that enhance your everyday life. From innovative home accessories to practical small appliances, technology becomes part of your routine. Our products are designed to simplify tasks, improve comfort, and add efficiency to your environment, making everyday actions smarter, faster, and more enjoyable.",

    footer_address: "Address: ul. Piastowska 38, Bronisze 05-850",
    footer_vat: "VAT number: 5273183522",
    footer_email: "Contact us at:info@polantisspzoo.com"
  },

  pl: {
    hero_title: "Technologia bez granic",
    hero_subtitle: "Elektronika na nowo. Komponenty, mobilne technologie i futurystyczne gadżety.",
    hero_cta: "> wejdź do systemu",

    contact_cta: "> Czy jesteś gotowy, aby ulepszyć swoje doświadczenie technologiczne?",
    contact1_mail: "> Skontaktuj się z nami",
    contact2_mail: "> Błąd? Kliknij tutaj: info@polantisspzoo.com",

    sec4_title: "Nasza misja",
    sec4_text: "Naszą misją jest udostępnianie nowoczesnych technologii każdemu poprzez oferowanie wysokiej jakości produktów w konkurencyjnych cenach. Starannie dobieramy każdy element, aby zapewnić wydajność, niezawodność i innowacyjność bez zbędnych kosztów. Dzięki optymalizacji procesów i efektywnemu zarządzaniu dostarczamy rozwiązania, które pomagają użytkownikom i firmom rozwijać się w dynamicznym świecie cyfrowym.",

    sec1_title: "Komponenty PC",
    sec1_text: "Odkryj wysokowydajne komponenty komputerowe zaprojektowane z myślą o mocy, szybkości i niezawodności. Od zaawansowanych płyt głównych i nowoczesnych kart graficznych po szybkie pamięci RAM i systemy chłodzenia – wszystko, czego potrzebujesz do stworzenia idealnego komputera. Każdy produkt jest starannie wyselekcjonowany, aby zapewnić kompatybilność, trwałość i maksymalną wydajność nawet przy intensywnym użytkowaniu.",

    sec2_title: "Świat mobilny",
    sec2_text: "Wejdź w świat technologii mobilnych dzięki najnowszym smartfonom, bezprzewodowym urządzeniom audio, szybkim ładowarkom i inteligentnym akcesoriom. Zaprojektowane, aby zapewnić łączność, produktywność i rozrywkę w każdej sytuacji. Nasze produkty łączą wydajność i nowoczesny design, umożliwiając wygodne korzystanie z technologii zarówno w pracy, jak i w czasie wolnym.",

    sec3_title: "Inteligentne gadżety",
    sec3_text: "Poznaj starannie wybraną kolekcję inteligentnych gadżetów i kompaktowych urządzeń elektronicznych, które ułatwiają codzienne życie. Od nowoczesnych akcesoriów domowych po praktyczne małe AGD – technologia staje się częścią Twojej codzienności. Produkty te pomagają oszczędzać czas, zwiększają komfort i sprawiają, że codzienne czynności stają się prostsze i bardziej efektywne.",

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