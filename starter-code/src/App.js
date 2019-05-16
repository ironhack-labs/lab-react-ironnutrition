import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';
import Calories from './components/Calories'

class App extends Component {

  state={
    foods:foods,
    food: {},
    add:true,
    searchWord:'',
    find: foods,
    added:{},
    total_calories: 0
  };
  
  handleChangeSearch = e => {
  let {search, find, foods} = this.state;
  search = e.target.value;
  let enc = foods.filter(function (elemento) {
  if(elemento.name.toUpperCase().indexOf(search.toUpperCase()) > -1) 
  {return elemento}
  });
  find = enc;
    this.setState({search, find, foods});
  };

  newFood =e=>{
    e.preventDefault();
    let {add,food} = this.state;
    add = false;
    this.setState({add})
  }

  hCnewFood =e =>{
    const {food} = this.state;
    let field = e.target.name;
    food[field] = e.target.value;
    this.setState({food});
  }

  submitNewFood =e =>{
    e.preventDefault();
    let {food,add,foods,find} = this.state;
    add = true;
    let field = e.target.name;
    food[field] = e.target.value;
    foods.push(food);
    food ={}; // Esta mamada no reinicia sin esto!!!!
    this.setState({food,add,foods,find}); 
  }

/*
  addComida =e =>{
   // e.preventDefault();
    let {total_calories,added}= this.state;
    let field = e.target.name;
     added[field] = e.target.value;
     console.log('domingo',this.state.food);
     total_calories = total_calories + (added.quantity * added.calories);
     this.setState({total_calories, added})
  }
*/
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IronNutrition</h1>
        </header>
        <div>
Search:
      <SearchBar handleChangeSearch={this.handleChangeSearch} search={this.state.search}/>
<div className='columns'>
        <div className='coliumn'>
        {this.state.find.map((f,index) => <FoodBox key={index} props = {this.state.find[index]} addComida ={this.addComida}/>)}
        </div>
          <div className='column'>
          <Calories added={this.state.added} total_calories = {this.state.total_calories}/>
          </div>

</div>          
   {this.state.add ? <button onClick ={this.newFood}> New Food </button>
   :<FoodForm handleChange={this.hCnewFood} food={{}} submitNewFood={this.submitNewFood}/>}
   </div>       
      </div>
    );
  }
}

export default App;
