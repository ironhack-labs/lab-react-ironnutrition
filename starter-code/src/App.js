import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './Foodbox'
import 'bulma/css/bulma.css'

console.log(foods)


class App extends Component {

  state = {
    foods,
    foodForm:false,
    searchText: "",
    showForm:false,
    allFoods: foods

  }

  showFoods = () => {
    let foodList = this.state.foods.map((eachFood,i)=>{
      return <FoodBox key = {i} {...eachFood} />
    })
    return foodList;
  }

  toggleFoodForm = () => {
    this.setState({
      foodForm: !this.state.foodForm
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.toggleFoodForm()
    console.log('submit ', this.state)
    let newFoods = [...this.state.foods]
    newFoods.unshift({
      name:this.state.food,
      calories:null,
      quantity:1,
      image:null
    })

    this.setState({
      foods:newFoods
    })
  }

  handleInputChange = (e) => {
    console.log('change', e.target.name, e.target.value)
    this.setState( { [e.target.name] : e.target.value } ) //food : 'lasagn'
  }

  handleSearch(e) {
    console.log("this.state.searchText", e.target.value);
    this.setState({ searchText: e.target.value });

    // TODO: change the state searchText
  }

  // showFoodForm = () => {
  //     return (
  //     <form onSubmit={this.handleFormSubmit}>
  //       <input onChange={this.handleInputChange} type="text" name="food"/>
  //       <input  type="submit" />
  //     </form>
  //     )

  // }

  toggleAddFoodBars = () =>{
    this.setState({
      showForm:!this.state.showForm
    })
  }

  //displays the search bar using a form and input tags for the user
  showSearchBars = () => {
    if(this.state.showForm){ return(
    <form onSubmit={this.onSubmitClick} >
      <input  type = 'text' onChange={this.manipulateUserSearchInput} name = 'name' placeholder='name'></input>
      <input  type = 'text' onChange={this.manipulateUserSearchInput} name = 'calories' placeholder ='calories'></input>
      <input  type = 'text' onChange={this.manipulateUserSearchInput} name = 'image' placeholder='image'></input>
      <input type = 'submit'></input>
    </form>)
    }
    else {
      return ''
    }
  }

  // changes the state of the search bar when the user types
  manipulateUserSearchInput = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  // what happens when user hits submit after entering in food, calories, and image in search
  onSubmitClick = (e) => {
    e.preventDefault() // prevents the page from refreshing
    let copyFoods = [...this.state.foods]
    copyFoods.unshift({
      name: this.state.name,
      image: this.state.image,
      calories: this.state.calories
      
    })

    this.setState({
      foods: copyFoods
    })
  }

  searchFood = (e) => {
    console.log(e.target.value, )
    let newFoods = [...this.state.allFoods] //made a copy 
    let filteredFoods = newFoods.filter(eachFood=>{ //filtered teh copy 
      return eachFood.name.toLowerCase().includes(e.target.value.toLowerCase())  //piz {name:Pizza} what u type is equal to the name of the food return it 
    })
    this.setState({ 
      foods:filteredFoods //set the state to be the new goods
    })

  }
  

  render() {
    return (
      <div className="App">
         <input onChange = {this.searchFood} type="text" placeholder="Search .... " name="search" />
         {this.showSearchBars()}
        <br></br>
        {/* {this.showFoodForm()} */}
        <br></br>
        <button onClick={this.toggleAddFoodBars}>Add New Food</button>
        

        {this.showFoods()}

      </div>
    );
  }
}


export default App;