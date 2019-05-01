import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import Form from "./Form";
import Search from "./Search";


class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      foods2: foods,

      isFormOpen: false
    };
  }

  showForm() {
    let formStatus = !this.state.isFormOpen;
    this.setState({
      ...this.state,
      isFormOpen: formStatus
    });
  }

  addFood(newFood){
    var foods= [...this.state.foods]
    foods.push(newFood)

    this.setState({
      ...this.state,
      foods: foods,
      foods2: foods,
      isFormOpen: false
    })

  }

  searchFood=(searchInput)=>{
    
    let foods= [...this.state.foods2];
    foods = foods.filter(food =>{
      return food.name.includes(searchInput)
    });
    this.setState({
      ...this.state,
      foods: foods
    })
  }


  render() {
    let modalClass='modal'
    this.state.isFormOpen ? modalClass+=' is-active' : modalClass='modal'
    return (
      <React.Fragment>
<Search searchFood={this.searchFood}></Search>
{/* <Search searchFood={(searchInput)=> this.searchFood(searchInput)}></Search> */}

        <button className="button is-link" onClick={() => this.showForm()}>
          Add new food
        </button>
        <Form  modalClass={modalClass} newFood={(newFood)=>this.addFood(newFood)}/>
        {this.state.foods.map(food => {
          return (
            <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default App;
