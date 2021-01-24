import React from 'react'
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox'
import foods from '../foods.json'
import AddFood from './AddFood'
import SearchBar from './SearchBar'


class FoodList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodList : foods
        }

    }

    renderFoods(foods) {
        let foodsToRender = foods.map(food => {
            return <FoodBox key={food.name} food = {food}/>
        });
        return foodsToRender;
    }

    addFoodHandler(food) {

        let {foodName, calories, image, quantity} = food;
        let foodListClone = JSON.parse(JSON.stringify(this.state.foodList)); //deep copy

        foodListClone.push({name: foodName, calories, image, quantity});

        this.setState({
            foodList:  foodListClone
        })

    }

    retrieveSearch(search) {
        
        console.log(search.searchString);
        let filteredFoods = this.state.foodList.filter( food => {
            console.log(food)
            return food.name.toLowerCase().includes(search.searchString.toLowerCase()) 
        })

        this.setState({
            foodList: filteredFoods
        })

    }

    render () {
        return(
            <React.Fragment>
                <AddFood addFoodToList = {this.addFoodHandler.bind(this)}/>
                <SearchBar triggerSearch={this.retrieveSearch.bind(this)}/>
                {this.renderFoods(this.state.foodList)}
            </React.Fragment>  
        );
    }
}

export default FoodList;