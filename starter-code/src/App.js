import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './Components/FoodBox';
import Form from './Components/Form';
import SearchBar from './Components/SearchBar';
import TodayFood from './Components/TodayFood';
import foods from './foods.json';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      foodList: foods,
      filterFood: [],
      todayFood: [],
      newName: "",
      newCalories: "",
      foodToSearch: ""
    }
  }

  updateTheValue = (e) => {
    e.preventDefault();

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
}

searchFood = (e) => {
  console.log(e.currentTarget.value)

  this.setState({
    foodToSearch: e.currentTarget.value
  })

  let newList = [...this.state.foodList]

  let filterList = newList.filter(eachFood => {
   return eachFood.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()) === true
  
  })

  this.setState({
    filterFood: filterList
  })

}


displayTheFood = () => {
  if(this.state.foodToSearch === ""){
    return this.state.foodList.map((eachFood, index) =>{
      return(
      <FoodBox
      key={index}
      sendToday={this.addToday}
      calculator={this.calculateQty}
      {...eachFood}
      />
      )
    })
  }else{
    return this.state.filterFood.map((eachFood, index) =>{
      return(
      <FoodBox
      key={index}
      sendToday={this.addToday}
      calculator={this.calculateQty}
      {...eachFood}
      />
      )
    })
}
}

displayTodayFood = () =>{
  return this.state.todayFood.map((eachTodayFood, index) => {
    console.log(eachTodayFood)
    return <li key={index}>{eachTodayFood.name}  {eachTodayFood.calories * eachTodayFood.quantity} Cal</li>
  })

}
addTheFood = (e) => {
  e.preventDefault();
   let newList = [...this.state.foodList];

   let newAnimal = {name: this.state.newName, calories: this.state.newCalories}

   newList.push(newAnimal);

   this.setState({
     foodList: newList,
     newName: "",
     newCalories: "",
   })


}

calculateQty = (e) => {
 // e.preventDefault();
  //  return e.currentTarget.value;
   console.log(e.currentTarget.value);
}

addToday = (choseOne) => {
  // let quantity = this.calculateQty();
  // console.log("The quantity is " + quantity);
 console.log(choseOne);
  // console.log(choseOne.name);
  let newTodayFood = {name: choseOne.props.name, calories: choseOne.props.calories, quantity: choseOne.state.inValue}
  let newTodayList = [...this.state.todayFood]


  // newTodayList.forEach(eachToday => {
  //   for(let key in eachToday){
  //     if(eachToday.hasOwnProperty(key)){
  //       console.log("The Key is " + key)
  //       console.log("And value " + eachToday[key])
  //     }
  //   }
  // })

  // let test = newTodayList.map(theFoodToPass => {
  //   return theFoodToPass.name
  // }).indexOf(choseOne.name);
  
  // if(test >= 0){
  //   return test + "Hello"
  // }else{
  newTodayList.push(newTodayFood);

    this.setState({
      todayFood: newTodayList
    })
  // }


}

  render(){
    return (
      <div className="App">
      <h1>IronNutrition</h1>
      <div>
      <SearchBar searchTheFood={this.searchFood}/>
      </div> 
      <span className="FoodBoxList">
      {this.displayTheFood()}
      </span>
      <span>
      <TodayFood todayList={this.displayTodayFood()}/>
      </span>
      <Form addFood={this.addTheFood} update={this.updateTheValue} />
      </div>
      
    );
  }
  
}

export default App;