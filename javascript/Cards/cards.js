const addCard = document.getElementById("addCard")
const cardBox = document.getElementById("leftSide")

const newCard = () => {
    const card = document.createElement("div");
    const cardName = document.createElement("p");
    const addBeforeBtn = document.createElement("button");
    const addAfterBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const btnContainer = document.createElement("div")
    btnContainer.setAttribute("class", "btnContainer")
    card.setAttribute("class", "cards");
    addAfterBtn.setAttribute("class","cardsBtn");
    addBeforeBtn.setAttribute("class","cardsBtn");
    delBtn.setAttribute("class","cardsBtn");
    delBtn.setAttribute("id", "delete")
    addAfterBtn.setAttribute("id", "addAfter")
    addBeforeBtn.setAttribute("id", "addBefore")
    addAfterBtn.appendChild(document.createTextNode("Add After"));
    addBeforeBtn.appendChild(document.createTextNode("Add Before"));
    delBtn.appendChild(document.createTextNode("Delete"));
    cardName.appendChild(document.createTextNode("Card 1"))
    btnContainer.appendChild(addAfterBtn)
    btnContainer.appendChild(addBeforeBtn)
    btnContainer.appendChild(delBtn)
    card.appendChild(cardName);
    card.appendChild(btnContainer)
    card.addEventListener("click", clickHandle);
    cardBox.appendChild(card);
    return (cardBox);
}

const clickHandle = (event) => {
    if (event.target.id === "addCard") {
        newCard()
    } else if (event.target.id === "delete") {
        console.log("Deleting")
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode)
    } else if (event.target.id === "addBefore") {
        console.log("Adding Before")
        newCard()
    } else if (event.target.id === "addAfter") {
        console.log("Adding After")
        newCard()
    }
}

addCard.addEventListener("click", clickHandle)