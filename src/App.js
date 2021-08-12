import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';

class App extends React.Component {


  state = {
    foods: foods,
    onClick: false,
  };

  handleAddFood = () =>

  this.setState({
    onClick : !this.state.onClick
  })
  //handleAddFood = (food) => {
  //  this.setState({
  //    foods: [...this.state.foods, food]
  //  });

  
  //}



  render () {
    return (

      
    <div className="App">
       <h1> IronNutrition </h1>
      <button onClick={this.handleAddFood}> Add New Food </button>

      {this.state.onClick ? <FoodForm /> : null}




{/*search bar to update list of all meals */}





    {/* mapped food array, display FoodBox elements inside -VAR- foods*/}
      {foods.map((food) => {
        return (
          
          <FoodBox
    
            name={food.name}
            calories={food.calories}
            image={food.image}
            quantity={food.quantity}
            />
        )
      })}

     
       
     
    </div>
  );
  }
}

export default App;
