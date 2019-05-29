import City from './CityLogic'

test('City Class', () => {
    const testCity = new City("Calgary", 100 , 100, 1000000)
    expect(testCity.Name).toBe("Calgary")
})
test('movedIn', () => {
    const testCity = new City("Calgary", 100 , 100, 1000000)
    expect(testCity.movedIn(1000000)).toBe(2000000)
})
test('movedOut', () => {
    const testCity = new City("Calgary", 100 , 100, 1000000)
    expect(testCity.movedOut(500000)).toBe(500000)
})
test('howBig', () => {
    const testCity = new City("Calgary", 100 , 100, 1000000)
    expect(testCity.howBig()).toBe("City")
})
test('show', () => {
    const testCity = new City("Calgary", 100 , 100, 1000000)
    expect(testCity.show()).toBe("Calgary, 100, 100, 1000000")
})
test('whichSphere', () => {
    const testCity = new City("Calgary", 80 , 80, 1000000)
    expect(testCity.whichSphere()).toBe("Northern")
})
