import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './component/FoodBox';
import AddNewFood from './component/AddNewFood';
import SearchBar from './component/SearchBar';


class App extends React.Component {
  state = {
    active: false,
    food: foods
  };

  toggleForm = () => {
    this.setState({
      active: !this.state.active
    });
  };

  createNewMeal = (food) => {
    console.log(food);
    this.setState({
      food: [food, ...this.state.food]
    });
    this.toggleForm();
  };

    render() {
      return (
    <div className="App">
      <h1>IronNutrition</h1>
      <SearchBar />
      <div>
           <button onClick={this.toggleForm}>Create new meal</button>
           {this.state.active && (
             <AddNewFood onCreateNewMeal={this.createNewMeal} />
           )}

           {this.state.food.map((food) => (
             <div key={food.image}>
               <FoodBox food={food} />
             </div>
           ))}
         </div>
       </div>
     );
   }
};

export default App;
