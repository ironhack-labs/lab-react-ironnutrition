import React from 'react';

class CalcFood extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(props){
        
        console.log(this.props.todaysFood)

        const todaysFoodList = this.props.todaysFood.map((todaysFood) => {
            return (
                <div className="media-left has-text-left">
                <li>{todaysFood.quantity}x {todaysFood.name} = {todaysFood.calories} kcal</li>
                </div>
            )
        })

        return(
            <div>
            <h1>Today´s foods:</h1>
            <div className="has-text-left">
            <p>{todaysFoodList}</p>
            <p>Total: <strong>{this.props.todaysFood.reduce((sumCal, newCal) => {return sumCal + (newCal.calories * newCal.quantity)}, 0)}</strong></p>
            </div>
            </div>
        )
    }
}

export default CalcFood