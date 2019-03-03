import React, { Component } from "react";

import "./App.css";
import "bulma/css/bulma.css";
import food from "./foods.json";
import Food from "./components/Food";
import Detail from "./components/Detail";
import Search from "./components/Search";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

class App extends Component {
  state = {
    foodArray: food,
    search: [],
    isShown: false,
    show: false
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
      isShown: true
    });
  };

  addItem = e => {
    e.preventDefault();

    let list = this.state.foodArray;
    let newFood = {};

    //New Object to add
    const foodName = document.getElementById("nameInput");
    const foodCalories = document.getElementById("caloriesInput");
    const foodImage = document.getElementById("imageInput");

    const form = document.getElementById("addItemForm");

    if (
      foodName.value !== "" ||
      foodCalories.value !== "" ||
      foodImage.value !== ""
    ) {
      //Construimos el objeto a partir de los nuevos valores
      newFood = {
        name: foodName.value,
        calories: foodCalories.value,
        image: foodImage.value,
        quantity: 0
      };

      list.push(newFood);

      //Actualizamos el estado

      this.setState({
        foodArray: list,
        show: true
      });

      form.reset();
    } else {
    }
  };

  render() {
    console.log(this.state.foodArray);
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>

        <div className="columns">
          <div className="column">
            <div>
              <Search search={this.searchFood} placeholder="Search for food!" />
            </div>

            {/* Esta es la form para poder agregar comida */}
            <div>
              <form className="form" id="addItemForm">
                <div className="field">
                  <label className="label">Name:</label>
                  <input
                    id="nameInput"
                    className="input"
                    type="text"
                    placeholder="Food Name"
                  />
                </div>

                <div className="field">
                  <label className="label">Calories:</label>
                  <input
                    id="caloriesInput"
                    className="input"
                    type="text"
                    placeholder="Calories"
                  />
                </div>

                <div className="field">
                  <label className="label">Image Url:</label>
                  <input
                    id="imageInput"
                    className="input"
                    type="text"
                    placeholder="Image Url"
                  />

                  <div className="control">
                    <button className="button is-link" onClick={this.addItem}>
                      Submit
                    </button>

                    <SweetAlert
                      show={this.state.show}
                      title="Comida agregada!"
                      text="Comida agregada!"
                      type="success"
                    
                      onConfirm={inputValue => {
                        console.log(inputValue); // eslint-disable-line no-console
                        this.setState({ show: false });
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Empieza la lista de comidas */}

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
