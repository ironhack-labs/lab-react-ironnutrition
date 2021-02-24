import React from 'react'

class TodayFood extends Component {
 state = {
        foods: foods
    }

newFood = (id) => {
const todaysFoods = [];
todaysFoods.push(id);
}


    render() {
        return (
            <div>
               <p>{this.state.name}</p> 
               <p>{this.state.calories}</p> 
            </div>
        )
    }
}

export default TodayFood;
