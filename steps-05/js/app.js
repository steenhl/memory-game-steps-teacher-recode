const cardsWrapper = document.querySelector("#cards-wrapper");
const cards = cardsWrapper.querySelectorAll(".card");
const respons = document.querySelector("#respons");

function insertHtml(htmlString) {
	cardsWrapper.insertAdjacentHTML("beforeend", htmlString);
	const li = cardsWrapper.querySelector("li:last-of-type");
	// console.log(li);
	li.addEventListener("click", handelClick);
}

let numberOfClick = 0;
let card1 = undefined;
let card2 = undefined;

function handelClick(e) {
	const clickedLi = e.currentTarget;

	numberOfClick++;

	if (numberOfClick == 1) {
		card1 = clickedLi;
		// console.log(card1);
	} else if (numberOfClick == 2) {
		card2 = clickedLi;
		let data1 = card1.getAttribute("data-card");
		let data2 = card2.getAttribute("data-card");
		if (data1 === data2) {
			console.log("att er ens");
			if (card1 !== card2) {
				console.log("card er ikke ens");
				card1.removeEventListener("click", handelClick);
				card2.removeEventListener("click", handelClick);
			}
		}
		numberOfClick = 0;
	}

	// console.log(att);
}

let cardArra = [];

function createCards(numberOfCars) {
	// for loop
	for (let i = 0; i < numberOfCars; i++) {
		cardArra.push(`<li class="card" data-card=${i}><span class="front">Card number ${i}</span></li>`);
		cardArra.push(`<li class="card" data-card=${i}><span class="front">Card number ${i}</span></li>`);
	}
	// use the underscore library _
	let shuffleCarsArray = _.shuffle(cardArra);
	insertCard(shuffleCarsArray);
}
// insert card
function insertCard(cardList) {
	cardList.forEach((card) => {
		insertHtml(card);
	});
}

createCards(4);
