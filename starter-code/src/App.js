import React, { Component } from "react";

import "./App.css";
import "bulma/css/bulma.css";
import food from "./foods.json";
import Food from "./components/Food";
import Detail from "./components/Detail";
import Search from "./components/Search";
import Form from "./components/Form";

class App extends Component {
  state = {
    foodArray: food,
    search: [],
    isShown: false
  };

  //Funciones para la app

  //El componente Search toma el valor retornado por esta función, despues de haber filtrado la info

  searchFood = indice => {
    var nombres = [];
    this.state.foodArray.forEach(element => {
      if (element.name.toLowerCase().indexOf(indice.toLowerCase(), 0) > -1) {
        nombres.push(element);
      }

      //Se modifica el state con el resultado del array
      this.setState({
        search: nombres
      });
    });
  };

  addFoodHandle = () => {

    this.setState({

      isShown:true

    })

  };

  render() {
    console.log(this.state.foodArray);
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        <div>
          <Search search={this.searchFood} />
        </div>

        <div>
          {this.state.isShown ? (
            <Form />
          ) : (
            <button className="button is-link" onClick={this.addFoodHandle}>Add new Food</button>
          )}
        </div>

        <div className="columns">
          <div className="column">
            {this.state.search.map((e, i) => {
              return <Food key={i} info={e} />;
            })}
          </div>

          <div className="column">
            <Detail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
