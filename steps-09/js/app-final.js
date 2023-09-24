const cardsWrapper = document.querySelector("#cards-wrapper");
const cards = cardsWrapper.querySelectorAll(".card");
const resetBtn = document.querySelector("#reset");

class TurnCardGame {
	constructor(numberOfCards, parentElement, resetBtn) {
		this.parentElement = parentElement;
		this.resetBtn = resetBtn;
		this.numberOfCards = numberOfCards;
		this.cardArray = [];
		this.varObj = { numberOfClick: 0, card1: undefined, card2: undefined };
	}
	init() {
		this.createCards(this.numberOfCards);
		if (this.resetBtn === undefined) return;
		this.resetBtn.addEventListener("click", this.resetGame.bind(this));
	}

	handelClick(event) {
		const clickedLi = event.currentTarget;
		this.varObj.numberOfClick++;
		switch (this.varObj.numberOfClick) {
			case 1:
				if (this.varObj.card1 !== undefined && this.varObj.card2 !== undefined) {
					this.varObj.card1.classList.remove("active");
					this.varObj.card2.classList.remove("active");
				}

				this.varObj.card1 = clickedLi;
				this.varObj.card1.classList.add("active");

				break;
			case 2:
				this.varObj.card2 = clickedLi;
				this.varObj.card2.classList.add("active");
				let data1 = this.varObj.card1.getAttribute("data-card");
				let data2 = this.varObj.card2.getAttribute("data-card");
				if (data1 === data2) {
					if (this.varObj.card1 !== this.varObj.card2) {
						this.varObj.card1.removeEventListener("click", this.handelClick.bind(this));
						this.varObj.card2.removeEventListener("click", this.handelClick.bind(this));
						this.varObj.card1.classList.add("don");
						this.varObj.card2.classList.add("don");
					}
				}
				this.varObj.numberOfClick = 0;

				break;
			default:
				console.log("dafault");
		}
	}

	createCards(numberOfCards) {
		for (let i = 0; i < numberOfCards; i++) {
			this.cardArray.push(
				`<li class="card" data-card=${i}><span class="front">Card number</span><span class="card-number"> ${i}</span></li>`
			);
			this.cardArray.push(
				`<li class="card" data-card=${i}><span class="front">Card number</span><span class="card-number"> ${i}</span></li>`
			);
		}
		let shuffleCarsArray = _.shuffle(this.cardArray);
		this.insertCard(shuffleCarsArray);
	}
	insertCard(cardList) {
		cardList.forEach((card) => {
			let lastLi = this.insertHtml(this.parentElement, card);
			lastLi.addEventListener("click", this.handelClick.bind(this));
		});
	}

	insertHtml(parentElement, htmlString) {
		parentElement.insertAdjacentHTML("beforeend", htmlString);
		return this.parentElement.lastElementChild;
	}
	resetGame() {
		this.varObj.numberOfClick = 0;
		this.varObj.card1 = undefined;
		this.varObj.card2 = undefined;
		this.parentElement.innerHTML = "";
		this.cardArray = [];
		this.createCards(this.numberOfCards);
	}
}

const game = new TurnCardGame(4, cardsWrapper, resetBtn);
game.init();
