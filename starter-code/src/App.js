import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './components/Foodbox'
import AddButton from './components/AddButton'
import TodaysFood from './components/TodaysFood.js'
import Form from './components/Form'
import Search from './components/Search'



class App extends Component {
  
  state = {
    foodData : foods,
    savedData : [],
    formData : { FormFunc :  () => {
      const a = this.formData
      this.state.formData.showForm = true
      this.setState({a})
      },
      showForm : false,
    },
    
  };

  addFood = (data)  => {
    this.state.foodData.push(data)

    this.state.formData.showForm = false,
    this.setState({foods});

  }

  searchFood = (data) => {
    const find = data; 
    const list = this.state.foodData;
    
    this.setState({
      foodData : foods.filter(list => list.name.toLowerCase().includes(find))
     
    })
  }

  saveFood = (data) => {

    let arr = this.state.savedData 
    this.state.savedData.push(data)
    this.setState({
      arr 
     
    })


  }

  render() {
    
   
    return (
      <div>
     <AddButton form = {this.state.formData } food = {this.state.foodData } addFood = {this.addFood}/>
     <Search food = {this.state.foodData } search = {this.searchFood}/>
     <div className="columns"> 
      <div className="column" > <Foodbox  food = {this.state.foodData } save = {this.saveFood} savedData = {this.state.savedData} ></Foodbox> </div>
      <div className="column" >  <TodaysFood food = {this.state.foodData} save = {this.saveFood} savedData = {this.state.savedData} ></TodaysFood> </div>
     </div>

      </div>
    );
  }
}

export default App;
