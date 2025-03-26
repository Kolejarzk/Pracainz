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
