import React, { Component } from 'react';

export default class NewAccount extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeBalance = this.onChangeBalance.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            balance: ""
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeBalance(e) {
        this.setState({
            balance: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const account = {
            username: this.state.username,
            balance: this.state.balance
        }

        console.log(account);
        window.location = '/'
    }

    render() {
        return(
            <div>
              <h3> Create New Account</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}/>
                </div>
                <div className="form-group">
                    <label>Balance: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.balance}
                    onChange={this.onChangeBalance}/>
                </div>
                <div className="form-group">
                    <input type="submit"
                    value="Create Account"
                    className="btn btn-primary"/>
                </div>
              </form>
             </div>
        )
    }
}