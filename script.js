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

const timeline = gsap.timeline({defaults: {duration: 1}})
timeline
.from('.header',{y:'-100%',ease: 'bounce'})
.from('.navbar',{opacity: 0, stagger: .5})
.from('.logo', {y: -50,opacity: 0,ease: "power3.out"},'<.5')
.from('.nav-links li', {x: 150,opacity: 0, ease: "power3.out"})
.from('.intro-text',{ x: '-100vw', ease: Power1})
.from('.intro-image',{ x: '100vw', ease: "expoScale(0.5,7,none)" })
.from('.footer',{ y: '100%', ease: Power1})

