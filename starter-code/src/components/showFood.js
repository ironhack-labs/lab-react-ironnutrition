import React from 'react'
import FoodBox from './foodBox'
import foods from '../foods.json'
import AddFood from "./addFood"

class ShowFood extends React.Component {
    constructor() {
        super()

    }
    state = {
        foods: foods,
        filteredFoods:foods
    }
    addFoodHandler = (theFood) => {
        const foodCopy = [...this.state.foods];
        foodCopy.push(theFood);
        this.setState({
          foods: foodCopy
        })
      }

      filterFoods = e => {
          let filterTheFoods = this.state.foods.filter((food)=>{
              return(
                  food.name.toLowerCase().includes(e.target.value.toLowerCase())
                  
              )
              
          })
          this.setState({filteredFoods:filterTheFoods})

      }
    render() {
        return (
            <div>
                <h1>Search For Specific Food</h1>
              
                <input className="w-40" type="text" onChange= {this.filterFoods}/>
                <h1>Add New Food!</h1>
                <AddFood addTheFood={this.addFoodHandler}/>
                {this.state.filteredFoods.map((element, index) => (
                    <FoodBox
                        index={index.toString()}
                        name={element.name}
                        calories={element.calories}
                        pic={element.image} />
                ))}
            </div>
        )
    }
}

export default ShowFood