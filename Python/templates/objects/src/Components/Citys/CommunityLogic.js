import City from './CityLogic'

class Community extends City{
    constructor() {
        super()
        this.commArray = []
        this.city = new City()
    }
    addCity = (a, b, c, d) => {
        return this.commArray.push(new City(a, b, c, d))
    }
    getMostNorthern = () => {
        this.mostNorth = this.commArray.reduce((prev, current) => (prev.Latitude > current.Latitude) ? prev : current)
        return this.mostNorth.Name
    }
    getMostSouthern = () => {
        this.mostSouth = this.commArray.reduce((prev, current) => (prev.Latitude < current.Latitude) ? prev : current)
        return this.mostSouth.Name
    }
    getPopulation = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.Population
        this.totalPop = this.commArray.reduce(reducer, 0)
        return this.totalPop
    }
    
}

export default Community