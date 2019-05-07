class Node {
    constructor(subject, ammount, next, prev) {
        this.subject = subject
        this.ammount = ammount
        this.next = next
        this.prev = prev
    }
    show = () => {
        return `${this.subject}, ${this.ammount}`
    }
}
export default Node