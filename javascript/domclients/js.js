const data = {clients:[
			{name:"Jane", balance:10},
			{name:"Liam", balance:1000},
			{name:"Emma", balance:1330},
			{name:"Olivia", balance:310},
			{name:"Noah", balance:503},
			{name:"William", balance:520},
			{name:"Benjamin", balance:150},]};
const cardBox = document.getElementById('cardBox')
    const newCard = (props) => {
        data.clients.forEach(function(element) {
            const card = document.createElement("div");
            const accountName = document.createElement("h2");
            const accountBallance = document.createElement("p")
            const addButton = document.createElement("button");
            card.setAttribute("class", "card")
            addButton.setAttribute("class", "btn")
            accountBallance.appendChild(document.createTextNode(element.balance))
            addButton.setAttribute("name", "delete");
            accountName.appendChild(document.createTextNode(element.name));
            addButton.appendChild(document.createTextNode("Delete"));
            card.appendChild(accountName);
            card.appendChild(accountBallance);
            card.appendChild(addButton);
            card.addEventListener("click", delFunction);
            cardBox.appendChild(card);
            cardBox.appendChild(document.createElement("br"))
            return cardBox;
        });
    }
const delFunction = () => {
    var target = event.target;
    if (target.name === "delete") {
        var remove = target.parentNode;
        remove.parentNode.removeChild(remove);
    }
}
newCard()


