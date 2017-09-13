//CONSTANTS
RANK = 0, SUIT = 1;
ACE = 1, JACK = 11, QUEEN = 12, KING = 13;
CARD_RANKS = ["JOKER", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
CARD_SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
CLUB = 0, DIAMOND = 1, HEART = 2, SPADE = 3;

function generateStandardDeck()
{
	var deck = [];
	for (var r = ACE; r <= KING; r++)
		for (var s = CLUB; s <= SPADE; s++)
		{
			var card = new Object();
			card.rank = r;
			card.suit = s;
			card.cardImg = r + "-" + s + ".png";
			deck.push(card);
		}
		
	return deck;
}

/*
	shuffleDeck
	
	Takes a deck of cards and randomizes the order of the cards.
	
	Parameters:
		deck - The deck of cards
		
	Returns:
		The shuffled deck
*/
function shuffleDeck(deck)
{
	//Create an empty, temporary deck.
	shuffledDeck = [];
	
	/*
		The algorithm pulls random cards, one at a time, from the deck and places them into the new deck.
		
		The loop will run for as long as there are cards in the original deck.
	*/
	while (deck.length > 0)
	{
		//getRandomInteger comes from utilities.js
		var idx = getRandomInteger(0, deck.length - 1);
		var card = deck.splice(idx, 1)[0];
		shuffledDeck.push(card);
	}
	
	return shuffledDeck;
}

/*
	dealCard
	
		Removes and returns the first card from a deck.
	
	Parameters:
		a card deck
		
	Returns:
		The removed card
*/
function dealCard(deck)
{
	return deck.shift();
}

/*
	removeCard
	
	Removes and returns a specified card from a deck.
	
	Parameters:
		deck - the card deck
		idx - the position of the card being removed.
*/
function removeCard(deck, idx)
{
	/*
		idx is an optional parameter.  If it is omitted in the call, simply set it to 0 and remove the first card.
	*/
	if (idx == null)
		idx = 0;
		
	/*
		Remove the card with a call to splice.  Remember that splice returns an array so the one card is at index 0.
	*/
	var cardsRemoved = deck.splice(idx, 1);
	return cardsRemoved[0];
}

/*
	addCard
	
	Adds a card into a deck at a specified position.
	
	Parameters:
		deck - the card deck
		card - the card being added
		position - where to add the card
*/
function addCard(deck, card, position)
{
	/*
		position is an optional parameter.  If position is omitted in the call, simply add the card to the end of the deck.
	*/
	if (position == null)
		deck.push(card);
	else
		deck.splice(position, 0, card);
}

/*
	peekCard
	
	returns a card without removing it
	
	Parameters:
		deck - a card deck
		idx - the position of the card being returned
		
	Returns:
		a card object
*/
function peekCard(deck, idx)
{
	/*
		idx is an optional parameter.  If it is omitted in the call, simply set it to 0 and return the first card.
	*/
	if (idx == null)
		idx = 0;
	
	//Return the specified card.
	return deck[idx];
}

/*
	displayDeck
	
	USED FOR TESTING ONLY!!!!!!!!!
	
	This function will display all of the card images from a specified deck into a specified HTML element.
	
	Parameters:
		deck - the card deck
		path - the relative path of the image files
		htmlElement - the output element on the page
*/
function displayDeck(deck, path, htmlElement)
{
	//Clear out the innerHTML
	htmlElement.innerHTML = "";
	
	/*
		Loop through the deck and, through string building, create new <img /> tags inside of htmlElement by concatenating the text onto the innerHTML.
		
		THIS IS NOT AN EFFICIENT WAY TO ADD TAGS TO YOUR PAGE.  DO NOT USE THIS METHOD TO DYNAMICALLY BUILD A PAGE.
		
		THIS FUNCTION IS FOR TESTING PURPOSES ONLY
	*/
	for (var i = 0; i < deck.length; i++)
		htmlElement.innerHTML += "<img src = '" + path + deck[i].cardImg + "' />";
}
/*
	Please write the shuffleDeck, dealCard, addCard, peekCard, and removeCard functions
*/

