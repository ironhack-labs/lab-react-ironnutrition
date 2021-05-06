import React from 'react'

class TodaysFoods extends React.Component{

    sumCalories(){
        const caloriesArray = Object.keys(this.props.todaysFoods).map((foodName)=>{
            console.log(this.props.food)
            console.log(this.props.food[foodName], foodName)
            // return this.props.food[foodName].calories
        })
        if (caloriesArray.length > 0){
            const sum = caloriesArray.reduce((acc, num)=>{
                return acc+num
            })
            return sum
        }
    }

    getFoods(){
        const {name, calories} = this.props.food
        {Object.keys(this.props.todaysFoods).map((foodName)=>{
            return <li>{this.props.todaysFoods[foodName]} {name} {calories} cal</li>
        })}
    }

    render(){
        return(
            <div className="todays-food">
                <h2>Today's foods</h2>
                <ul>
                    {this.getFoods()}
                </ul>
                <p><strong>{this.sumCalories()} cal</strong></p>
            </div>
        )
    }
}

export default TodaysFoods
