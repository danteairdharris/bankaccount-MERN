import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import AccountInfo from "./components/account-info.component";
import NewAccount from "./components/new-account.component";
import Deposit from "./components/deposit.component";
import Withdraw from "./components/withdraw.component";

function App() {
  return (
    <Router>
        <Navbar />
        <br/>
        <Route path ="/" exact component={AccountInfo} />
        <Route path ="/new" exact component={NewAccount} />
        <Route path ="/deposit/:id" exact component={Deposit} />
        <Route path ="/withdraw/:id" exact component={Withdraw} />
    </Router>
  );
}

export default App;
