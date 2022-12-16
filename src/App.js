
import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import Header from "./component/Header"
import './App.css';
import Home from "./component/Home";
import Cart from "./component/Cart";


function App() {
  return(
    <div className = "app">
      <Router>
    <Header />
    <div className="app-container">
      <Switch>
      <Route exact path = "/" element = {<Home />} />
      <Route exact path = "/cart" element = {<Cart/>} />
      </Switch>
    </div>
  </Router>
    </div>
   
    );
  }

  export default App;





