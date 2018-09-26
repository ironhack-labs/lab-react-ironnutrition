import React, { Component } from "react";
import "./App.css";
import FoodList from "./Foodlist";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import NewFood from "./NewFood";
import FoodBox from './Foodbox';
import Search from './Search';
import TodaysFoods from './TodaysFoods'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allFoods: foods,
      foodList: foods.slice(),
      showForm: false,
      todaysFoods: []

  }
  }

  addFoodToList = (newFoodObject) =>{
    let newFood = {
      name: newFoodObject.name,
       calories: newFoodObject.calories,
       image: newFoodObject.image,
      };
      const copyOfTodaysFoods = [...this.state.todaysFoods];

      copyOfTodaysFoods.unshift(newFood);


      this.setState({todaysFoods: copyOfTodaysFoods })

  }

  showFoods = () => {
    return this.state.foodList.map((eachFood, index)=> {
      return <FoodBox key={eachFood.name} { ...eachFood } addToList={this.addFoodToList}/>
    })
  }

  addNewFood = (e, theNewFood) => {
    e.preventDefault();

    const newFood = {
     name: theNewFood.nameField,
      calories: theNewFood.caloriesField,
      image: theNewFood.imageField,
    };

    const allTheFoods = [...this.state.foodList];


    allTheFoods.unshift(newFood);

    this.setState({foodList: allTheFoods, allFoods: allTheFoods })

  }

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})

  }



  searchFunction = (searchTerm) => {
    let theList = [...this.state.allFoods];
    theList = theList.filter((eachFood)=> {
      return eachFood.name.includes(searchTerm)
    })
      this.setState({foodList: theList})
  }



  render() {
    return(
      <div>
        <h1 className="title">Welcome to IRONFOOD</h1>
        <div className="todays">
        <TodaysFoods todaysFoods = {this.state.todaysFoods}/>
        </div>
      <div className="addNew">
      <button onClick={()=> this.toggleForm()} className="button is-info">
      {this.state.showForm? 'Hide The Form' : 'Show Form'} </button>
   
      
    {this.state.showForm && <NewFood addnew = {this.addNewFood} />}
      


      </div>

      <Search handleSearch={this.searchFunction}/>

      <div className="list">

    {this.showFoods()}
    </div> 
      </div>
      )
  }
}

export default App;
