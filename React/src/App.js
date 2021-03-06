import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./components/home";
import Blogin from "./components/Blogin";
import Bsignup from "./components/Bsignup";
import Fsignup from "./components/Fsignup";
import Flogin from "./components/Flogin";


export default class App extends Component{


  render(){
    return (
      <Router>
        <div className="app">
          {<Route path="/" exact component={ Home } />}
          <Route path="/buyer/signup" exact component={ Bsignup } />
          <Route path="/buyer/login" exact component={ Blogin }/>
          <Route path="/farmer/signup" exact component={ Fsignup }/>
          <Route path="/farmer/login" exact component={ Flogin }/>
        </div>
      </Router>
    );
  }

}


