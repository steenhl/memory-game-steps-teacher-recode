const cardsWrapper = document.querySelector("#cards-wrapper");
const cards = cardsWrapper.querySelectorAll(".card");
const respons = document.querySelector("#respons");

function insertHtml(htmlString) {
	cardsWrapper.insertAdjacentHTML("beforeend", htmlString);
	const li = cardsWrapper.querySelector("li:last-of-type");
	li.addEventListener("click", handelClick);
}
const varObj = { numberOfClick: 0, card1: undefined, card2: undefined };

function handelClick(e) {
	const clickedLi = e.currentTarget;
	varObj.numberOfClick++;
	switch (varObj.numberOfClick) {
		case 1:
			console.log(1);
			varObj.card1 = clickedLi;
			break;
		case 2:
			console.log(2);
			varObj.card2 = clickedLi;
			let data1 = varObj.card1.getAttribute("data-card");
			let data2 = varObj.card2.getAttribute("data-card");
			console.log("data att er ens");
			if (data1 === data2) {
				if (varObj.card1 !== varObj.card2) {
					console.log("DON");
					varObj.card1.removeEventListener("click", handelClick);
					varObj.card2.removeEventListener("click", handelClick);
					varObj.card1.classList.add("don");
					varObj.card2.classList.add("don");
				}
			}
			varObj.numberOfClick = 0;
			break;
		default:
			console.log("dafault");
	}
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
