import React from 'react';
import '../../App.css';
import 'bulma/css/bulma.css';
import foods from '../../foods.json'
import FoodBox from '../FoodBox/FoodBox'


class FoodBoxList extends React.Component {

    state = {foods}


    render(){

        const FoodBoxList = this.state.foods.map(item => {
            return (
                <FoodBox image={item.image} name={item.name} calories={item.calories} quantity={item.quantity}/>
            )
        })

        return(
            <div>
                {FoodBoxList}
            </div>
        )
    }
}

export {FoodBoxList}