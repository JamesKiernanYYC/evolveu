import Node from './NodeLogic'

class LinkedList{
	constructor(){
		this.head = null
		this.currentNode = null
	}

	getFirst () {
		let node = this.head
		return this.currentNode = node
	}

	getLast () {
		let node = this.head
		while (node) {
			if(node.forwardNode === null){
				return this.currentNode = node
			}
			node = node.forwardNode
		}
	}
    getNext () {
        if(this.currentNode.forwardNode === null){
        return this.currentNode
        }
        return this.currentNode = this.currentNode.forwardNode
	}

	getPrevious () {
		let node = this.head
		if(node === this.currentNode){
			return node
		}
		while (node) {
			if (this.currentNode === node.forwardNode){
				return this.currentNode = node
			}
			node = node.forwardNode
		}
	}

	insertNode (subject, amount) {
		if(this.head === null){
			let newNode = new Node(subject, amount)
			newNode.forwardNode = null
			this.head = newNode
			this.currentNode = newNode
			return this.head
		}
		else{
			let newNode = new Node(subject, amount)
			newNode.forwardNode = this.currentNode.forwardNode
			this.currentNode.forwardNode = newNode
			this.currentNode = newNode
			return newNode
		}
	}

	deleteNode () {
		if(this.head.forwardNode === null){
			return this.head = null
		}
		if(this.head === this.currentNode){
			this.head = this.head.forwardNode
			return this.currentNode = this.head
		}
		else{
			let previousNode = this.getPrevious()
			previousNode.forwardNode = this.currentNode.forwardNode.forwardNode
			this.currentNode = previousNode
			return this.currentNode
	}
	}

}

export default LinkedList