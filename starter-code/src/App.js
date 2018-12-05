import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Food from './Food'
// Array :
import foods from './foods.json'



class App extends Component {
  state ={
    listOfFood : foods
  }

  AddProduct(addedProduct){

    this.setState({
      listOfFood: [...this.listOfFood, addedProduct]
    })
    
    console.log(addedProduct)

  }



  render() {
    return (
      <div className="App">
        
      <button onClick = {() =>{this.AddProduct()}}>Add new produc</button>  

      {this.state.listOfFood.map((eachFood, Index) =>{
        return (
          
            

            <div key = {Index}>
            <Food imagePic = {eachFood.image}   foodName = {eachFood.name}  numberOfCal = {eachFood.calories} />
            </div>
          


        )
      })}

      
     
      </div>
    );
  }
}

export default App;
