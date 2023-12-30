const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
];
/* ADD eventListener */

 let bouton1 = document.getElementById("bouton1");
 bouton1.addEventListener("click", () => {
 	console.log("click OK button slide gauche")
 });

 let bouton2 = document.getElementById("bouton2");
 bouton2.addEventListener("click", () => {
	console.log("click OK button slide droit")
 });



// Créez les bullet points (dots) en fonction du nombre de slides
let numberOfSlides = slides.length;
const dotsContainer = document.querySelector('.dots');
for (let i = 0; i < numberOfSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dotsContainer.appendChild(dot);
}

// Marquez le premier bullet point comme actif
dotsContainer.firstChild.classList.add('dot_selected');


/* click arrow */ 

let currentIndex = 0; // Index de l'image actuelle

// Fonction pour mettre à jour le carrousel
// Fonction pour aller à la slide suivante
function goToNextSlide() {
    currentIndex = (currentIndex + 1) % numberOfSlides; // Incrémente currentIndex, en bouclant si nécessaire
    updateCarousel(); // Met à jour le carrousel
}

// Fonction pour aller à la slide précédente
function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + numberOfSlides) % numberOfSlides; // Décrémente currentIndex, en bouclant si nécessaire
    updateCarousel(); // Met à jour le carrousel
}

// Fonction pour mettre à jour le carrousel
function updateCarousel() {
    // Mettre à jour l'image et le texte
    const bannerImg = document.querySelector('.banner-img');
    bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;
    const taglineDiv = document.querySelector('.arrow-content p');
    taglineDiv.innerHTML = slides[currentIndex].tagLine;

    // Mettre à jour les bullet points
	function updateDots() {
		const dots = document.querySelectorAll('.dot');
		dots.forEach((dot, index) => {
			dot.classList.remove('dot_selected'); // Retirer la classe 'dot_selected'
			if (index === currentIndex) {
				dot.classList.add('dot_selected'); // Ajouter 'dot_selected' au bullet point actif
			}
		});
	}
	
}

// Ajout des event listeners sur les boutons
bouton1.addEventListener("click", goToPrevSlide); // Écouteur d'événement pour le bouton gauche
bouton2.addEventListener("click", goToNextSlide); // Écouteur d'événement pour le bouton droit
