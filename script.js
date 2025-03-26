// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open'); 
  hamburger.classList.toggle('open');
  
});

// Prosta rotacja obrazków po prawej stronie w sekcji intro
const introImage = document.getElementById('introImage');

// Tablica z adresami (URL) kolejnych grafik.
// Możesz wstawić tu swoje obrazy lub linki do zewnętrznych zasobów.
const images = [
  "images/projekt1.jpg",
  "images/projekt2.png",
  "images/projekt3.jpg"
];

let currentIndex = 0;

// Funkcja zmienia obraz co 3 sekundy
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  introImage.src = images[currentIndex];
}

// Uruchamiamy interwał
setInterval(changeImage, 3000);

// gsap code here!
gsap.from('.header',{duration: 1, y:'-100%',ease: 'bounce'})

gsap.from('.navbar',{duration: 1, opacity: 0, delay: 1, stagger: .5})

gsap.from('.intro-text',{duration: 1, x: '-100vw', delay: 1, ease: Power1})

gsap.from('.intro-image',{duration: 1, x: '50vw', delay: 1, ease: "expoScale(0.5,7,none)" })

gsap.from('.footer',{duration: 1, y: '100%', delay: 1, ease: Power1})