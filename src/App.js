import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFood from './components/AddFood'
import TodaysFood from './components/TodaysFood'

class App extends React.Component {
   state ={
    allFoods : foods,
    foods : foods,
    todaysFood : [],
    showForm : false
   }

   handleAddItem = (event) => {
    event.preventDefault()
    let name = event.target.name.value
    let calories = event.target.calories.value
    let image = event.target.image.value
    this.setState({
      allFoods : [...this.state.foods,{name:name, calories:calories, image:image,quantity: 0, }],
      showForm : !this.state.showForm
    })
  }

  showForm=()=>{
    this.setState({
      showForm : !this.state.showForm
    })
  }

  handleFilter=(event)=>{
      let name = event.target.value
      console.log(event.target.value)
      let newItems = this.state.allFoods.filter((item)=>{
          return item.name.startsWith(name)
      })

      this.setState({
        foods : newItems,
      })
  }

  handleTodaysFood=(quantity,name)=>{
    let index = foods.findIndex((elem)=>{
      return elem.name === name 
    })
    console.log(quantity)
    console.log(index)
    let newFoods = [...this.state.todaysFood,this.state.foods[index]]
    newFoods[newFoods.length-1].quantity = quantity
    console.log(newFoods)
    this.setState({
      todaysFood : newFoods
    })
  }
  render(){
    return (
          <>
            <button onClick={this.showForm}>Add New Food</button>
          {this.state.showForm?<AddFood 
          onAddItem = {this.handleAddItem}
          onFilter = {this.handleFilter}
          />: ''}
          <div className='columns'>
          <div className='column'>
            {this.state.foods.map((food,index)=>(
                <FoodBox 
                calories = {food.calories}
                name = {food.name}
                image = {food.image}
                quantity = {food.quantity}
                todaysFood = {this.handleTodaysFood}
                key = {index}
                />
                
            ))}
          </div>

        <div className='column'>
          <h2 style={{color : 'red'}}>TodaysFood</h2>
          {this.state.todaysFood.map((food,index)=>(
              <TodaysFood 
              calories = {food.calories}
              name = {food.name}
              quantity = {food.quantity}
              key = {index}
              />
              
          ))}
        </div>
        </div>
        </>
      )  
  }

}

export default App;