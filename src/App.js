import React from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css'
import Foodbox from './components/Foodbox'
import Search from './components/Search'

class App extends React.Component {
  state = { 
    foods: foods,
    showForm: false,
    name: '',
    calories: undefined,
    quantity: undefined,
    image: '',
    search: '',
  }

  



  
  handleForm = () => {
    this.setState({showForm: true});
  }

  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  }

  createFood = (newFood) => {
    const newFoods = [newFood, ...this.state.foods];
    this.setState({foods: newFoods})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {name: this.state.name,
      calories: this.state.calories, 
      quantity: this.state.quantity }
    
    this.createFood(newFood);
    this.setState({showForm: false, 
      name:'', 
      calories:undefined, 
      quantity:undefined})
  }

  handleSearchResults = (search) =>{
    const searchFoods = [...this.state.foods]
  }

  render(){
  return (
    <div className="App">
      <Search />
      <button onClick={this.handleForm}>Add New Food</button>
      {this.state.showForm 
      ? (<form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleInput} value={this.state.name}/>
            <br/>
            <label>Image</label>
            <input type="text" name="image" onChange={this.handleInput} value={this.state.image}/>
            <br />
            <label>Calories</label>
            <input type="number" name="calories" onChange={this.handleInput} value={this.state.calories}/>
            <br />
            <label>Quantity</label>
            <input type="number" name="quantity" onChange={this.handleInput} value={this.state.quantity}/>
            <button>Submit</button>
          </form>
          ) 
      : null}
      {this.state.foods.map((oneFoodItem) => {
       return  <Foodbox {...oneFoodItem}/>
      })}
    </div>
  );
    }
}
export default App;