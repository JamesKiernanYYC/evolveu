class Node{
	constructor(subject, amount, forwardNode = null){
		this.subject = subject
		this.amount = amount 
		this.forwardNode = forwardNode
	}

	show () {
		return(
		`Subject: ${this.subject}, Ammount: ${this.amount}`
		)
	}
}

export default Node
