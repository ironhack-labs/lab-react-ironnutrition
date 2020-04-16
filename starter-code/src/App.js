import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import Ejemplo1 from "./components/Ejemplo1";
import Search from './components/Search'
class App extends Component {
  render() {
    return (

       
          <div className="root">
         
        <div className="container">
         
          <div className="column">
         
          <Ejemplo1  />

          </div>
        </div>
      </div>
     
    );
  }
}

export default App;
