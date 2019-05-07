import LinkedList from './LinkedList'


test('insertNode', () => {
    let yes = new LinkedList()
    yes.insertNode("words", 8)
    expect(yes.head.ammount).toBe(8)
})
test("deleteNode", () => {
    let yes = new LinkedList()
    yes.insertNode("words", 8)
    yes.insertNode("moreWords", 8)
})