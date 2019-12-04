import React,{Component} from 'react'

export default class TodayFoods extends Component {
    
    constructor(props) {
        super(props);
        this.state = {todayFoods : this.props.todayFoods}
    }
    foodList = this.props.todayFoods;

    caloriesCounter = 0;
    
    deleteFood = (e) => {

        const foodIndex = this.foodList.indexOf(this.foodList.find(food => food.name===e.target.id));
        const todayFoods = this.foodList.splice(foodIndex,1);        
        
        this.setState({todayFoods});
    }
    render() {
        console.log('Props',this.props.todayFoods);
        console.log('State',this.state);
        this.caloriesCounter = 0;
        this.foodList = this.props.todayFoods;
    return (
        <div>
            <ul>
            {   
                
                this.foodList.map((food,index) => {
                    this.caloriesCounter += food.calories * food.quantity;
                    console.log('hola');
                    return (
                        <li 
                        key={index}>{food.quantity} {food.name} = {food.calories*food.quantity} cals
                        <button id={food.name} onClick={this.deleteFood}>Delete</button>
                        </li>
                    )
                })
            }
            </ul>
            <h2>Total: {this.caloriesCounter}</h2>
        </div>
    )}
}
