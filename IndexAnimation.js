const timeline = gsap.timeline({defaults: {duration: 1}})
timeline
.from('.header',{y:'-100%',ease: 'bounce'})
.from('.navbar',{opacity: 0, stagger: .5})
.from('.logo', {y: -50,opacity: 0,ease: "power3.out"},'<.5')
.from('.nav-links li', {x: 150,opacity: 0, ease: "power3.out"})
.from('.intro-text',{ x: '-100vw', ease: Power1})
.from('.intro-image',{ x: '100vw', ease: "expoScale(0.5,7,none)" })
.from('.footer',{ y: '100vh', ease: Power1})