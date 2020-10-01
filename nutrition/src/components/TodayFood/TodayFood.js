import React, { Component } from 'react'


class TodayFood extends Component {

    constructor(){
        super()
        this.state = {
            todayFoodList: [],
    
        }
    }

    render(){

        return(

            <>
                <ul>
                {this.state.todayFoodList.map((elm, id) => <li key={id}>{elm.quantity} {elm.name} = {elm.calories * elm.quantity} calories</li>)}
                </ul>

            </>    

        )
    }


}

export default TodayFood