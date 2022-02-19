import { Component } from 'react'
import dataList from '../../data/foods.json'
import FoodCreateimput from '../FoodCreateImput/FoodCreateImput'
import FoodBox from '../FoodItem/FoodItem'

class ListFood extends Component {
    state = {
        foodList: []
    }

    componentDidMount() {
        this.setState({ foodList: dataList })
    }

    handleCreateFood(food) {
        this.setState((foodList ) => ({
            foodList: [...this.state.foodList, food ]
        }))
    }


    render() {
        const {foodList} = this.state
        return (
            <div>
                <FoodCreateimput  onCreateFood={(food) => this.handleCreateFood(food) }/>
                {foodList.map((food) => (
                    <FoodBox key={food.name} {...food}/>
                ))}
            </div>
        )
    }

}

export default ListFood