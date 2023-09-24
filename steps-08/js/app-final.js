const cardsWrapper = document.querySelector("#cards-wrapper");
const cards = cardsWrapper.querySelectorAll(".card");
const respons = document.querySelector("#respons");
const resetBtn = document.querySelector("#reset");

function insertHtml(htmlString) {
	cardsWrapper.insertAdjacentHTML("beforeend", htmlString);
	const li = cardsWrapper.querySelector("li:last-of-type");
	li.addEventListener("click", handelClick);
}
const varObj = { numberOfClick: 0, card1: undefined, card2: undefined, numerOfCards: 4 };

function handelClick(e) {
	const clickedLi = e.currentTarget;
	varObj.numberOfClick++;
	switch (varObj.numberOfClick) {
		case 1:
			if (varObj.card1 !== undefined && varObj.card2 !== undefined) {
				varObj.card1.classList.remove("active");
				varObj.card2.classList.remove("active");
			}
			// Reset cards object variables

			varObj.card1 = clickedLi;
			varObj.card1.classList.add("active");

			break;
		case 2:
			varObj.card2 = clickedLi;
			varObj.card2.classList.add("active");
			let data1 = varObj.card1.getAttribute("data-card");
			let data2 = varObj.card2.getAttribute("data-card");
			if (data1 === data2) {
				if (varObj.card1 !== varObj.card2) {
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
		cardArra.push(`
			<li class="card" data-card=${i}>
				<span class="front">Card number</span>
				<span class="card-number"> ${i}</span>
			</li>`);
		cardArra.push(`
			<li class="card" data-card=${i}>
				<span class="front">Card number</span>
				<span class="card-number"> ${i}</span>
			</li>`);
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

resetBtn.addEventListener("click", restGame);

function restGame() {
	varObj.numberOfClick = 0;
	varObj.card1 = undefined;
	varObj.card2 = undefined;
	cardsWrapper.innerHTML = "";
	cardArra = [];
	createCards(varObj.numerOfCards);
}

createCards(varObj.numerOfCards);
