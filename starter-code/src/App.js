import React, { Component } from 'react';
 import logo from './logo.svg';
 import './App.css';
 import foods from './foods.json';



class App extends Component {
  
  state = {
    foods
   };
  
// componentWillMount(){
// let list = [];
// for (var i = 0; i < 5; i++) {
//   list.push(foods[i])
// }
// this.setState({foods: list})
// }


  render() {
    const {foods} = this.state
    return (
      <div>
       {foods.map((food,index) =>{
         return <FoodBox key={index} {...food} />
       })}
      </div>
    );
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

  

   
 
 
 export default App;