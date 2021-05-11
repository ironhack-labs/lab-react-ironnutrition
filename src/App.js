import React from 'react';
import foodList from './foods.json';
import Foodbox from './components/FoodBox/FoodBox';
import 'bulma/css/bulma.css';
import './App.css';
import Form from './components/Form/Form';
import Search from './components/Search/Search';
import TodaysFoods from './components/TodaysFoods/TodaysFoods';

class App extends React.Component {
  state = {
    filteredFood: foodList,
    foods: foodList,
    showForm: false,
    foodToAdd: [] 
  }
   
  addFood = (food) => {
    const arrayCopy2 = [ ...this.state.filteredFood];
    const arrayCopy = [ ...this.state.foods ];

    arrayCopy2.push(food);
    arrayCopy.push(food);
    this.setState({ foods: arrayCopy });
    this.setState({ filteredFood: arrayCopy2});
  }

  displayFoods = () => {
    return this.state.filteredFood.map((singleFood) => {
      return (        
          <Foodbox addFoodToList={(food)=>this.addFoodToList(food)} {...singleFood}/>  

      )
    })
  }
 
  addFoodToList (food){
      console.log("click")
      const arrayCopy = [ ...this.state.foodToAdd];
      arrayCopy.push(food);
      this.setState({...this.state, foodToAdd: arrayCopy});

  }

  filterFoods = (event) => {
    const { value } = event.target;    
    const filteredFood = this.state.foods.filter((food) =>{
      return food.name.includes(value)
    })
    this.setState({ ...this.state, filteredFood})
  }

  //TODO:FIXME:TODO:FIXME:
  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm})    
  }

  render() {
    return (
      <div>
          <div>
          <button onClick={() => this.toggleForm()}>Add food </button>
          </div>

          <Search filterFoods = {(event) => this.filterFoods(event)}/>
          {this.state.showForm ? <Form patata={()=> this.toggleForm()} addFood={(food) => this.addFood(food)} /> : ""}      
          <div  className="display-foods">
          <div>
            {
            this.displayFoods()
            }
          </div>
          <div className="todays-foods">
            <h2>Today's Foods</h2>
            <TodaysFoods patata={this.state.foodToAdd}/>
          </div>
          </div>
      </div>
    )
  }
}

export default App;
