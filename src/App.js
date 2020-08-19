import React from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import MenuDay from './components/MenuDay';
import AddFood from './components/AddFood';
import Searchbar from './components/Searchbar';
import './App.css';
import 'bulma/css/bulma.css';
import ButtonAddForm from './components/ButtonAddForm';


class App extends React.Component{

  constructor(props){
    super(props)
    this.state ={
        foods: foods,
        filteredFood: foods,
        condition:false,
        todayFood:[]
    }
}

 // function to add new food
 handleAddFood=(event)=>{
   event.preventDefault()
   let newFood = event.currentTarget.food.value
   let newCalories = event.currentTarget.calories.value
   let newImage = event.currentTarget.urlImg.value
   let newFoods =[{name:newFood,calories:newCalories,image:newImage},...this.state.foods]
   this.setState({
     foods:newFoods,
     filteredFood:newFoods

   })

 };
 hideOrShow=()=>{
   this.setState({condition:!this.state.condition})
 };

 handleSearch=(event)=>{
   console.log(event.currentTarget.value)
   let foodToSearch = event.currentTarget.value
   let clonedFoods = this.state.foods.filter((food)=>{
     return food.name.toLowerCase().includes(foodToSearch.toLowerCase())
   })
   this.setState({
     filteredFood:clonedFoods
   })

 };

 handleAdding=(a, b, c)=>{
   console.log(a, b, c)
  this.setState({
      todayFood: [a,b,c]
  })
}



  render (){
    return (
      <div>

        {this.state.todayFood.map((values,i)=>{
          return <MenuDay
          key={'x'+i}
          values={values}
          />
        })
        }
      
        <Searchbar onSearch={this.handleSearch}/>
        {this.state.condition ? <AddFood onAdd={this.handleAddFood} /> :<ButtonAddForm hideOrShow={this.hideOrShow}/>}
        {this.state.filteredFood.map((food,i)=>{
          return <FoodBox 
          key={i}
          food={food}
          trigger={this.handleAdding}
          />
        })
        }
      
      </div>
    );
  }
}

export default App;
