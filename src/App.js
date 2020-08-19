import React from 'react';
//import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import TodaysFood from './components/TodaysFood'


class App extends React.Component {

  state = {
    foodList: foods,
    search: false
  }
  handleAddFood = (event) =>{
    event.preventDefault();
    let inputs = event.currentTarget
    this.setState({
      foodList: [{name: inputs.name.value, calories: inputs.calories.value, image: inputs.image.value, quantity:0}, ...this.state.foodList],
      search: false
    })
  }
  handleSearch = (e) =>{
    let currentSearch = e.currentTarget.value;
    let filtered = foods.filter((item)=>{
      return item.name.toUpperCase().match(currentSearch.toUpperCase());
    })
    this.setState({
      foodList: filtered
    })
  }
  handleAddFoodToday = (id, q) =>{
    let toModify = [...this.state.foodList];
    toModify[id].quantity = q;
    this.setState({
      foodList: toModify
    })
  }
  handleDelete = (id) =>{
    let toDelete = [...this.state.foodList];
    toDelete.splice(id,1);
    this.setState({
      foodList: toDelete
    })
  }
  render(){
    return (<div style = {{display: 'flex',flexDirection: 'column', alignItems:'space-between'}}>
    {!this.state.search && <button onClick = {() => {this.setState({search: true})}}>Add a new Food</button>}
    { this.state.search && <AddFood onAdd = {this.handleAddFood}/>}
    <input  
            width = {{width: '200px'}}
            type='text' 
            onChange = {this.handleSearch}
            placeholder = 'Search for an item'>
            
    </input>
    <div style ={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
      <div style = {{width: '50%'}}>
        {
            this.state.foodList.map((item,i)=>{
              return <FoodBox food = {item} key={i} id={i} onAddToday = {this.handleAddFoodToday} onDelete ={this.handleDelete}/>
          })
        }
      </div>
      <div style={{textAlign: 'center'}}>
        <TodaysFood foodList = {this.state.foodList}/>
      </div>
    </div>
    </div>)
  }
}

export default App;
