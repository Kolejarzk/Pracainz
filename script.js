/**
 * script.js - Główny skrypt obsługujący:
 * 1. Płynne przejścia stron z biblioteką Barba.js
 * 2. System wielojęzyczności (PL / EN)
 * 3. Rotację prac (Slider) na stronie głównej
 * 4. Interaktywne okno modalne ze szczegółami w galerii prac
 * 5. Walidację i obsługę formularza kontaktowego z powiadomieniem Toast
 * 6. Responsywne menu nawigacyjne (Hamburger)
 */

/* ==========================================================================
   SŁOWNIK TŁUMACZEŃ (I18N)
   ========================================================================== */
const translations = {
  pl: {
    nav_home: "Strona główna",
    nav_gallery: "Galeria prac",
    nav_contact: "Formularz kontaktowy",
    nav_about: "O mnie",

    hero_title: "Hej, mam na imię <span>Rafał</span>",
    hero_sub: "Grafik komputerowy & Web Designer",
    hero_desc: "Projektuję nowoczesne identyfikacje wizualne, grafikę użytkową oraz intuicyjne interfejsy cyfrowe. Łączę zmysł estetyczny z wiedzą z zakresu technologii internetowych, tworząc projekty, które realizują cele biznesowe.",
    hero_btn_gallery: "Zobacz galerię prac",
    hero_btn_contact: "Skontaktuj się",

    slider_badge: "Projekt wyróżniony",

    gallery_title: "Galeria <span>prac</span>",
    gallery_desc: "Poniżej znajdziesz wybór moich realizacji z zakresu identyfikacji wizualnej, UI/UX oraz grafiki wydawniczej. Kliknij na dowolną pracę, aby poznać szczegóły projektu.",
    gallery_action: "Zobacz szczegóły &rarr;",

    contact_title: "Formularz <span>kontaktowy</span>",
    contact_desc: "Masz pytania dotyczące moich prac, chcesz nawiązać współpracę lub zapytać o wycenę projektu? Wypełnij formularz – odpowiem najszybciej jak to możliwe.",
    form_name_label: "Imię i nazwisko",
    form_name_ph: "np. Jan Kowalski",
    form_email_label: "Adres e-mail",
    form_email_ph: "twoj@email.pl",
    form_phone_label: "Numer telefonu",
    form_phone_ph: "+48 000 000 000",
    form_subject_label: "Temat wiadomości",
    form_subject_ph: "np. Projekt logo i identyfikacji",
    form_msg_label: "Treść wiadomości",
    form_msg_ph: "Wpisz treść wiadomości...",
    form_submit: "Wyślij wiadomość",
    form_sending: "Wysyłanie...",
    form_success: "Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.",
    form_error: "Proszę poprawnie wypełnić wszystkie wymagane pola.",

    about_title: "Kim <span>jestem</span>",
    about_p1: "Cześć! Nazywam się Rafał Klusek i jestem pasjonatem grafiki komputerowej oraz projektowania interfejsów użytkownika. Studiuję informatykę na Uniwersytecie Radomskim, co pozwala mi łączyć wrażliwość estetyczną ze zrozumieniem nowoczesnych technologii webowych.",
    about_p2: "Specjalizuję się w tworzeniu identyfikacji wizualnych, projektów graficznych do druku (DTP) oraz interfejsów aplikacji i stron internetowych (UI/UX). W każdym projekcie dbam o równowagę pomiędzy oryginalnym designem a wygodą użytkowania i dostępnością.",
    cv_title: "Pobierz moje CV",
    cv_desc: "Szczegółowy wykaz mojego doświadczenia, umiejętności oraz edukacji w dokumencie PDF.",
    cv_btn: "Pobierz CV",
    skills_title: "Umiejętności i <span>narzędzia</span>",
    social_title: "Media społecznościowe:",

    modal_client_label: "Klient / Typ:",
    modal_tools_label: "Narzędzia:",

    footer_text: "&copy; 2025 Rafał Klusek – Wszystkie prawa zastrzeżone. Praca dyplomowa inżynierska."
  },
  en: {
    nav_home: "Home",
    nav_gallery: "Portfolio",
    nav_contact: "Contact",
    nav_about: "About Me",

    hero_title: "Hi, I'm <span>Rafał</span>",
    hero_sub: "Graphic Designer & Web Designer",
    hero_desc: "I design modern visual identities, graphic collaterals, and intuitive digital interfaces. I combine aesthetic sensibility with computer science knowledge to deliver effective design solutions.",
    hero_btn_gallery: "View Portfolio",
    hero_btn_contact: "Get in Touch",

    slider_badge: "Featured Project",

    gallery_title: "Project <span>Portfolio</span>",
    gallery_desc: "Below is a curated selection of my work across visual identity, UI/UX, and print media. Click on any project card to view the detailed case study.",
    gallery_action: "View details &rarr;",

    contact_title: "Contact <span>Form</span>",
    contact_desc: "Have an inquiry, want to discuss a project or start collaboration? Fill out the form below and I will get back to you as soon as possible.",
    form_name_label: "Full Name",
    form_name_ph: "e.g. John Doe",
    form_email_label: "Email Address",
    form_email_ph: "your@email.com",
    form_phone_label: "Phone Number",
    form_phone_ph: "+48 000 000 000",
    form_subject_label: "Subject",
    form_subject_ph: "e.g. Logo & Branding project",
    form_msg_label: "Message",
    form_msg_ph: "Write your message here...",
    form_submit: "Send Message",
    form_sending: "Sending...",
    form_success: "Thank you for reaching out! I will reply as soon as possible.",
    form_error: "Please fill in all required fields correctly.",

    about_title: "Who <span>I Am</span>",
    about_p1: "Hi! My name is Rafał Klusek. I am a passionate graphic designer and UI/UX enthusiast. Studying computer science at University of Radom allows me to bridge visual creativity with solid technical web development knowledge.",
    about_p2: "I specialize in brand identity design, print publications (DTP), and digital interfaces (UI/UX). In every project, I prioritize aesthetics, user experience, and accessibility standards.",
    cv_title: "Download My Resume",
    cv_desc: "Comprehensive breakdown of my professional background, skills, and education in PDF format.",
    cv_btn: "Download CV",
    skills_title: "Skills & <span>Software</span>",
    social_title: "Social profiles:",

    modal_client_label: "Client / Type:",
    modal_tools_label: "Tools used:",

    footer_text: "&copy; 2025 Rafał Klusek – All rights reserved. Engineering diploma project."
  }
};

