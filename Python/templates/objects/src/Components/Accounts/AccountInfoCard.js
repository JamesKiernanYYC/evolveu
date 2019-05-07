import React from 'react'

class AccountInfoCard extends React.Component {
    render() {
        return(
            <div>
                <h3>Total Balance of Accounts: {this.props.total}</h3>
                <h3>Largest Account: {this.props.largest}</h3>
                <h3>Smallest Account: {this.props.smallest}</h3>
            </div>
        )
    }
}
export default AccountInfoCard