import React, { Component } from 'react';
import axios from 'axios';

export default class NewAccount extends Component {

    constructor(props) {
        super(props);

        this.onChangeAccountname = this.onChangeAccountname.bind(this);
        this.onChangeBalance = this.onChangeBalance.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            accountname: "",
            balance: ""
        }
    }

    onChangeAccountname(e) {
        this.setState({
            accountname: e.target.value
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
            accountname: this.state.accountname,
            balance: this.state.balance
        }

        console.log(account);
        
        axios.post('http://localhost:5000/account/new', account)
        .then( (res) => console.log(res.data))
        .catch( (err) => console.log('Error :' + err));

        this.setState({
            accountname: " "
        })

        window.location = "/";
    }

    render() {
        return(
            <div class="container">
              <h3> Create New Account</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Account name: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.accountname}
                    onChange={this.onChangeAccountname}/>
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