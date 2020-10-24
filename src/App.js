
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
//import FoodBox from './component/FoodBox';



import React, { Component } from 'react'
import AddNewFood from './component/AddNewFood';
import Search from './component/Search';
import FoodItem from './component/FoodItem';


export default class App extends Component {
 
  
  state = {
    
    foods:foods,
    showForm: false,
    searchTerm:null,
   
  }

  toggleVisibility = () => {
    if(this.state.showForm === false){
      this.setState({showForm: true});
    }
    else {
      this.setState({showForm: false});
    }
  }

  addFoodItem = foodItem => {
    const foodCopy = [...this.state.foods];
    foodCopy.push(foodItem);
    this.setState({foods: foodCopy})

  };
  handleSearch= searchValue => {
    this.setState({
      searchTerm: searchValue
    })
  }


  
 

  
  
  render() {
    
    const filteredList = this.state.foods.filter(item => {
      if(this.state.searchTerm===null){
        return true;
      } else {
        return item.name.toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
      }
    })
   
   
   
    return (
     
     
     <div>
     <Search handleSearch={this.handleSearch}/>
     
        
        {/* {this.state.foods.map((food,key) =><FoodBox 
      key={key}
      name={food.name} calories={food.calories} image={food.image} foods={filteredList}/>)}   */}
     
     
     {this.state.showForm ? <AddNewFood 
     addFoodItem={this.addFoodItem}
     toggleVisibility={this.toggleVisibility}/>
     :
     <button onClick={this.toggleVisibility}>Add more</button>}

     <FoodItem foods={filteredList}/>


      </div>
      
    
    
    
    )
  }
}





