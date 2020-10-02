import React, { Component } from 'react'
import foods from '../FoodBox/foods.json' 
import FoodBox from '../FoodBox/FoodBox'
import FoodForm from '../FoodForm/FoodForm'
import SearchFood from '../SearchFood/SearchFood'


class ListFood extends Component {

        constructor(){
            super()
            this.state={
                foodList: foods,  
            }

        }


        addFood = elm => {

            const listFoodCopy = [...this.state.foodList]
            listFoodCopy.push(elm)
            this.setState({ foodList : listFoodCopy })
        }

        searchFoods = elm => {
            let { value } = elm.target
            this.setState({foodList: this.state.foodList.filter((elm) => elm.name.toLowerCase().includes(value.toLowerCase())}))
        }

        //Intento de completar el array de  Today's list...en TodayFood.js iba a iterar este array, pero nop...
        printFood = elm => { this.setState({ todayFoodList: this.state.todayFoodList.concat({qty: elm.qty, food: elm.food})})}

        render(){

            return(
                <>
                <SearchFood handleOnChange={this.searchFoods}/>

                {this.state.foodList.map(elm => <FoodBox key={elm.id} {...elm} print = {this.state.printFood}/>)}

                <FoodForm addFood={this.addFood} />
                </>    



            )
        }

}

export default ListFood
