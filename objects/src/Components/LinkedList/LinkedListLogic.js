import Node from './NodeLogic'

class LinkedList {
constructor() {
   this.head = null
   this.tail = null
   this.currentNode = null
}
initNode(subject, ammount) {
    //adding to the list when the list is empty
    if(this.head === null) {
        let node = new Node(subject, ammount)
        node.next = node.prev = null 
        this.head = this.tail = this.currentNode = node
        console.log("adding to empty list")
    //adding to the end of the list
    } else if (this.currentNode.next === null && this.currentNode !== null) {
        let node = new Node(subject, ammount)
        node.next = null
        node.prev = this.currentNode
        this.currentNode.next = node
        this.tail = node
        node = this.currentNode
        console.log("adding to the end of the list")
    //adding somewhere in the middle
     } else if (this.currentNode.next !== null && this.currentNode.prev !== null && this.currentNode !== null){
        let node = new Node(subject, ammount)
        node.next = this.currentNode.next
        node.prev = this.currentNode
        this.currentNode.next = node
        this.currentNode = node
        console.log("adding in the middle of the list after current")
    }
}
moveToFirst = () => {
    this.currentNode = this.head
}
moveToLast = () => {
    this.currentNode = this.tail
}

}
export default LinkedList