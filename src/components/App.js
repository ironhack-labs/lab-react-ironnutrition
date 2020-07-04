import React from 'react';
import FoodBox from './FoodBox';
import foods from '../foods.json';
import AddFood from './AddFood';



class App extends React.Component {
    state = {
        foods: foods,
        foodList: foods,
        showForm: false
    }

    addFood(food){
        let allFoods = JSON.parse(JSON.stringify(this.state.foods));
        allFoods.unshift(food);
        this.setState({
          foods: allFoods,
          foodList: allFoods,
          showForm: false
        });
      }
    
      form(){
        this.setState({
          showForm: !this.state.showForm
        }); 



    Search = ({term}) => {
        const newFoods = this.state.foods.filter((food) => food.name.include(term.target.value))
        this.setState({
            foodList: newFoods
        })
    }
    
    todaysFood(name, quantity, calories){
        let newTodaysFood = [...this.state.todaysFood];
        let dishesCalories = quantity * calories;
        let newFood = {name: name, quantity: quantity, calories: dishesCalories};
        let found = false;
        newTodaysFood.forEach(food => {
          if(food.name === newFood.name){
          food.quantity = Number(food.quantity) + Number(quantity);
          food.calories += calories;
          found = true;
          }
        });
    
        if (!found){
          newTodaysFood.unshift(newFood);
        }
    
        let totalCals = this.calculateCalories(newTodaysFood);
    
        this.setState({
          todaysFood: newTodaysFood,
          totalCalories: totalCals
        });
      }
    
    
    render() {
        return (
            <div>
                <h1>IronNutrition</h1>
                <div>
                    <input type="text" placeholder="food" onChange={this.Search}></input>
                </div>
                <div>
                <button className="button is-info my-4" onClick={this.showForm}>Add your Food Form</button>

                </div>
                
                <div className="foodbox">
                    {this.state.foodList.map((v, i) => {
                        return <FoodBox name={v.name} calories={v.calories} image={v.image} />
                    })}
                </div>
                
            </div>
        )
    }
}




export default App