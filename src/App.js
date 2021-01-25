import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddNewFood from './components/AddNewFood'
import SearchBar from './components/SearchBar'

class  App extends React.Component {
  state = {foods}

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
  
  render(){
    const foodList = this.state.foods.map( element => {
      return <FoodBox key={element.name} food={elgement}/>
    })
  
    return (
      <div className="App">
        <SearchBar filterFood = {this.handleFoodSearch} />
        <AddNewFood addFood={this.handleAddFood}/>
        {foodList}
        
      </div>
    );
  }
  }
  

export default App;
