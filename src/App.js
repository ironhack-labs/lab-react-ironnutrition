import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';
import TodayFoods from './components/TodayFoods';

class App extends React.Component {
  state = {
    foods: foods,
    filteredFoods: foods,
    displayForm: false,
    todaysfoods: [],
  };

  displayFoods = () => {
    return this.state.filteredFoods.map((food) => {
      return (
        <FoodBox addTodaysFoods = {(food) => this.addTodaysFoods(food)}
          {...food}
          />
      );
    });
  };

  addFood = (food) => {
    const foodsCopy = [...this.state.filteredFoods];
    const filteredfoodsCopy = [...this.state.foods];

    foodsCopy.push(food);
    filteredfoodsCopy.push(food);

    this.setState({ filteredFoods: foodsCopy, foods:filteredfoodsCopy });
  };

  displayForm = () => {
    const foodsCopy = [...this.state.foods];
    const showForm = !this.state.foods.displayForm;

    this.setState({ foods: foodsCopy, displayForm: showForm });
  };


  filterFoods(event){
    const {value} = event.target;
    const filteredFoods = this.state.foods.filter((food)=>{
      return food.name.toLowerCase().includes(value.toLowerCase())
    })
  
    this.setState({...this.state, filteredFoods})
  }

  addTodaysFoods(food){
    const todayfoodsCopy = [...this.state.todaysfoods];
    todayfoodsCopy.push(food);

    this.setState({...this.state, todaysfoods: todayfoodsCopy })
  }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <Search filterFoods={(event) => this.filterFoods(event)} />

        <button onClick={() => this.displayForm()} class="button is-primary">
          Add New Food
        </button>

        {this.state.displayForm ? <Form addFood={(food) => this.addFood(food)} /> : ""}

      <div className="main-content">
        <div className="food-container">{this.displayFoods()}</div>
        <div className="today-foods">
          <h2>Today's Foods</h2>
          <TodayFoods todaysfoods= {this.state.todaysfoods}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
