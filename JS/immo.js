//maison1
var slideIndex = 1;
showSlides1(slideIndex);

function plusSlides1(n) {
  showSlides1((slideIndex += n));
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide1");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//maison2
var slideIndex = 1;
showSlides2(slideIndex);

function plusSlides2(n) {
  showSlides2((slideIndex += n));
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide2");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//maison3
var slideIndex = 1;
showSlides3(slideIndex);

function plusSlides3(n) {
  showSlides3((slideIndex += n));
}

function showSlides3(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide3");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//maison4
var slideIndex = 1;
showSlides4(slideIndex);

function plusSlides4(n) {
  showSlides4((slideIndex += n));
}

function showSlides4(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide4");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//maison5
var slideIndex = 1;
showSlides5(slideIndex);

function plusSlides5(n) {
  showSlides5((slideIndex += n));
}

function showSlides5(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide5");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//maison6
var slideIndex = 1;
showSlides6(slideIndex);

function plusSlides6(n) {
  showSlides6((slideIndex += n));
}

function showSlides6(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide6");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//maison7
var slideIndex = 1;
showSlides7(slideIndex);

function plusSlides7(n) {
  showSlides7((slideIndex += n));
}

function showSlides7(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide7");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
// maison8
var slideIndex = 1;
showSlides8(slideIndex);

function plusSlides8(n) {
  showSlides8((slideIndex += n));
}

function showSlides8(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide8");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//maison9
var slideIndex = 1;
showSlides9(slideIndex);

function plusSlides9(n) {
  showSlides9((slideIndex += n));
}

function showSlides9(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide9");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
// maison10
var slideIndex = 1;
showSlides10(slideIndex);

function plusSlides10(n) {
  showSlides10((slideIndex += n));
}

function showSlides10(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slide10");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


//Darkmode
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


//Bouton retour haut de page
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("retour").style.display = "block";
  } else {
    document.getElementById("retour").style.display = "none";
  }
};
document.getElementById("retour").onclick = function () {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
}





