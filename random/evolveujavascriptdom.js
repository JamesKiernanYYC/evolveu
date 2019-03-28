var addCard = document.getElementById('addCard');
var count = 0;
//creates a div for the new card and appends buttons and text into the card while adding it
//to a class "card" that is for styling.
function newCard() {
	var card = document.createElement("div");
	var cardTitle = document.createElement("h3");
	let addB = document.createElement("button");
	addB.setAttribute("name", 'addBefore');
	let addA = document.createElement("button");
	addA.setAttribute("name", 'addAfter');
	let delB = document.createElement("button");
	delB.setAttribute("name", 'delete');
	card.setAttribute("class", "card");
	cardTitle.appendChild(document.createTextNode(`Card ${count + 1}`));
	addB.appendChild(document.createTextNode("Add Before"));
	addA.appendChild(document.createTextNode("Add After"));
	delB.appendChild(document.createTextNode("Delete"));
	card.appendChild(delB);
	card.appendChild(addB);
	card.appendChild(addA);
	card.appendChild(cardTitle);
	card.addEventListener("click", buttonFunctions);
	return card;
}
//function for adding the card to the cardContainer div 
function addC() {
	var cardContainer = document.getElementById('leftSide');
	cardContainer.appendChild(newCard());
	count++;
}
//function for adding functionality to the created buttons inside of the cardContainer div
function buttonFunctions() {
	var cardContainer = document.getElementById('leftSide');
	var target = event.target;
		if (target.name === "addBefore") {
			cardContainer.insertBefore(newCard(), target.parentNode);
			count++
		} 	else if (target.name === "addAfter") {
				cardContainer.insertBefore(newCard(), target.parentNode.nextSibling);
				count++
			}	else if (target.name === "delete") {
					var remove = target.parentNode;
					remove.parentNode.removeChild(remove);
				}
}
//adds an event listener to the button "Add Card" at the top of the leftSide div that insers a
//newCard div into the "cardContainer"
addCard.addEventListener("click", addC);


