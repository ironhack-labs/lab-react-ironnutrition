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
      newImage: "",
      foodToSearch: "",
      found: false
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
      image={eachFood.image}
      name={eachFood.name}
      calories={eachFood.calories}
      sendToday={this.addToday}
      calculator={this.calculateQty}
      // {...eachFood}
      />
      )
    })
  }else{
    return this.state.filterFood.map((eachFood, index) =>{
      return(
      <FoodBox
      key={index}
      image={eachFood.image}
      name={eachFood.name}
      calories={eachFood.calories}
      sendToday={this.addToday}
      calculator={this.calculateQty}
      // {...eachFood}
      />
      )
    })
}
}

displayTodayFood = () =>{
  return this.state.todayFood.map((eachTodayFood, index) => {
    console.log(eachTodayFood)
    return <li key={index}>{eachTodayFood.name}  {eachTodayFood.total} Cal</li>
  })

}
addTheFood = (e) => {
  e.preventDefault();
   let newList = [...this.state.foodList];

   let newAnimal = {name: this.state.newName, calories: this.state.newCalories, image: this.state.newImage}

   newList.push(newAnimal);

   this.setState({
     foodList: newList,
     newName: "",
     newCalories: "",
     newImage: ""
   })


}

addToday = (choseOne) => {
  let flag = false;

//  console.log(choseOne);
  // console.log(choseOne.name);
  let newTodayFood = {name: choseOne.props.name, calories: choseOne.props.calories, quantity: choseOne.state.inValue, total: (choseOne.props.calories * choseOne.state.inValue)}
  let newTodayList = [...this.state.todayFood]

//CHECK REPEATED FOOD IN TODAY LIST
  newTodayList.forEach(eachToday => {
    console.log(eachToday)
    for(let key in eachToday){
    if(eachToday[key] === newTodayFood.name){
      flag = true
      eachToday.total += (newTodayFood.calories * newTodayFood.quantity)
      break;
    }else{
     
    }
  

    }
   
  })

  if(flag === false){
    newTodayList.push(newTodayFood);
  }

  this.setState({
    todayFood: newTodayList
  })
   
  
  // let test = newTodayList.map(theFoodToPass => {
  //   return theFoodToPass.name
  // }).indexOf(choseOne.name);
  
  // if(test >= 0){
  //   return test + "Hello"
  // }else{
  
  
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