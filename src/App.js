import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox'
import CreateFood from './CreateFood'

class App extends React.Component{
  state = {
    visible:false
  }

  displayForm = (e) => {
    e.preventDefault()
    this.setState({visible:true}) 
  }

  render(){
  return (
    <div className="App">
      <h1 className='title'>IronNutrition</h1>
      <button onClick={this.displayForm}>Add New Food</button>
      {this.state.visible && <CreateFood/>}
      <div>
        <input type="text" className="input search-bar" name="search" placeholder="Search" value=""/>
      </div>     
      {foods.map((food, index) => {
        return <FoodBox key={index} food={food}/>
        })}
      </div>
  )}
}

export default App;
