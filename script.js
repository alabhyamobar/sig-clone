function homepageAnimation() {
  gsap.set(".slidesm", { scale: 5 });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 3,
    },
  });

  tl.to(
    ".vdodiv",
    {
      ease: Power2,
      "--clip": "0%",
    },
    "a"
  );
  

  tl.to(
    ".slidesm",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );

  tl.to(
    ".lft",
    {
      xPercent: -10,
      stagger: 0.03,
      ease: Power4,
    },
    "a"
  );

  tl.to(
    ".rgt",
    {
      xPercent: 10,
      stagger: 0.03,
      ease: Power4,
    },
    "a"
  );
}
function coverAnimation(param){
  gsap.to(param,{
    height:100+`%`,
    ease:Power4
  })
}
function deCoverAnimation(param){
  gsap.to(param,{
    height:0+`%`,
    ease:Power4
  })
}

function opa(param){
  gsap.to(param,{
    opacity:1,
    ease:Power4
  })
}
function hid(param){
  gsap.to(param,{
    opacity:0,
    ease:Power4
  })
}
function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
  });
}

document.querySelectorAll('.listelem')
.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
        coverAnimation(this.querySelector(".cover"));
        opa(this.querySelector(".picture"));
        this.querySelector(".picture").style.left = `${dets.clientX - this.offsetLeft}px`;
    })

    el.addEventListener("mouseleave",function(dets){
      deCoverAnimation(this.querySelector(".cover"));
      hid(this.querySelector(".picture"));
  })
})

homepageAnimation();
realPageAnimation();



