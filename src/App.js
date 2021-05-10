import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import Form from './Form/Form';
import Search from './Search/Search';

class App extends React.Component {
  state = {
    foodsArr: foods,
    showForm: false,
    todayFoods: [],
    quantity: 0
  
  }
  toggleForm() {
    this.setState({ showForm: !this.state.showForm })
  }
  // searchFood(query) {
     
  //   return this.state.foodsArr.map((food) => {
      
  //     return (
        
  //       food.match({/ query /})
  //     );
  //   });
  findFood(query) {
    console.log(query)
    
      
            return this.setState({foodsArr: this.state.foodsArr.filter(food => food.name.includes(query))})
            
           
       
  }
  addToday = (id, quantity) => {
    
    let newArray = [... this.state.todayFoods]
    for (let i = 1; i <= quantity; i++){
      
      newArray.push(this.state.foodsArr[id]);
    }
    
    this.setState({ todayFoods: newArray });
    this.setState({ quantity: quantity });
    
  }
  displayToday() {
    for (let i = 0; i < this.state.todayFoods.length; i++){
      for (let j = i + 1; j < this.state.todayFoods.length; j++){

      }
    }
    return (
      
      this.state.todayFoods &&
      this.state.todayFoods.map((food) => {
        return (
          <div>
            <li>
              { this.state.quantity}{food.name} = {food.calories}
            </li>
          </div>
        );
      })
    );
  }
  addFood(food) {
    let newArray = [...this.state.foodsArr]
    newArray.push(food)
    this.setState({ foodsArr: newArray });
  }
   displayFoods() {
    return this.state.foodsArr.map((food, index) => {
      return (
        <div>
          <FoodBox
            id ={ index}
            addToday = {this.addToday}
            food={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
          />
        </div>
      );
    })
  }
  render() {
     return (
       <div className="App">
         <h1>Today's foods</h1>
         {this.displayToday()}
         <Search findFood={(query) => this.findFood(query)} />
         <button onClick={() => this.toggleForm()}>
           {this.state.showForm ? 'Hide form' : 'Show form'}
         </button>
         {this.state.showForm && (
           <Form
             toggleForm={() => this.toggleForm()}
             addFood={(food) => this.addFood(food)}
           />
         )}
         {this.displayFoods()}
       </div>
     );
  }
 
}

export default App;
