import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import MyFoods from './components/MyFoods'

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu : foods,
      myFoodList : [],
      matchItems: '',
      totalCalories : 0
    }
    console.log(this.state.menu)
  }

  // eventHandler = (event) => {
  //   const menuCopy = [...this.state.menu];
  //   menuCopy.filter((foodItem)=>{foodItem.includes()})
  // }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({[name]: value});
  }

  addFoodHandler = (theFood) => {
    const menuCopy = [...this.state.menu];
    menuCopy.push(theFood);
    this.setState({
      menu: menuCopy
    })
  }

  deleteFoodHandler = (foodIndex) => {
    const foodListCopy = [...this.state.menu];
    foodListCopy.splice(foodIndex, 1);
    this.setState({
      menu: foodListCopy 
    })
  }

  addMyFoodHandler = (foodIndex) => {
    const myFoodListCopy = [...this.state.myFoodList];
    const foodMenuCopy = [...this.state.menu];
    const totalCaloriesCopy = {cal: this.state.totalCalories}
    if(this.state.myFoodList < 1){
      myFoodListCopy.push(foodMenuCopy[foodIndex]);
      console.log("Starting My List");
      myFoodListCopy[0].quantity++;
      //this.state.totalCalories+foodMenuCopy[foodIndex].calories
      totalCaloriesCopy.cal = this.state.totalCalories + foodMenuCopy[foodIndex].calories
      this.setState({
        myFoodList: myFoodListCopy,
        totalCalories : totalCaloriesCopy.cal  
      })
      return "lol"
    }

    for (let i = 0; i < myFoodListCopy.length; i++) {
      console.log("looping")
      if (myFoodListCopy[i].name === foodMenuCopy[foodIndex].name) {
        console.log("it's adding " + myFoodListCopy[i].quantity);
        myFoodListCopy[i].quantity++;
        console.log(myFoodListCopy[i].quantity);
        break;
      } else if (i === myFoodListCopy.length-1) {
        console.log("it's pushing");
        myFoodListCopy.push(foodMenuCopy[foodIndex]);
        myFoodListCopy[myFoodListCopy.length-1].quantity++;
        console.log(myFoodListCopy);
        break;
      }
    }
    totalCaloriesCopy.cal = this.state.totalCalories + foodMenuCopy[foodIndex].calories
    this.setState({
      myFoodList: myFoodListCopy, 
      totalCalories : totalCaloriesCopy.cal
    })
  }  

  deleteMyFoodHandler = (foodIndex) => {
    const myFoodListCopy = [...this.state.myFoodList];
    const totalCaloriesCopy = {cal: this.state.totalCalories}
    totalCaloriesCopy.cal = this.state.totalCalories - myFoodListCopy[foodIndex].calories * myFoodListCopy[foodIndex].quantity
    myFoodListCopy.splice(foodIndex, 1);
    this.setState({
      myFoodList: myFoodListCopy,
      totalCalories : totalCaloriesCopy.cal 
    })
  }  

  filteredMenu;

  render() {
    
    this.filteredMenu = this.state.menu.filter(theFood => theFood.name.toLowerCase().includes(this.state.matchItems.toLowerCase()))
    return (
      <div className="App">
        <div className="columns">
          <div className="column is-four-fifths">
          <h2>Menu</h2>
          <input type="text" name="matchItems" value={this.state.matchItems} onChange={(e) => this.handleChange(e)}></input>
            <FoodForm addTheFood={this.addFoodHandler} />
            {
              this.filteredMenu.map((foodItem, index) => {
                return <FoodBox key={index} {...foodItem} clickToDelete={() => this.deleteFoodHandler(index)} 
                clickToAdd={()=> this.addMyFoodHandler(index)} />
              })
            }
          </div>
          
          <div className="column">
          <h2>Today's Foods</h2>
          <p>Total Calories: {this.state.totalCalories}</p>
            {
              this.state.myFoodList.map((foodItem, index) => {
                return  <MyFoods key={index} {...foodItem} clickToDelete={() => this.deleteMyFoodHandler(index)} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
// {  
//   this.state.myFoodList.map((foodItem, index) => {
//     return <FoodBox key={index} {...foodItem} clickToDelete={() => this.deleteFoodHandler(index)} />
//   })
// }

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       menu : foods,
//       myFoodList : [],
//       matchItems: ''
//     }
//     console.log(this.state.menu)
//   }

//   // eventHandler = (event) => {
//   //   const menuCopy = [...this.state.menu];
//   //   menuCopy.filter((foodItem)=>{foodItem.includes()})
//   // }

//   handleChange(event) {
//     let { name, value } = event.target;
//     this.setState({[name]: value});
//   }

//   addFoodHandler = (theFood) => {
//     const menuCopy = [...this.state.menu];
//     menuCopy.push(theFood);
//     this.setState({
//       menu: menuCopy
//     })
//   }

//   deleteFoodHandler = (foodIndex) => {
//     const foodListCopy = [...this.myFoodList];
//     foodListCopy.splice(foodIndex, 1);
//     this.setState({
//       myFoodList: foodListCopy 
//     })
// }

//   filteredMenu;

//   render() {

//     return (
//       <div className="App">
//         <input type="text" name="matchItems" value={this.state.matchItems} onChange={(e) => this.handleChange(e)}></input>

//       <FoodForm addTheFood={this.addFoodHandler} />
//       {
//         this.filteredMenu.map((foodItem, index) => {
//           return <FoodBox key={index} {...foodItem} clickToDelete={() => this.deleteFoodHandler(index)} />
//         })
//       }
//       </div>
//     );
//   }
// }