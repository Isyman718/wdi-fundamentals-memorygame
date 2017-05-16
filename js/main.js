var cards = ["queen","queen","king","king"]

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);


var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

if (cardsInPlay === 2) {
	alert("You found a match!")
} else if (cardsInPlay !== 2) {
	alert("Sorry, try again.")
};

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);