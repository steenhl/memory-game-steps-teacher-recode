const memoryGame = document.querySelector(".memory-game");
const cardsWrapper = memoryGame.querySelector("#cards-wrapper");
const card = memoryGame.querySelectorAll(".card");
const respons = memoryGame.querySelector("#respons");
//sconsole.log(respons);

card.forEach((card) => {
	card.addEventListener("click", handleClick);
	// console.log(card);
});
function handleClick(event) {
	let target = event.currentTarget;
	let data = target.getAttribute("data-card");
	// console.log(data);
	getRespons(data);
}

function getRespons(text) {
	// console.log(respons.innerHTML);
	// console.log(text);
	respons.innerHTML = text;
}
