import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 import foods from './foods.json';
 
 class App extends Component {
   constructor() {
     super()
     this.state = {
       foods: foods,
       showForm: false
     }
   }

   addNewFood = function (name,cal,imgPath){
       let foodsCopia=[...this.state.foods]
       foodsCopia.push({
         "name": name,
         "calories": cal,
         "image": imgPath,
         "quantity": 0
       })
       this.setState({ ...this.state, foods: foodsCopia })

   }.bind(this)

  

   
 }
 
 export default App;