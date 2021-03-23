import React, {Component} from 'react'
import data from '../data/foods.json'

//components
import FoodCard from './FoodCard'

//assets
import '../assets/FoodCardContainer.css'

let uniqid = require('uniqid');


class FoodCardContainer extends Component{
    state ={
        foods: [...data],
        search: ''
    }

    onSearch = (event) => this.setState({search: event.target.value}) 


    filterFoods = () => {
        let foods = [...this.state.foods]
        if (this.state.search) {
            foods = this.state.foods.filter(({ name }) => name.toLowerCase().includes(this.state.search.toLowerCase()))
        }
        return foods
    }
  


    render(){

        const foods = this.filterFoods()

        return(
            <div className="food__card__container container">

                <div className="row">
                    <input placeholder="Search" type="text" className="form-control search-bar" onChange={this.onSearch}/>
                </div>

                <div className="row">
                    {foods.map(food => (
                        <div className="col" key={uniqid(this.name)}>
                            <FoodCard {...food}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default FoodCardContainer