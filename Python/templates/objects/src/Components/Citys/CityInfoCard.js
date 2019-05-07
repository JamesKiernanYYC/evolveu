import React from 'react'

class CityInfoCard extends React.Component {
    render() {
        return(
            <div>
                <h3>Total Populations: {this.props.total}</h3>
                <h3>Most Northern: {this.props.north}</h3>
                <h3>Most Southern: {this.props.south}</h3>
            </div>
        )
    }
}

export default CityInfoCard