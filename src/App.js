import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood'
import SearchBar from './components/SearchBar'
import TotalFood from './components/TotalFood'

class  App extends React.Component {
  state = {foods, foodtally: []}

  handleAddFood = (food) => {
    const newFoodList = [...this.state.foods, food]
    this.setState({foods: newFoodList})
  }

  handleFoodSearch = (search) =>{
    if(search !== ''){
      const currentFood = [...foods]
      //loop through array, if search value is in name then bring it back.
      const searchMatch = currentFood.filter(el => (el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1))
      this.setState({foods:searchMatch})
    }else{
      this.setState({foods})
    }
   
  }

  handleFoodTally = (FoodQuantity) =>{
    const newTally = [...this.state.foodtally]

    const result = newTally.findIndex(({item})=> item === FoodQuantity.item)
    if(result > -1){
      newTally[result].quantity = parseInt(newTally[result].quantity) + parseInt(FoodQuantity.quantity)
    }else{
      newTally.push(FoodQuantity) 
    }

    
    this.setState({foodtally: newTally})
  }
  
  render(){
    const foodList = this.state.foods.map( element => {
      return <FoodBox key={element.name} food={element} FoodTally={this.handleFoodTally}/>
    })
  
    return (
      <div className="App">
        <SearchBar filterFood = {this.handleFoodSearch} />
        <AddNewFood addFood={this.handleAddFood} />
        <TotalFood  foodItems={this.state.foodtally}/>
        {foodList}
        
      </div>
    );
  }
  }
  

export default App;