/* ==========================================================================
   BAZA PROJEKTÓW DO GALERII I OKIENKA MODALNEGO
   ========================================================================== */
const projectsData = [
  {
    id: 1,
    image: "images/projekt1.jpg",
    tools: "Adobe Illustrator, Photoshop, InDesign",
    tag: {
      pl: "Branding & Druk",
      en: "Branding & Print"
    },
    title: {
      pl: "Identyfikacja wizualna marki rzemieślniczej",
      en: "Artisan Brand Visual Identity"
    },
    client: {
      pl: "Projekt koncepcyjny",
      en: "Concept Project"
    },
    shortDesc: {
      pl: "Kompleksowy projekt identyfikacji wizualnej: logo, księga znaku, typografia oraz materiały drukowane.",
      en: "Comprehensive brand identity system: logo mark, brand book, typography, and printed collateral."
    },
    fullDesc: {
      pl: "Projekt obejmował stworzenie spójnej i eleganckiej identyfikacji wizualnej dla marki rzemieślniczej. W ramach pracy opracowano znak graficzny z siatką konstrukcyjną, dedykowaną paletę barw opartą na naturalnych pigmentach, typografię korporacyjną oraz zestaw materiałów akcydensowych (wizytówki, papier firmowy, etykiety produktów).",
      en: "This project encompassed creating a coherent, sophisticated visual identity for an artisan brand. Work included crafting a responsive logo mark with construction grid, bespoke natural color palette, typography guidelines, and complete stationery set (business cards, letterheads, and packaging labels)."
    }
  },
  {
    id: 2,
    image: "images/projekt2.png",
    tools: "Figma, Adobe XD, FigJam",
    tag: {
      pl: "UI/UX Design",
      en: "UI/UX Design"
    },
    title: {
      pl: "Interfejs aplikacji mobilnej TaskFlow",
      en: "TaskFlow Mobile App Interface"
    },
    client: {
      pl: "Projekt autorski",
      en: "Personal Project"
    },
    shortDesc: {
      pl: "Projekt interfejsu aplikacji do zarządzania zadaniami z naciskiem na prostotę i dostępność WCAG.",
      en: "Productivity application UI design prioritizing simplicity, usability, and WCAG accessibility standards."
    },
    fullDesc: {
      pl: "Aplikacja mobilna ułatwiająca planowanie zadań w zespole. Przygotowano pełną ścieżkę użytkownika (User Flow), makiety w narzędziu Figma oraz interaktywny prototyp. Projekt został przetestowany pod kątem kontrastów barwnych i czytelności elementów dotykowych, spełniając wytyczne WCAG 2.1 na poziomie AA.",
      en: "A mobile application designed to streamline team task management. The deliverables included comprehensive user flows, Figma wireframes, design system components, and an interactive prototype, rigorously tested against WCAG 2.1 AA accessibility contrast criteria."
    }
  },
  {
    id: 3,
    image: "images/projekt3.jpg",
    tools: "Adobe Photoshop, Wacom Tablet, Illustrator",
    tag: {
      pl: "Ilustracja & Plakat",
      en: "Illustration & Poster"
    },
    title: {
      pl: "Seria plakatów i ilustracji kulturalnych",
      en: "Cultural Poster & Illustration Series"
    },
    client: {
      pl: "Wydarzenie artystyczne",
      en: "Art Festival"
    },
    shortDesc: {
      pl: "Seria plakatów łączących digital painting z nowoczesną typografią geometryczną.",
      en: "A series of cultural event posters bridging digital painting with modernist geometric typography."
    },
    fullDesc: {
      pl: "Autorska seria plakatów promujących festiwal sztuki współczesnej i muzyki elektronicznej. Projekt łączy techniki malarstwa cyfrowego, operowanie światłocieniem i kompozycję przestrzenną z surową, geometryczną typografią. Prace zostały zoptymalizowane pod kątem wielkoformatowego druku pigmentowego.",
      en: "An original series of posters created for a contemporary art and electronic music festival. The artwork integrates digital painting techniques, dynamic lighting, and spatial composition with bold, modernist typography. Files prepared for high-resolution large-format pigment printing."
    }
  }
];

