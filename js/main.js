var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}];

var cardsInPlay = []
cardsInPlay.push("cards[cardId].rank");

var checkForMatch = function() {
	 if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
  }
}

var flipCard = function() { 
	this.getAttribute('data-id');
	this.setAttribute(cards[cardId].cardImage);
	if (cardsInPlay === 2) {
	alert("You found a match!")
} else if (cardsInPlay !== 2) {
	alert("Sorry, try again.")	
};

console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
checkForMatch();
}

var createBoard = function() {
	for (var i = 0; i < createBoard.length; i++) {
		var newListItem = document.createElement('img');
		document.cardElement.setAttribute('images/back.png');
		document.cardElement.setAttribute(data-i);
		document.getElementById('game-board').appendChild(newItem);
		document.getElementsByTagName('button')[0].addEventListener('click');
	};
}

createBoard();