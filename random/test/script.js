//Selecting button for adding new cards
var addItem = document.getElementById('addCard');


var cardCount = 0;

//creates new card
function makeCard(){
	

	var pr = document.createElement("div");
	var dl = document.createElement("div");                                  //delete button in its on div for styling
	var cardHead = document.createElement("h1");

	let ab1 = document.createElement("button");                              //naming newly created buttons for reference
	ab1.setAttribute("name", `addBefore`);
	let ab2 = document.createElement("button");
	ab2.setAttribute("name", `addAfter`);
	let del = document.createElement("button");
	del.setAttribute("name", `delete`);

	pr.setAttribute("class", "cards");                                        // Style card and attach buttons
	ab1.appendChild(document.createTextNode("Add Before"));
	ab2.appendChild(document.createTextNode("Add After"));
	del.appendChild(document.createTextNode("Delete"));
	cardHead.appendChild(document.createTextNode(`Card ${cardCount + 1}`));
	dl.appendChild(del);
	pr.appendChild(cardHead);
	pr.appendChild(ab1);
	pr.appendChild(ab2);
	pr.appendChild(dl);
	
	pr.addEventListener("click", beforeAfterDelete);                           // add listeners to cards, and return new card
	return pr;
}

	function addCard(){ 
		var targetd = document.getElementById('cardContainer');                 // adds new card to webpage
		targetd.appendChild(makeCard());
		cardCount++;	
 	
}

function beforeAfterDelete(){                                                   //add card before or after target element
	var targetd = document.getElementById('cardContainer');
	var element = event.target;
	console.log(element.name);
	if(element.name === "addBefore"){
		targetd.insertBefore(makeCard(), element.parentNode);
		cardCount++
	}
	else if(element.name === "addAfter"){
		targetd.insertBefore(makeCard(), element.parentNode.nextSibling);
		cardCount++
	}
	else if(element.name === "delete"){
		var gone = element.parentNode.parentNode;
		gone.parentNode.removeChild(gone);

}
}


addItem.addEventListener("click", addCard);                                    //listner for add new card button