/* ==========================================================================
   STAN APLIKACJI
   ========================================================================== */
let currentLang = localStorage.getItem('portfolio_lang') || 'pl';
let sliderInterval = null;

/* ==========================================================================
   SYSTEM JĘZYKOWY (I18N)
   ========================================================================== */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  // Aktualizacja przycisków wyboru języka
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Tłumaczenie elementów z data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Tłumaczenie placeholderów formularza
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });
  setLanguage(currentLang);
}

/* ==========================================================================
   MENU NAWIGACYJNE & HAMBURGER
   ========================================================================== */
function initNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (!hamburger || !navLinks) return;

  // Klonujemy węzeł lub usuwamy stare listenery przez prostą flagę
  hamburger.onclick = () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    if (navLinks.classList.contains('open')) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  // Zamykanie menu po kliknięciu w link
  navLinks.querySelectorAll('a').forEach(link => {
    link.onclick = () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.classList.remove('no-scroll');
    };
  });
}

function updateActiveNavLink(namespace) {
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (
      (namespace === 'home' && (href === 'index.html' || href === './' || href === '#')) ||
      (namespace === 'galeria' && href.includes('galeria.html')) ||
      (namespace === 'form' && href.includes('formularz.html')) ||
      (namespace === 'omnie' && href.includes('omnie.html'))
    ) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   SLIDER (STRONA GŁÓWNA)
   ========================================================================== */
function initSlider() {
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
  }

  const sliderImg = document.getElementById('introImage');
  const sliderCaption = document.getElementById('sliderCaption');
  const sliderTag = document.getElementById('sliderTag');
  if (!sliderImg) return;

  let currentIndex = 0;

  function updateSlide(index, isInitial = false) {
    const project = projectsData[index];
    if (!project) return;

    if (isInitial) {
      sliderImg.src = project.image;
      sliderImg.style.opacity = '1';
      if (sliderCaption) {
        sliderCaption.textContent = project.title[currentLang];
      }
      if (sliderTag) {
        sliderTag.textContent = project.tag[currentLang];
      }
      return;
    }

    sliderImg.style.opacity = '0';
    setTimeout(() => {
      sliderImg.src = project.image;
      if (sliderCaption) {
        sliderCaption.textContent = project.title[currentLang];
      }
      if (sliderTag) {
        sliderTag.textContent = project.tag[currentLang];
      }
      sliderImg.style.opacity = '1';
    }, 250);
  }

  // Pierwsze ustawienie - natychmiastowe bez ściemniania
  updateSlide(0, true);

  sliderInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % projectsData.length;
    updateSlide(currentIndex);
  }, 4000);
}

