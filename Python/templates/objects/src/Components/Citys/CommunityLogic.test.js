import Community from './Community'
import City from './City';

test('addCity', () => {
    const testCity = new City("Calgary", 80, 80, 100000)
    const testCommunity = new Community
    testCommunity.addCity(testCity)
    expect(testCommunity.Community[0].Name).toBe("Calgary")
})
test('getMostNorthern', () => {
    const testCity = new City("Calgary", 80, 80, 100000)
    const testCity2 = new City("Edmonton", 85, 85, 100000)
    const testCommunity = new Community
    testCommunity.addCity(testCity)
    testCommunity.addCity(testCity2)
    testCommunity.getMostNorthern()
    expect(testCommunity.mostNorth.Name).toBe("Edmonton")
})
test('getMostSouthern', () => {
    const testCity = new City("Calgary", 80, 80, 100000)
    const testCity2 = new City("Edmonton", 85, 85, 100000)
    const testCommunity = new Community
    testCommunity.addCity(testCity)
    testCommunity.addCity(testCity2)
    testCommunity.getMostSouthern()
    expect(testCommunity.mostSouth.Name).toBe("Calgary")
})
test('getPopulation', () => {
    const testCity = new City("Calgary", 80, 80, 100000)
    const testCity2 = new City("Edmonton", 85, 85, 100000)
    const testCommunity = new Community
    testCommunity.addCity(testCity)
    testCommunity.addCity(testCity2)
    testCommunity.getPopulation()
    expect(testCommunity.totalPop).toBe(200000)
})
