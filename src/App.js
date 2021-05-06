import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Search from './Search'


import FoodBox from './FoodBox'

class App extends React.Component {
  state = {
    allFoods: foods,
    copyAllFoods: foods
}
filterFoods(event){
  const {value} = event.target
  const filteredFood = this.state.allFoods.filter((food)=>{
    return food.name.toLowerCase().includes(value.toLowerCase())
  })

  this.setState({...this.state, copyAllFoods: filteredFood})
}

  render(){
    return (
      <div className="App">
      <Search filterFoods={(event) => this.filterFoods(event)} />
       <FoodBox food={this.state.copyAllFoods}/>
      </div>
    )
  }
}

export default App;
