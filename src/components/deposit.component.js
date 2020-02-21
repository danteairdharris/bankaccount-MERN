import React, { Component } from 'react';
import axios from 'axios';

export default class NewAccount extends Component {

    constructor(props) {
        super(props);

        this.setDeposit = this.setDeposit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            accountname: "",
            balance: "",
            deposit: "",
            withdraw: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/account/'+this.props.match.params.id)
        .then( (response) => {
            this.setState({
                accountname: response.data.accountname,
                balance: response.data.balance,
                deposit: 0,
                withdraw: 0
            })
        })
        .catch( (err) => console.log('Error: ' + err));
    }

    setDeposit(e) {
        this.setState({
            deposit: e.target.value
        })
    }   

    onSubmit(e) {
        e.preventDefault();
        
        const account = {
            accountname: this.state.accountname,
            balance: this.state.balance,
            deposit: this.state.deposit,
            withdraw: 0
        }

        axios.post('http://localhost:5000/account/deposit/'+this.props.match.params.id, account)
        .then( (res) => console.log(res.data))
        .catch( (err) => console.log('Error :' + err));

        window.location = "/";
    }

    render() {
        return(
            <div>
              <h3> Create New Account</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Deposit: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.deposit}
                    onChange={this.setDeposit}/>
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