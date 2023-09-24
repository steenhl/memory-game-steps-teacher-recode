// DOM selectors
const cardsWrapper = document.querySelector("#cards-wrapper");
const cardsWrapper2 = document.querySelector("#cards-wrapper2");
const cards = cardsWrapper.querySelectorAll(".card");
const respons = document.querySelector("#respons");

let cardArray = [];
let cardArray2 = [];

function insertHtml(domElement, htmlString) {
	domElement.insertAdjacentHTML("beforeend", htmlString);
}

function createCards(numberOfCars) {
	// for loop
	for (let i = 0; i < numberOfCars; i++) {
		cardArray.push(`<li class="card" data-card=${i}><span class="front">Card number ${i}</span></li>`);
	}
	// let newcardArray = cardArray
	cardArray2 = [...cardArray];

	//cardArray2.splice(-1);
	cardArray2.forEach((card) => {
		insertHtml(cardsWrapper2, card);
	});
	// cardArray.push(3);
	// cardArray.pop();
	// cardArray.pop();
	// cardArray.pop();

	cardArray.forEach((card) => {
		insertHtml(cardsWrapper, card);
	});
}

createCards(10);

// array.push(elm): indsætter i slutningen
// array.pop(): slette fra enden
// array.slice(0,3): Skaber et nyt array
// array.splice(1, 3,"new element"): ændre og manipulere det oprindelige array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
