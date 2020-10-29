import React from 'react'

class FoodList extends React.Component{
    render() {
        return(
            <div>
                <li>{this.props.todayFoods.name}</li>
            </div>
        )
    }
}
 export default FoodList