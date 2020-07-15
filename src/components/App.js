import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox'
import foods from './foods.json';
import Form from './Form'

class App extends Component {
    state = {
        foods: foods,
        showingForm: false,

    }
    showForm = () => {
        this.setState({
            showingForm: !this.state.showingform
        })
    }
    addForm = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let calories = e.target.calories.value
        this.setState({
            foods: [...this.state.foods, { name: name, calories: calories }],
            showingForm: !this.state.showingform
        })
    }

    render() {
        return (
            <section>
                <button onClick={this.showForm}>Add</button>
                {this.state.showingForm && <Form submitForm={this.addForm} />}
                {foods.map((elm, idx) => <FoodBox {...elm} key={idx} />)}
            </section>
        )
    }
}

export default App;
