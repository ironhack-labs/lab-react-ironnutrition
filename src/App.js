import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import List from './components/List'



class App extends React.Component {

  state = {
    foods: foods,
    showSection: false,
    filteredFoods: foods,
    foodList:[]
  }

  handleAddForm = () => {
    this.setState({
      showSection: !this.state.showSection 
    })
  }

  handleAddFood = (event) => {
    event.preventDefault()
    console.log('Item is ' + event.target.name.value)
    let name = event.target.name.value
    let calories = event.target.calories.value
    let image = event.target.image.value
    event.target.name.value = ''
    event.target.calories.value = ''

    this.setState({
      foods: [...this.state.foods, {name: name, calories: calories, image: image}],

      filteredFoods: [...this.state.foods, {name: name, calories: calories, image: image}]
    })

  }

  handleFilter = (event) => {

    let input = event.target.value
    let newFoods = this.state.foods.filter((food) => {
        return food.name.startsWith(input)
    })

    this.setState({
      filteredFoods: newFoods
    })

  }


  handleAddToList = (food, quantity) => {
    let newList = [...this.state.foodList]
      this.state.foodList.push(food)
      this.setState({
        foodList: newList
      })
      


    

  }


  render() {

    return (

      <>

      <AddFood
        addForm = {this.handleAddForm}
        showSection = {this.state.showSection}
        addFood = {this.handleAddFood}
        onFilter = {this.handleFilter}
      />

      <div class="columns">

        <div class="column">

            {

                this.state.filteredFoods.map((food, index) => {
                return <FoodBox
                key={index}
                food={food}
                name={food.name}
                calories={food.calories}
                imgUrl={food.image}
                quantity={food.quantity}
                addToList={this.handleAddToList}
      
                />
                })
            }

        </div>

            <div class="column">
              <List 
                foodList={this.state.foodList}
              />
            </div>
        

      </div>
        
          
       </>
      
    );
  };
  
};

export default App;
