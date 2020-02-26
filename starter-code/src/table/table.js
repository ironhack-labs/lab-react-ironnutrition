import React, { Component } from 'react';
import foods from '../foods.json'
import Foodbox from '../foodbox/foodbox'
import AddFoods from '../forms/FoodsForm';




class Table extends Component {
    constructor() {
        super()
        this.state = {
            foods: foods,
            form: false,
            keyword: ''
        }
    }

    openModal = () => {
        this.state.form = !this.state.form
        this.setState({ form: this.state.form })
    }

    closeModal = () => {
        this.state.form = !this.state.form
        this.setState({ form: this.state.form })
    }

    addFood = theFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(theFood)
        this.setState({ foods: foodsCopy })
    }

    searchFoods = e => {

        let { value } = e.target
        let foodsCopy = [...foods]

        let filteredFoods = foodsCopy.filter(elm => elm.name.toLowerCase().includes(value))

        this.setState({
            foods: filteredFoods,
            keyword: value
        })

    }

    render() {
        return (

            <main>

                <button className="button is-success" onClick={this.openModal}>Add food</button>

                <h4>Search your food</h4>
                <input className="input" type="text" name="name" placeholder="Text input" value={this.state.keyword} onChange={this.searchFoods}></input>

                <AddFoods className={this.state.form ? 'modal is-active' : 'modal'} closeModal={this.closeModal} addFood={this.addFood} />

                {this.state.foods.map((elm, idx) => <Foodbox key={idx} {...elm} />)}
            </main>
        )
    }
}



export default Table;