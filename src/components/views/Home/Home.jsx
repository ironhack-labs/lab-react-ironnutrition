import { Component } from "react";
import FoodsList from '../../../components/FoodsList/FoodsList'
import AddFoodForm from "../../AddFoodForm/AddFoodForm";
import foodsJSON from '../../../foods.json'
import {v4 as uuidv4} from 'uuid'


export default class Home extends Component {
    state = {
        foods:  localStorage.getItem('foods') ? JSON.parse(localStorage.getItem('foods')) : foodsJSON,
        search: '',
        showAddFood: true,
    }

    onDeleteFood = (foodIdToDelete) => {
        const newFoods = this.state.foods.filter(food => food.id !== foodIdToDelete)
    this.setState({ foods: newFoods })
    localStorage.setItem('foods', JSON.stringify(newFoods));
    }

    onSubmitFood = (event) => {
        event.preventDefault();
        const {foods} = this.state;


        const newFood = {
            id: uuidv4(), ...foods
        }

        this.setState ({ foods: [newFood]})

    }

    toggleShowAddFoodForm = () => {
        this.setState(prevState => {
            return {
                showAddFood: !prevState.showAddFood
            }
        })
    }

    onChange = (event) => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value })
    }

    getFoodsToRender = () => {
        const { foods, search } = this.state;

        if (search) {
            return foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
        }

        return foods
    }

    
    render () {
        const { search, showAddFood} = this.state; 
        return (
            <div className="Home">
            <button onClick={this.toggleShowAddFoodForm} className="btn btn-info mb-2">
          {showAddFood ? !'Hide' : 'Show'} Add food form
        </button>

        {showAddFood 
          ? ( <AddFoodForm onSubmitFood={this.onSubmitFood} />) : null
        }

            <input
                name="search"
                onChange={this.onChange} value={search} className="form-control mb-4" type="search" 
                placeholder="Search" aria-label="Search"
            />

            <FoodsList foods = {this.getFoodsToRender()} onDeleteFood= {this.onDeleteFood}/>

            </div>
        )
    }
}

