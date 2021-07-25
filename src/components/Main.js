import React, { Component }  from 'react';
import foods from '../foods.json'
import FoodBox from "./FoodBox";
import AddFood from './AddFood';
import SearchBar from './SearchBar';
import './Main.css';
import TodaysFood from './TodaysFood';

class Main extends Component {
    state = {
        foodList: foods,
        form: false,
        filteredFoods: foods,
        todaysFood: [],
    }

    handleAddFood = (food) => {
        const newFoods = [...this.state.foodList, food];
        this.setState({
          foodList: newFoods,
          form: false,
          filteredFoods: newFoods,
        });
    };

    handleClick = () => {
        this.setState({
            form: !this.state.form,
        })
    }

    filterFood = (inputSearch) => {
        const newFilteredFoods = this.state.foodList.filter((food) => {
            return food.name.toLowerCase().includes(inputSearch.toLowerCase())
        })
        this.setState({
            filteredFoods: newFilteredFoods,
        })
    }   

    handleAddToday = (food) => {
        const newTodaysFood = [...this.state.todaysFood, food];
        this.setState({
            todaysFood: newTodaysFood,
        })
    }


    render() {
        return (
            <>
            <div className='search-bar'>
                <SearchBar filterFood={this.filterFood}/>
            </div>
            <div className='form-div'>
                <button className='button is-info'onClick={this.handleClick}>
                    {!this.state.form ? 'Add Food' : 'Cancel'}
                </button>
                {this.state.form ? <AddFood addFood={this.handleAddFood} /> : null}
                
            </div>
            <div className='main-div'>
                <div className='food-cards'>
                    {this.state.filteredFoods.map((item, index) => (
                        <FoodBox key={index} food={item} onAddClick={() => {this.handleAddToday(item)}}/>
                        )
                    )}
                </div>
                <div className='todays-div'>
                        <TodaysFood foodList={this.state.todaysFood}/>
                </div>
            </div>
          </>
        )
    }
}

export default Main;