import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/foodbox/FoodBox'
import Form from './components/form/Form'
import Search from './components/search/Search'
import List from './components/list/List'
import foods from './foods.json'

class App extends Component {
  
  state = {
    foods : [...foods],
    addedByUser : [],
    addedToList: []
  }

  addFoodBox= (newBox) => {
    const {foods, addedByUser} = this.state
    this.setState({
      foods : [...foods, newBox],
      addedByUser: [...addedByUser, newBox]
    });
  }

  filterFoodBoxList= (searchValue) => {
    const { addedByUser} = this.state;
    const totalFood = [...foods, ...addedByUser];
    const filteredFoods = totalFood.filter(food => food.name.includes(searchValue));  
    this.setState({
      foods : filteredFoods
    });
  }

  addTolist =  (name, calories, quantity) => () => {
    let addedToList = [...this.state.addedToList];
    
    //check if element is in array to avoid duplications s
    let found = false;
    for(let i = 0; i < addedToList.length; i++) {
      if (addedToList[i].name === name) {
        addedToList[i].quantity = quantity;
        if (addedToList[i].quantity === 0) {
          addedToList.splice(i, 1);
        } 
        found = true;
        break;
      }
    }

    found === false && quantity !==0 ?
      this.setState({
        addedToList : [ ...addedToList, {name, calories, quantity} ]
      })
    :
      this.setState({
        addedToList : [ ...addedToList ]
      });
  }
  
  render() {
    const {foods, addedToList} = this.state;
    const addToList = this.addTolist;
    return (
      <div>
        <Form addFoodBox={this.addFoodBox} addToList={this.addToList}/>
        <Search filterFoodBoxList={this.filterFoodBoxList} />
        {foods.map((food, index)=> {
            const {name, calories, image, quantity} = food;
            return <FoodBox key={index} name={name} calories={calories} image={image} quantity={quantity} addToList={addToList}/>
        })}
        {addedToList.length > 0 && 
          <List addedToList={addedToList}></List>
        }
      </div>
    );
  }
}

export default App;
