import React from 'react'

class TodaysFood extends React.Component{
    state = {
        totalCalories : this.props.calories*this.props.quantity
    }
    render(){
        return(
            <>
            <p>{this.props.name}</p>
            <p> Quantity : {this.props.quantity}</p>
            {<p>Total calories : {this.state.totalCalories}</p>}
            </>
        )
    }
}

export default TodaysFood