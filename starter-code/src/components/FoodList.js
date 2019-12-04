import React, { Component } from 'react'
import foods from '../foods.json'
import FoodBox from './FoodBox'
import NewFood from './NewFood';
// import Search from './Search';


class List extends Component {
    constructor() {
        super()
        this.state = {
            foods: foods,
            form: false,
            search: '',
            // name: name,
            // calories: calories,
            // image: image,
            // quantity: quantity
        }
    }

    handleForm = e => {
        this.setState({ form: !this.state.form })

    }

    addNewFood = e => {
        const foodCopy = [...this.state.foods]
        foodCopy.push(e)
        this.setState({ foods: foodCopy })
    }

    changeHandle = event => {
        // console.log(e.target)
        this.setState({ search: event.target.value })
    }

    
    
    render() {
        const filterList = () => {
            let items = this.state.search
            return this.state.foods.filter(el => el.name.toLowerCase().indexOf(items.toLowerCase()) > -1
            )
        }
        return (
            <div>
                <input type='text' value={this.state.search} onChange={this.changeHandle} />
                {filterList().map((elm, idx) => <FoodBox key={idx}{...elm} />)}
                <button onClick={this.handleForm}>Add new food</button>
                {
                    this.state.form ? <NewFood stateForm={this.state.form} includeFood={this.addNewFood} handleForm={this.handleForm} /> : null

                }

            </div>
        )
    }
}

export default List