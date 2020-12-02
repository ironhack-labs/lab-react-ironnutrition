import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends React.Component {

  state = {
    foods: foods,
    temporalNewfood: {
      name: '',
      image: '',
      calories: '',
      quantity: ''
    },
    searchValue: {
      stringToSearch: ''
    },
    temporalNewTodayFood: {
      name: ''
    },
    todayFoods: [],
    totalCalories: 0,
    addFood: (event)=>{
      event.preventDefault();
      const copyOfFoods = [...this.state.foods];
      copyOfFoods.unshift(this.state.temporalNewfood);
      document.querySelector('form').className = 'formulario';
      this.setState({foods: copyOfFoods});
    },
    updateValues: (_name, _value, calories) => {

      const copyOfTemporalFood = {...this.state.temporalNewfood};
      let copyOfSearchValue = {...this.state.searchValue}
      const copyOfTodayFoods = [...this.state.todayFoods];
      let copyOfCalories = this.state.totalCalories;

      if(_name==='name'){
        copyOfTemporalFood.name = _value;
      }else if(_name==='image'){
        copyOfTemporalFood.image = _value;
      } else if(_name==='calories'){
        copyOfTemporalFood.calories = Number(_value);
      } else if(_name==='search'){
        copyOfSearchValue.stringToSearch = _value
        this.setState({searchValue: copyOfSearchValue})
      } else if(_name==='sum'){
        let newTodayFood = {name: _value, calories}
        this.state.todayFoods.forEach((food, index)=>{
          if(food.name===newTodayFood.name){
            const newCalories = food.calories;
            copyOfTodayFoods.splice(index, 1)
            newTodayFood.calories = newCalories + calories;
          }
        })
        copyOfTodayFoods.push(newTodayFood);
        
        copyOfCalories+=calories;
        this.setState({totalCalories: copyOfCalories});
        this.setState({todayFoods: copyOfTodayFoods});
      }

      
      this.setState({temporalNewfood: copyOfTemporalFood});
    }
  }


  displayFoods = () => {
    return this.state.foods.filter((food)=>{
      return food.name.toLowerCase().includes(this.state.searchValue.stringToSearch.toLowerCase())
    }).map((food, index)=>{
      return <FoodBox 
        key={index} 
        name={food.name} 
        image={food.image} 
        calories={food.calories}
        onSumChange={this.onSumChange}
        />
    });
  };
  displayTotalCalories = () => {
    return <p>Total calories: {Number(this.state.totalCalories)} cal</p>
  }

  displayTodayFoods = () => {
    return this.state.todayFoods.map((food, index)=>{
        return (
          <div key={index}>
            <li>{food.name} = {food.calories} cal</li>
            <button className="button is-small is-danger" onClick={()=>{
              const copyOfTodayFoods = [...this.state.todayFoods];
              let copyOfCalories = this.state.totalCalories;
              copyOfCalories-=food.calories;
              this.setState({totalCalories: copyOfCalories});
              const indexToSplice = this.state.foods.indexOf(food);
              copyOfTodayFoods.splice(indexToSplice, 1);
              this.setState({todayFoods: copyOfTodayFoods});
            }}>Delete Food</button>
          </div>
        )
    })
  }

  onInputChange = (_event) => {
    this.state.updateValues(_event.target.name, _event.target.value);
  }
  onSumChange = (target, name, calories) => {
    this.state.updateValues(target.name, name, calories);
  }

  render(){
    return (
      <div className="App">
        <h1>IronNutrition</h1>

        <button className="button is-primary" onClick={()=>{
          if(!document.querySelector('form').classList.contains('visible')){
            document.querySelector('form').className = 'visible'
          } else {
            document.querySelector('form').className = 'formulario'
          }
          }}>
            Add New Food
          </button>
          <br/>
          <input 
              type="text" 
              id="search" 
              name="search"
              value={this.state.searchValue.stringToSearch} 
              onChange={(event)=>this.onInputChange(event)}  
              />
          
        <form className="formulario" onSubmit={this.state.addFood}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={this.state.temporalNewfood.name} 
                    onChange={(event)=>this.onInputChange(event)}  
                    />

                <label htmlFor="calories">Calories:</label>
                <input 
                    type="text" 
                    id="calories" 
                    name="calories"
                    value={Number(this.state.temporalNewfood.calories)} 
                    onChange={(event)=>this.onInputChange(event)}  
                    />

                <label htmlFor="image">ImageUrl:</label>
                <input 
                    type="text" 
                    id="image" 
                    name="image"
                    value={this.state.temporalNewfood.image} 
                    onChange={(event)=>this.onInputChange(event)}  
                    />
                <button type="submit">Add Food</button>
        </form>
        <div className="main-content">
          {this.displayFoods()}
          <div className="today-foods">
          <h2>Today's foods</h2>
            <ul>
              {this.displayTodayFoods()}
            </ul>
            {this.displayTotalCalories()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
