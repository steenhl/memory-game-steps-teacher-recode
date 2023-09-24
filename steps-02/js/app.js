const cardsWrapper = document.querySelector("#cards-wrapper");
// const cards = cardsWrapper.querySelectorAll(".card");
const respons = document.querySelector("#respons");

function insertHtml(element, htmlString) {
	element.insertAdjacentHTML("beforeend", htmlString);
}

function createCards(numberOfCards) {
	for (let i = 0; i < numberOfCards; i++) {
		let card = `<li class="card" data-card="${i}"><span class="front">Card number ${i}</span></li>`;
		insertHtml(cardsWrapper, card);
		insertHtml(cardsWrapper, card);
	}
}
createCards(10);
