import React, { Component } from 'react';
import axios from 'axios';

const Account = props => (
    <tr>
        <td>{props.account.accountname}</td>
        <td>{props.account.balance}</td>
    </tr>
)

export default class AccountInfo extends Component {
    constructor(props) {
        super(props);


        this.state = {
            accounts: []
        }
    }

        componentDidMount() {
            axios.get('http://localhost:5000/account')
            .then( (response) => {
                this.setState({
                    balance: response.data.balance
                })
            })
            .catch( (err) => {
                console.log(err);
            })
        }

        accountList() {
            return this.state.accounts.map( currentaccount => {
                return <Account account={currentaccount} key={currentaccount._id}/>;
            })
        }

    render() {
        return(
            <div>
            <h3>Accounts</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Accountname</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                { this.accountList() }
              </tbody>
            </table>
          </div>
        )
    }
}