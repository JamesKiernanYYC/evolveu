import React, {useState} from 'react'

const Home = (props) => {
    return(
        <div>
            <h1>test</h1>
            <p>{props.clientName}</p>
            <p>{props.clientId}</p>
        </div>
    )
}

export default Home