import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './foods.json'
import FoodBox from './componets/FoodBox/FoodBox';
import Add from './componets/Add/Add';
import Search from './componets/search/Search';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      allfoods: foods,
      SearchBar:'',
    }
  }

  getFoods(){
    if(this.state.SearchBar ===''){
      return this.state.allfoods.map((eachFood,i)=>{
          return(
      <FoodBox 
      key={i} 
      name = {eachFood.name}
      image = {eachFood.image}
      calories = {eachFood.calories}
       />
            )
    })
  }else {
    const newFood = this.state.allfoods.filter( (food) => {
      return food.name.includes(this.state.SearchBar)
    })

    return newFood.map ( (food) => <FoodBox {...food} />)
//      return this.state.allfoods.filter((eachFood,i)=>{
// // return eachFood.includes(this.state.SearchBar)
// return(
//   <FoodBox 
//   key={i} 
//   name = {eachFood.name}
//   image = {eachFood.image}
//   calories = {eachFood.calories}
//    />

// )

// })
  }

}


addNewFood = (ev, newName, newCalories, newImage) =>{
  ev.preventDefault();
  let newFood = {};
  newFood.name = newName;
  newFood.calories = newCalories;
  newFood.image = newImage;

  let allthefoods = [...this.state.allfoods];
  allthefoods.unshift(newFood);


  this.setState({allfoods: allthefoods})
}
 

Searching = (ev) =>{
this.setState({
  SearchBar:ev.target.value
})

}

  render() {
    return (
      <div className="App">
      <Search change= {this.Searching} />
      <Add addNewFood = {this.addNewFood}/>
      {this.getFoods()}
      </div>
    );
  }
}

export default App;
