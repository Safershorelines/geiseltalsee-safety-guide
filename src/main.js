// Language translations
const translations = {
    de: {
        nav_start: "Start",
        nav_zones: "Zonenkarte",
        nav_nearmiss: "Meldung",
        nav_downloads: "Downloads",
        hero_title: "Sicherheitskonzept Geiseltalsee",
        hero_subtitle: "Zentrale Informationsplattform für ein sicheres Miteinander am See.",
        status_title: "Offizieller Status",
        dev_title: "Aktuelle Entwicklungen & Regelungen",
        partnership_text: "Sicherheitskonzept in Kooperation mit"
    },
    en: {
        nav_start: "Home",
        nav_zones: "Map",
        nav_nearmiss: "Report",
        nav_downloads: "Downloads",
        hero_title: "Geiseltalsee Safety Concept",
        hero_subtitle: "Central information platform for a safe coexistence at the lake.",
        status_title: "Official Status",
        dev_title: "Current Developments & Regulations",
        partnership_text: "Safety concept in cooperation with"
    },
    pl: {
        nav_start: "Start",
        nav_zones: "Mapa",
        nav_nearmiss: "Zgłoszenie",
        nav_downloads: "Pobierz",
        hero_title: "Koncepcja bezpieczeństwa Geiseltalsee",
        hero_subtitle: "Centralna platforma informacyjna dla bezpiecznego współistnienia nad jeziorem.",
        status_title: "Status oficjalny",
        dev_title: "Aktualne wydarzenia i regulaminy",
        partnership_text: "Koncepcja bezpieczeństwa we współpracy z"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
    });

    // Update nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    if (navLinks.length >= 4) {
        navLinks[0].textContent = translations[lang].nav_start;
        navLinks[1].textContent = translations[lang].nav_zones;
        navLinks[2].textContent = translations[lang].nav_nearmiss;
        navLinks[3].textContent = translations[lang].nav_downloads;
    }

    // Update hero (if exists on page)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) heroTitle.textContent = translations[lang].hero_title;

    const heroSubtitle = document.querySelector('.hero .subtitle');
    if (heroSubtitle) heroSubtitle.textContent = translations[lang].hero_subtitle;

    const statusTitle = document.querySelector('.mission-box h2');
    if (statusTitle) statusTitle.textContent = translations[lang].status_title;

    // Update section headers
    const devTitle = document.querySelector('.current-developments h2');
    if (devTitle) devTitle.textContent = translations[lang].dev_title;

    // Update footer
    const partnershipText = document.querySelector('.partnership p');
    if (partnershipText) partnershipText.textContent = translations[lang].partnership_text;

    localStorage.setItem('preferred_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Logic
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.textContent.toLowerCase();
            setLanguage(lang);
        });
    });

    // Load saved language
    const savedLang = localStorage.getItem('preferred_lang') || 'de';
    setLanguage(savedLang);

    // Reveal animations on scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animElements = document.querySelectorAll('.rule-card, .zone-item, .mission-box, .info-card');
    animElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    console.log('Geiseltalsee Safety Guide initialized');
});
