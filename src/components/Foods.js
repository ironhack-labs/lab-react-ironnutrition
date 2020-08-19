import React from 'react';
import foodSeed from '../foods.json'
import FoodBox from './FoodBox'
import AddFood from './AddFood'
import TodayFood from './TodayFood'


class Foods extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            foodList: foodSeed,
            filteredFoods: foodSeed,
            formShow: false,
            TodayFoods: []
        }
    }

    formAppear = () => {
        this.setState({
            formShow: true
        })
    }

    handleAdd = (e) => {
        e.preventDefault()
        let foodName        = e.currentTarget.foodName.value
        let foodCalories    = e.currentTarget.foodCalories.value
        let foodImage       = e.currentTarget.foodImage.value
        let foodQuantity    = e.currentTarget.foodQuantity.value
        let newFood = [
            {name:      foodName, 
            calories:   foodCalories,
            image:      foodImage,
            quantity:   foodQuantity   
            }, ...this.state.foodList]

        this.setState({
          foodList:       newFood,
          filteredFoods:  newFood,
          formShow:       false
        })
    }

    handleSearch = (e) => { 
      let searchName = e.currentTarget.value
      let cloneFoods = this.state.foodList.filter((food) => {
        return food.name.startsWith(searchName.toUpperCase())
      })
      this.setState({
        filteredFoods: cloneFoods
    })
    }

    handleQuantity = (e) => {

    }

    handleToday = (e) =>{
        let foodName        = e.currentTarget.food.name.value
        let foodCalories    = e.currentTarget.food.calories.value
        let foodImage       = e.currentTarget.food.image.value
        let foodQuantity    = e.currentTarget.food.quantity.value
        let newFood = [
            {name:      foodName, 
            calories:   foodCalories,
            image:      foodImage,
            quantity:   foodQuantity   
            }, ...this.state.TodayFoods]

        this.setState({
          TodayFoods: newFood
        })
    }


    render() {
        return (
            <div>
              <h1>Iron Nutrition</h1>
              <button onClick={this.formAppear} className="button is-info">Add food</button>
              {this.state.formShow && <AddFood onAdd={this.handleAdd}/>}
              <input 
                type="text" 
                placeholder="Search your list"
                onChange={this.handleSearch}>
              </input>
              <div className="columns">
                <div className="column">
                  {
                      this.state.filteredFoods.map((food, i) => {
                          return <FoodBox 
                          food={food} 
                          key={'food' + i}
                          id={i}
                          onToday={this.handleToday}
                          onQuantity={this.handleQuantity}
                          />
                      })
                  }
                </div>
                <div className="column">
                  <h3>Today's foods</h3>
                  <ul>
                  {
                      this.state.TodayFoods.map((todayFood, i) => {
                          return <TodayFood 
                          todayFood={todayFood} 
                          key={'todayfood' + i}
                          id={i}
                          />
                      })
                  }
                  </ul>
                </div>
              </div>
            </div>
        )
    }
}

export default Foods