import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import AccountInfo from "./components/account-info.component";
import NewAccount from "./components/new-account.component";

function App() {
  return (
    <Router>
        <Navbar />
        <br/>
        <Route path ="/" exact component={AccountInfo} />
        <Route path ="/new" exact component={NewAccount} />
    </Router>
  );
}

export default App;
