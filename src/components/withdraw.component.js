import React, { Component } from 'react';
import axios from 'axios';

export default class NewAccount extends Component {

    constructor(props) {
        super(props);

        this.setWithdraw = this.setWithdraw.bind(this);
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

    setWithdraw(e) {
        this.setState({
            withdraw: e.target.value
        })
    }   

    onSubmit(e) {
        e.preventDefault();
        
        const account = {
            accountname: this.state.accountname,
            balance: this.state.balance,
            deposit: 0,
            withdraw: this.state.withdraw,
        }

        axios.post('http://localhost:5000/account/withdraw/'+this.props.match.params.id, account)
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
                    <label>Withdraw: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.withdraw}
                    onChange={this.setWithdraw}/>
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