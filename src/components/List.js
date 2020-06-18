import React, {Component} from 'react'


export default class List extends Component {

    render() {
        const {foodList} = this.props
        let foodNames = Object.keys(foodList) //gives an array of food names
        let totalCalories = foodNames.reduce((acc, foodName) => {

            return acc + foodList[foodName].totalCalories

        }, 0)
        return (
            <div>
                
                {
                    foodNames.map((foodName, index) => {
                        let myFood = foodList[foodName] //pick that food object from foodlist
                        return (
                           
                            <p key={'a' + index}>{myFood.quantity} {foodName} ={myFood.calories}</p>
                        )
                    })
                    
                    
                })
                <p> Total = {totalCalories} </p>
                
    
              </div>
        )


    }
    
    
}