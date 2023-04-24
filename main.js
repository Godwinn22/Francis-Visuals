// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle("window-scroll", window.scrollY > 5);
});

// show/hide faqs

const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
   faq.addEventListener('click', () => {
    faq.classList.toggle("open");
    faq.animate({
        transform: "translateY(0)"},
        {
            duration: 500,
            fill:"forwards"
        })

    //icon change
    const icon = faq.querySelector(".faq-icon i");
        if(icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus"
        }else {
            icon.className = "uil uil-plus"
        }
   })
})



const openmenubtn = document.querySelector("#openmenubtn");
const closemenubtn = document.querySelector("#closemenubtn");
const navmenu = document.querySelector(".navmenu");

openmenubtn.addEventListener('click', () => {
    navmenu.style.display = "flex";
    closemenubtn.style.display = "inline-block";
    openmenubtn.style.display = "none";
})
closemenubtn.addEventListener('click', () => {
    navmenu.style.display = "none";
    openmenubtn.style.display = "inline-block";
    closemenubtn.style.display = "none";
})

// slider scripting

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btns');
let currentSlide = 1;

// Javascript for image slider manual navigation
var manualNav = function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
      btn.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
  let active = document.getElementsByClassName('active');
  let i = 1;

  var repeater = () => {
    setTimeout(function(){
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
      });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
      i = 0;
    }
    if(i >= slides.length){
      return;
    }
    repeater();
  }, 10000);
  }
  repeater();
}
repeat();