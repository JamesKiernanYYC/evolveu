class City {
    constructor(name, latitude, longitude, population) {
        this.Name = name
        this.Latitude = latitude
        this.Longitude = longitude
        this.Population = population
    }
    show = () => {
        return(`${this.Name}, ${this.Latitude}, ${this.Longitude}, ${this.Population}`)
    }
    movedIn = (num) => {
        return(this.Population += num)
    }
    movedOut = (num) => {
        return(this.Population = this.Population - num)
    }
    howBig = () => {
        if (this.Population > 100000) {
            return("City")
        }
        else if (this.Population > 20000 && this.Population < 100000) {
            return("Large Town")
        }
        else if (this.Population > 1000 && this.Population < 20000){
            return("Town")
        }
        else if (this.Population > 100 && this.Population < 1000) {
            return("Village")
        }
        else if (this.Population > 1 && this.Population < 100) {
            return("Hamlet")
        }
    }
    whichSphere = () => {
        if (this.Latitude > 0 && this.Latitude <= 90) {
            return("Northern")
        }
        else if (this.Latitude < 0 && this.Latitude >= -90) {
            return("Southern")
        }
        else if (this.Latitude === 0) {
            return("On the Equator")
        }
        }
    }
    
    
    
    export default City