import React, { Component } from 'react'

function AccCard(props) {
        return(
            <div>
                <h1>{props.name}</h1>
                <h3>{props.balance}</h3>
                <input type='text' />
                <button id='Deposit'>Deposit</button>
                <button id='Withdraw'>Withdraw</button>
                <br />
                <br />
                <button id='DeleteCard'>Delete Account</button>
                <button id='Rename'>Rename Account</button>
            </div>
        )

    }

export default AccCard