/* ==========================================================================
   MODAL SZCZEGÓŁÓW PROJEKTU (GALERIA)
   ========================================================================== */
function initGalleryModals() {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const modalImg = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalTag = document.getElementById('modalTag');
  const modalClient = document.getElementById('modalClient');
  const modalTools = document.getElementById('modalTools');
  const modalDesc = document.getElementById('modalDesc');
  const closeBtn = document.getElementById('modalCloseBtn');

  function openModal(project) {
    if (!project) return;
    modalImg.src = project.image;
    modalImg.alt = project.title[currentLang];
    modalTitle.textContent = project.title[currentLang];
    modalTag.textContent = project.tag[currentLang];
    modalClient.textContent = project.client[currentLang];
    modalTools.textContent = project.tools;
    modalDesc.textContent = project.fullDesc[currentLang];

    modal.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  // Podpinanie kliknięć na kafelkach
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = parseInt(item.getAttribute('data-project-id'), 10);
      const project = projectsData.find(p => p.id === id);
      openModal(project);
    });
  });

  if (closeBtn) {
    closeBtn.onclick = closeModal;
  }

  // Zamknięcie przy kliknięciu tła
  modal.onclick = (e) => {
    if (e.target === modal) {
      closeModal();
    }
  };

  // Zamknięcie klawiszem ESC
  document.onkeydown = (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  };
}

/* ==========================================================================
   FORMULARZ KONTAKTOWY I POWIADOMIENIE TOAST
   ========================================================================== */
