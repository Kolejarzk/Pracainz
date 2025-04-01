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




/*
document.addEventListener("DOMContentLoaded", function () {
  barba.init({
    transitions: [{
      name: "slide",
      leave(data) {
        return gsap.to(data.current.container, { x: "-100%", opacity: 0, duration: 0.9 });
      },
      enter(data) {
        return gsap.from(data.next.container, { x: "100%", opacity: 0, duration: 0.5 });
      }
    }]
  });
});
*/

function pageTransition() {
  var tl =gsap.timeline();
  tl.to('ul.transition li', {duration: .5, scaleY:1,transformOrigin:"bottom left", stagger:.2 })
  tl.to('ul.transition li', {duration: .5,scaleY: 0, transformOrigin:"bottom left", stagger: .1, delay: .1 })
}

 function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(()=> {
      done();
    },n);
  }); 
 }

 function contentAnimation() {

 }


  barba.init({
       async: true, 
        
       
          transitions: [{
            
            async leave(data) {
              const done = this.async();
               

               pageTransition();
               await delay(1500);
               done(); 
            },
            async enter(data) {
              contentAnimation();
            },
            async once(data){
             contentAnimation();
            }
    }]
  })






