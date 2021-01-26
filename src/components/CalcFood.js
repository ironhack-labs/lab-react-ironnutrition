import React from 'react';
import FoodBox from './FoodBox'

class CalcFood extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.calories,
            calories: this.props.calories,
            image: '',
            quantity: this.props.quantity
        }
    }

    handleAddItem = (event) =>{
        const name = event.target.name;
        
        this.setState({
            addItem: name
        });
        console.log ('Item add')
    }

    render(){
        return(
            <div>
            <h1>CalorienClac</h1>
            <p>{this.props.calories}</p>
            </div>
        )
    }
}

export default CalcFood