import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./Components/foodbox/foodbox.js";

class App extends Component {
  state = {
    food: [...foods],
    search: "",
    class: "",
    newFood: "",
    newCalories: "",
    total: 0
  };

  getdiv = el => {
    return el;
  };
  addFood = ev => {
    ev.preventDefault();
    let obj = {
      name: this.state.newFood,
      calories: this.state.newCalories,
      image: "/fooooods.jpg",
      quantity: 0
    };
    this.state.food.push(obj);
    this.setState({
      newCalories: "",
      newFood: ""
    });
  };
  calc = () => {
    console.log("yo");
    let filtered = this.state.food.filter(eachFood => {
      return eachFood.quantity > 0;
    });
    return filtered.map(e => {
      console.log("===");
      return (
        <li>
          {e.quantity} {e.name} = {e.quantity * e.calories} <a id={e.name} onClick={this.deleteIng} class="delete"></a>
        </li>
      );
    });
  };
  totalCalc = () => {
    console.log("hi");
    let cloned = 0;
    let filtered = this.state.food.filter(eachFood => {
      return eachFood.quantity > 0;
    });
    filtered.map(e => {
      cloned += e.quantity * e.calories;
    });
    this.setState({
      total: cloned
    });
  };
  deleteIng = (ev) => {
    let id = ev.target.id;
    let clone = [...this.state.food]
    clone.forEach((e)=>{
      if(e.name === id){
        e.quantity = 0;
      }
    })
    this.setState({
      food: clone
    })
    this.totalCalc();
  }
  showFoods = () => {
    if (this.state.search === "") {
      return this.state.food.map(eachFood => {
        return <FoodBox {...eachFood} add={this.addQuantity} delete={this.deleteItem} />;
      });
    } else {
      let filtered = this.state.food.filter(eachFood => {
        return eachFood.name.includes(this.state.search);
      });
      return filtered.map(eachFood => {
        return <FoodBox {...eachFood} add={this.addQuantity} delete={this.deleteItem} />;
      });
    }
  };
  changeText = e => {
    this.setState({
      search: e.target.value
    });
    console.log(e.target.value);
  };
  changeCalories = e => {
    this.setState({
      newCalories: e.target.value
    });
  };
  deleteItem = (name,calories)=>{
    let clone = [...this.state.food];
    clone.forEach((e,i)=>{
      if(e.name === name && e.calories === calories){
        clone.splice(i,1);
      }
    })
    this.setState({
      food: clone
    })
    this.totalCalc();
  }
  addQuantity = (name, input) => {
    console.log(name);
    let copy = [...this.state.food];
    copy.map((e, i) => {
      if (e.name === name) {
        for (let i = 0; i < input; i++) {
          e.quantity++;
          console.log(e);
        }
      }
    });
    this.setState({
      food: copy
    });
    this.totalCalc();
  };
  changeFood = e => {
    this.setState({
      newFood: e.target.value
    });
  };
  modalTrigger = ev => {
    if (this.state.class == "") {
      this.setState({
        class: "is-active"
      });
    } else {
      this.setState({
        class: ""
      });
    }
  };
  render() {
    return (
      <div className="App">
        <h1>IRON NUTRITION</h1>
        <input onChange={this.changeText} />
        <button onClick={this.modalTrigger}>ADD FOOD +</button>
        <div class="columns">
          <div class="column">{this.showFoods()}</div>
          <div class="column">
            <h3>Today's food</h3>
            {this.calc()}
            <p>Total: {this.state.total} cal</p>
          </div>
        </div>

        <div class={`modal ${this.state.class}`}>
          <div class="modal-background" />
          <div class="modal-content">
            <form onSubmit={this.addFood}>
              <div>
                <label>Name of Food</label>
                <input
                  type="text"
                  onChange={this.changeFood}
                  placeholder="pizza"
                />
              </div>
              <div>
                <label>Calories</label>
                <input
                  type="number"
                  onChange={this.changeCalories}
                  placeholder="150"
                />
              </div>
              <div>
                {/* <label>Image of Food</label>
        <input type="file" placeholder="picture.jpg/.png"></input> */}
              </div>
              <button onClick={this.modalTrigger}>Submit</button>
            </form>
          </div>
          <button
            class="modal-close is-large"
            onClick={this.modalTrigger}
            aria-label="close"
          />
        </div>
      </div>
    );
  }
}

export default App;