function showToast(message, isError = false) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${isError ? 'error' : ''}`;
  toast.innerHTML = `<span>${isError ? '⚠️' : '✅'}</span><span>${message}</span>`;
  container.appendChild(toast);

  // Animacja pojawienia się
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // Automatyczne znikanie po 4 sekundach
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.onsubmit = (e) => {
    e.preventDefault();

    const name = form.querySelector('#name')?.value.trim();
    const email = form.querySelector('#email')?.value.trim();
    const message = form.querySelector('#message')?.value.trim();
    const submitBtn = form.querySelector('.btn-submit');

    // Walidacja
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message || !emailRegex.test(email)) {
      showToast(translations[currentLang].form_error, true);
      return;
    }

    // Symulacja wysyłania wiadomości
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = translations[currentLang].form_sending;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
      showToast(translations[currentLang].form_success, false);
      form.reset();
    }, 800);
  };
}

/* ==========================================================================
   ANIMACJE STRONY GŁÓWNEJ (GSAP)
   ========================================================================== */
function runIndexAnimations() {
  if (typeof gsap === 'undefined') return;

  const introText = document.querySelector('.intro-text');
  const introImage = document.querySelector('.intro-image');
  if (!introText || !introImage) return;

  // Zatrzymujemy jakiekolwiek trwające tweens, by uniknąć konfliktów i przyciemnienia
  gsap.killTweensOf(['.intro-text', '.intro-subtitle', '.intro-cta', '.intro-image']);

  // Reset styli inline
  gsap.set(['.intro-text', '.intro-subtitle', '.intro-cta', '.intro-image'], {
    clearProps: 'all'
  });

  const tl = gsap.timeline({ defaults: { duration: 0.65, ease: "power2.out" } });

  tl.fromTo(introText,
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1 }
  )
  .fromTo('.intro-subtitle',
    { y: 15, opacity: 0 },
    { y: 0, opacity: 1 },
    "-=0.35"
  )
  .fromTo('.intro-cta',
    { y: 15, opacity: 0 },
    { y: 0, opacity: 1 },
    "-=0.3"
  )
  .fromTo(introImage,
    { x: 30, opacity: 0, scale: 0.96 },
    { x: 0, opacity: 1, scale: 1 },
    "-=0.45"
  );
}
window.runIndexAnimations = runIndexAnimations;

/* ==========================================================================
   BARBA.JS - ANIMACJE PRZEJŚĆ I ZARZĄDZANIE WIDOKAMI
   ========================================================================== */
function pageTransitionIn() {
  return new Promise((resolve) => {
    // Kurtyna startuje od dołu
    gsap.set('ul.transition li', {
      scaleY: 0,
      transformOrigin: "bottom left"
    });

    gsap.to('ul.transition li', {
      duration: 0.45,
      scaleY: 1,
      transformOrigin: "bottom left",
      stagger: 0.08,
      ease: "power2.inOut",
      onComplete: () => {
        // Obietnica rozwiązuje się DOPIERO, gdy wszystkie kolumny w 100% zasłoniły ekran
        resolve();
      }
    });
  });
}

function pageTransitionOut() {
  return new Promise((resolve) => {
    // Kurtyna zwija się w górę
    gsap.set('ul.transition li', {
      scaleY: 1,
      transformOrigin: "top left"
    });

    gsap.to('ul.transition li', {
      duration: 0.45,
      scaleY: 0,
      transformOrigin: "top left",
      stagger: 0.08,
      ease: "power2.inOut",
      delay: 0.05,
      onComplete: () => {
        gsap.set('ul.transition li', { scaleY: 0 });
        resolve();
      }
    });
  });
}

function initPageScripts(namespace) {
  // Przewijanie na samą górę
  window.scrollTo(0, 0);

  // Zaktualizowanie nawigacji i języka
  updateActiveNavLink(namespace);
  initNavigation();
  initLanguageSwitcher();

  // Inicjalizacja skryptów specyficznych dla danej podstrony
  if (namespace === 'home') {
    initSlider();
    runIndexAnimations();
  } else if (namespace === 'galeria') {
    initGalleryModals();
  } else if (namespace === 'form') {
    initContactForm();
  }
}

// Inicjalizacja biblioteki Barba.js
document.addEventListener('DOMContentLoaded', () => {
  const initialNamespace = document.querySelector('[data-barba="container"]')?.getAttribute('data-barba-namespace') || 'home';
  initPageScripts(initialNamespace);

  if (typeof barba !== 'undefined') {
    barba.init({
      preventRunning: true,
      transitions: [
        {
          name: 'curtain-transition',
          async leave(data) {
            // 1. Czekamy na pełne zasłonięcie ekranu przez kurtynę (scaleY = 1)
            await pageTransitionIn();

            // 2. Bezpiecznie usuwamy stary kontener, aby wyeliminować nakładanie się widoków
            if (data && data.current && data.current.container) {
              data.current.container.remove();
            }
          },
          async enter(data) {
            // 3. Gdy kurtyna wciąż zasłania ekran, przygotowujemy nową treść
            window.scrollTo(0, 0);

            const nextNamespace = (data && data.next && data.next.namespace)
              ? data.next.namespace
              : (document.querySelector('[data-barba="container"]')?.getAttribute('data-barba-namespace') || 'home');

            updateActiveNavLink(nextNamespace);
            initNavigation();
            initLanguageSwitcher();

            // 4. Odsłaniamy nową stronę - kurtyna zwija się w górę
            await pageTransitionOut();

            // 5. Po odsłonięciu odpalamy animacje i skrypty widoku
            if (nextNamespace === 'home') {
              initSlider();
              runIndexAnimations();
            } else if (nextNamespace === 'galeria') {
              initGalleryModals();
            } else if (nextNamespace === 'form') {
              initContactForm();
            }
          }
        }
      ]
    });
  }
});
