import React, { Component } from 'react';
import FoodBox from "./components/FoodBox"
import Form from "./components/Form"
import foods from './foods.json'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        search:"",
        foods: foods,
        showfoods: foods,
        formStyle: {
          display: "none"
        },
        pickedFood: [],
        counter: [],
        sumCalories: [],
      }
      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.updateFood = this.updateFood.bind(this);
    }

    updateFood(name, quantity) {
      let foods = this.state.foods.map((food)=> {
        if(food.name === name) food.quantity = parseInt(food.quantity) + parseInt(quantity);
        return food;
      })
      this.setState(foods);
    }

    addHandler = () => {
      if(this.state.formStyle.display === "none"){
        this.setState({
          formStyle: {
          display: "block"
        }}
      )}
    }

  submitHandler = (submit, state) => {
    submit.preventDefault();
    this.state.showfoods.push(state);
    this.setState({
      showfoods: this.state.showfoods,
      formStyle: {
        display: "none"
      }
    })
  }

  handleSearchChange(event) {
    let inputValue= event.target.value;
    this.setState({
        search:inputValue
    })
  }
    
  addFoodHandler = (food, state) => {
    var pickedFoodCopy = [...this.state.pickedFood]
    var counterCopy = [...this.state.counter]
    pickedFoodCopy.push(food)
    counterCopy.push(state.quantity)
    this.setState({
      pickedFood: pickedFoodCopy,
      counter: counterCopy
    })
    this.calculateCalories(food.calories, state.quantity)
  }

  addFoodHandler = (food, state) => {
    var pickedFoodCopy = [...this.state.pickedFood]
    var counterCopy = [...this.state.counter]
    pickedFoodCopy.push(food)
    counterCopy.push(state.quantity)
    this.setState({
      pickedFood: pickedFoodCopy,
      counter: counterCopy
    })  
    this.calculateCalories(food.calories, state.quantity) 
  }

  calculateCalories = (cal, amount) =>{
    var sumCaloriesCopy = [...this.state.sumCalories]
    var calories = cal*amount
    sumCaloriesCopy.push(calories)
    this.setState({
      sumCalories: sumCaloriesCopy
    })
  }

  render() {
    let sum = 0;

    for (let i = 0; i < this.state.sumCalories.length; i++) {
      sum += this.state.sumCalories[i];
    }

    return (
      <div className="page-view">
        <div>
          <h2 className="is-size-2 has-text-weight-bold">IronNutrition</h2>
          <button onClick={this.addHandler}>Add New Food</button>
          <Form style={this.state.formStyle} submitHandler={this.submitHandler} />
          <input className="input" type="text" name="search" value={this.state.search} onChange={this.handleSearchChange} placeholder="Search"/>         
          {this.state.showfoods
            .filter(food =>
            food.name.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((food, index) => (
              <FoodBox
                {...food} 
                updateFood={this.updateFood} 
                key={food.name}
                name={food.name} 
                addFoodHandler={this.addFoodHandler}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
              />
            ))
          }
        </div>
        <div className="d-flex">
          <h2 className="subtitle todaysfood">Today's foods</h2>
          <div className="column content">
            <ul>
              {foods && foods.map((food)=> 
                food.quantity > 0 && <li>{food.quantity} {food.name}(s) = {food.quantity * food.calories}</li>
              )}
            </ul>
          {/* <strong>Total: {sum} cal</strong> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import FoodBox from './components/FoodBox'
// import Form from "./components/Form"
// import foods from './foods.json'
// import 'bulma/css/bulma.css';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       search:"",
//       foods: foods,
//       showfoods: foods,
//       quantity: 0,
//       formStyle: {
//         display: "none"
//       },
//       // ITERATION 5 - 
//       showfoods: foods,
//       formStyle: {display: "none"},
//       pickedFood: [],
//       counter: [],
//       sumCalories: [],
//     }
//     this.handleSearchChange = this.handleSearchChange.bind(this);
//     this.updateFood = this.updateFood.bind(this);
    
//     }
        
//   updateFood(name, quantity) {
//     let foods = this.state.foods.map((food)=> {
//       if(food.name === name) food.quantity = parseInt(food.quantity) + parseInt(quantity);
//       return food;
//     })
//     this.setState(foods);
//   }

//   addHandler = () => {
//     if(this.state.formStyle.display === "none"){
//       this.setState({
//         formStyle: {
//         display: "block"
//       }}
//     )}
//   }

//   submitHandler = (e, state) => {
//     e.preventDefault();
//     this.state.showfoods.push(state);
//     this.setState({
//       showfoods: this.state.showfoods,
//       formStyle: {
//         display: "none"
//       }
//     })
//   }

//   handleSearchChange(event) {
//     let inputValue= event.target.value;
//     this.setState({
//         search:inputValue
//     })
//   }

//   addFoodHandler = (food, state) => {
//     var pickedFoodCopy = [...this.state.pickedFood]
//     var counterCopy = [...this.state.counter]
//     pickedFoodCopy.push(food)
//     counterCopy.push(state.quantity)
//         this.setState({
//       pickedFood: pickedFoodCopy,
//       counter: counterCopy
//     })
//     this.calculateCalories(food.calories, state.quantity)
//   }

//   addFoodHandler = (food, state) => {
//     var pickedFoodCopy = [...this.state.pickedFood]
//     var counterCopy = [...this.state.counter]
//     pickedFoodCopy.push(food)
//     counterCopy.push(state.quantity)    
//     this.setState({
//       pickedFood: pickedFoodCopy,
//       counter: counterCopy
//     })
//     this.calculateCalories(food.calories, state.quantity)
//   }

//   calculateCalories = (cal, amount) =>{
//     var sumCaloriesCopy = [...this.state.sumCalories]
//     var calories = cal*amount
//     sumCaloriesCopy.push(calories)
//     this.setState({
//       sumCalories: sumCaloriesCopy
//     })
//   }


//   render() {
//     let sum = 0;

//     for (let i = 0; i < this.state.sumCalories.length; i++) {
//       sum += this.state.sumCalories[i];
//     }

//     return (
//       <div className="page-view">
//         <div>
//           <h2 className="is-size-2 has-text-weight-bold">IronNutrition</h2>
//           <button onClick={this.addHandler}>Add New Food</button>
//           <Form style={this.state.formStyle} submitHandler={this.submitHandler} />
//           <input className="input" type="text" name="search" value={this.state.search} onChange={this.handleSearchChange} placeholder="Search"/>
//           {this.state.showfoods
//             .filter(food =>
//             food.name.toLowerCase().includes(this.state.search.toLowerCase())
//             )
//             .map((food, index) => (
//               <FoodBox
//                 {...food} 
//                 updateFood={this.updateFood} 
//                 key={food.name}
//                 name={food.name} 
//                 addFoodHandler={this.addFoodHandler}
//                 calories={food.calories}
//                 image={food.image}
//                 quantity={food.quantity}
//               />
//             ))
//           }
//         </div>
//         <div className="d-flex">
//           <div className="column content">
//             <h2 className="subtitle">Today's foods</h2>
//             <ul>
//               {foods && foods.map((food)=> 
//                 food.quantity > 0 && <li>{food.quantity} {food.name}(s) = {food.quantity * food.calories}</li>
//               )}
//             </ul>
//             {/* <strong>Total: {sum} cal</strong> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


// export default App;
