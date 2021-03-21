import React from 'react'

class TodaysFood extends React.Component {

    sumCal = () => {

        let totalCal = this.props.recipe.reduce((acc, cur) => {
            
            return acc + cur.calories
        }, 0)
    
        return totalCal

    }

    render(){

        let sumOfCal = this.sumCal()
        console.log(sumOfCal)

    return (
        <div>
            <h1>Today's foods</h1>
            <ul>
                {this.props.recipe.map((food) => {
                    return <li> {food.number} {food.name} = {food.calories} cal</li>
                })}
                
            </ul>

            <p>Total: {sumOfCal} cal</p>
            
        </div>
    )
}
}

export default TodaysFood
