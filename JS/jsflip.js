let flip = document.getElementById("flip");
let flip1 = document.getElementById("flip1");
flip.addEventListener("mouseenter", card);
flip.addEventListener("mouseleave", card1);

function card() {
	flip1.style.transform = "rotateY(180deg)";
}
function card1() {
	flip1.style.transform = "rotateY(0)";
}

let flip2 = document.getElementById("flip2");
let flip3 = document.getElementById("flip3");
flip2.addEventListener("mouseenter", card2);
flip2.addEventListener("mouseleave", card3);

function card2() {
	flip3.style.transform = "rotateY(180deg)";
}
function card3() {
	flip3.style.transform = "rotateY(0)";
}

let flip4 = document.getElementById("flip4");
let flip5 = document.getElementById("flip5");
flip4.addEventListener("mouseenter", card4);
flip4.addEventListener("mouseleave", card5);

function card4() {
	flip5.style.transform = "rotateY(180deg)";
}
function card5() {
	flip5.style.transform = "rotateY(0)";
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
