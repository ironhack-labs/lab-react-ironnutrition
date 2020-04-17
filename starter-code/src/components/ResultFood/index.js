import React, { Component } from 'react';
import TodayFood from '../TodayFood';
import "./style.css";

class ResultFood extends Component {

    state = {
        allcalories: 0
    }

    calcalories = (calories) => {
        console.log('calories', calories)
        this.setState({
            allcalories: this.state.allcalories + calories
        })
    }

    render(){
        console.log('food', this.props.newFoodList)
        const { newFoodList } = this.props;
        return (
            <div className="listFood">

                <h4> Today's Foods </h4>

                {newFoodList.map((foodToday,index) => {
                    const props = {
                        key: index,
                        name: foodToday.name,
                        calories: foodToday.calories,
                        quantity: foodToday.number,
                        calcalories: this.calcalories
                    }
                   return <TodayFood {...props}/> 
                })}

                <h4> Total: {this.state.allcalories} cal </h4>
            </div>
        )
    }
}

export default ResultFood;

