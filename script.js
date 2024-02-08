var tl = gsap.timeline()

function time() {
  var a = 0
  setInterval(function () {
    a += Math.floor(Math.random() * 20)
    if (a < 100) {
      document.querySelector(".loader h1").innerHTML = a + "%"
    } else {
      a = 100
      document.querySelector(".loader h1").innerHTML = a + "%"
    }
  }, 150)
}

tl.to(".loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: time()
})
tl.to(".loader", {
  top: "-100vh",
  delay: 0.4,
  duration: 1.5
})


tl.from(" .nav, .nav-left h2, .nav-mid a, .nav-right i", {
  y: -100,
  delay: 0.2,
  duration: 0.5,
  opacity: 0,
  stagger: 0.3,
})

Shery.imageEffect(".back", {
  style: 5,
  config: { "a": { "value": 2, "range": [0, 30] }, "b": { "value": -0.97, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.05171984152766 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 0.11, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.61, "range": [0, 10] }, "metaball": { "value": 0.15, "range": [0, 2] }, "discard_threshold": { "value": 0.54, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.47, "range": [0, 2] }, "noise_scale": { "value": 11.45, "range": [0, 100] } },
  gooey: true,
})

let elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  let h1s = elem.querySelectorAll("h1");
  let index = 0;
  let animating = false;

  document.querySelector(".hero")
    .addEventListener("click", function () {
      if (!animating) {
        animating = true;
        gsap.to(h1s[index], {
          top: "-=100%",
          ease: Expo.easeInOut,
          duration: 1,
          onComplete: function () {
            gsap.set(this._targets[0], { top: "100%" });
            animating = false;
          },
        });

        index === h1s.length - 1 ? (index = 0) : index++;

        gsap.to(h1s[index], {
          top: "-=100%",
          ease: Expo.easeInOut,
          duration: 1,
        });
      }
    });

})


document.querySelectorAll(".pets").forEach(function (elem) {
  let rotate = 0;
  let diffrot = 0;

  elem.addEventListener("mousemove", function (dets) {
    let diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      // top: diff,
      left: dets.clientX - 200,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
});


  // -------------------------------------------------------------------------------------------------------------------

  const navbar = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   profile.classList.remove('active');
}

function loader(){
   document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
   setInterval(loader, 2000);
}

window.onload = fadeOut;

document.querySelectorAll('input[type="number"]').forEach(numberInput => {
   numberInput.oninput = () =>{
      if(numberInput.value.length > numberInput.maxLength) numberInput.value = numberInput.value.slice(0, numberInput.maxLength);
   };
});

Shery.makeMagnet("a");
Shery.mouseFollower();