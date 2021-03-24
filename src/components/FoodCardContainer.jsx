import React, {Component} from 'react'
import data from '../data/foods.json'

//components
import FoodCard from './FoodCard'
import InfoCard from './InfoCard'
import AddFood from './AddFood'

//assets
import '../assets/FoodCardContainer.css'
import '../assets/InfoCard.css'

let uniqid = require('uniqid');


class FoodCardContainer extends Component{
    state ={
        foods: [...data],
        search: '',
        foodsInfo: []
    }

    onSearch = (event) => this.setState({search: event.target.value}) 


    filterFoods = () => {
        let foods = [...this.state.foods]
        if (this.state.search) {
            foods = this.state.foods.filter(({ name }) => name.toLowerCase().includes(this.state.search.toLowerCase()))
        }
        return foods
    }

    filterFoodsInfo = () => {
        let foodsInfo = [...this.state.foodsInfo]
        console.log(foodsInfo)
        return foodsInfo
    }

    addFoodHandler = (newFood) =>{
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        
        this.setState({
          foods: foodsCopy
        })
    }

    addFoodInfo = (newInfo) => {
        console.log("Add info")
        const infoCopy = [...this.state.foodsInfo]
        infoCopy.push(newInfo)
        
        this.setState({
            foodsInfo: infoCopy
        })
    }

    deleteItem = (infoName) => {
        this.setState({
            foodsInfo: this.state.foodsInfo.filter(info => info.name !== infoName)
        })
      }
  

    render(){

        const foods = this.filterFoods()
        const foodsInfo = this.filterFoodsInfo()

        return(
            
            <div className="food__card__container container column">
                <div className="columns">
                    <div className="column">
                        <AddFood addTheFood={this.addFoodHandler}/>
                        <div className="row">
                            <input placeholder="Search" type="text" className="form-control search-bar" onChange={this.onSearch}/>
                        </div>

                        <div className="row">
                            {foods.map(food => (
                                <div className="col" key={uniqid(this.name)}>
                                    <FoodCard {...food} addFoodInfo={this.addFoodInfo}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="column">
                        <h1>Today's Food</h1>
                        <div className="row">
                            {foodsInfo.map(info => (
                                <div className="col food_info" key={uniqid()}>
                                    <InfoCard {...info} onDelete={() => this.deleteItem(info.name)}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FoodCardContainer