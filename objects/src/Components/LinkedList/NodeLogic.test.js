import Node from './Node'

test('show method', () => {
    const test1 = new Node('words', '8',)
    expect(test1.show()).toBe("words, 8")
})