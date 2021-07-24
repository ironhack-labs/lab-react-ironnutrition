import { Component } from "react";
class TodayFood extends Component{
    state ={
        foods : this.props.total
    }
    handleTotal= (event) => {

    }
    render(){
        return(
            <div class="column content">
                <h2 class="subtitle">Today's foods</h2>
                <ul>
                    {
                        this.state.foods.map((food) => {
                            return <li>{food.quantity} {food.name} = {food.calories * food.quantity} cal</li>
                        })
                    }
                </ul>
                <strong>Total: {this.state.foods.reduce((acc, cur)=> acc + (cur.calories * cur.quantity),0)} cal</strong>
            </div>
        )
    }
}

export default TodayFood