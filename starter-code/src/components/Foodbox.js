import React, { Component } from 'react';
import Card from './Card';
import foods from '../foods.json'
import 'bulma/css/bulma.css'



class Foodbox extends Component {
    constructor() {
        super()
        this.state = {
            foods: foods,
            showForm: false,
            searchName: '',
        }
    }

    addNewFood = newFood => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)
        this.setState({ foods: foodsCopy })
        console.log(foodsCopy)
        debugger

    }


    addSubmit = e => {
        const foodsCopy = [...this.state.foods]
        this.setState({ foods: foodsCopy, showForm: true })
    }


    handleSubmit = e => {
        e.preventDefault();

        this.addNewFood(this.state.foods);
        this.setState({
            foods: {
                name: '',
                image: '',
                calories: ''
            },
            // showForm: false
        }

        );
        console.log()
    };


    searchFunction = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {

        return (

            < div >

                <input type="text" name="searchName" placeholder="Search by name" value={this.state.searchName} onChange={this.searchFunction} />


                {this.state.foods.map((elm, idx) => <Card key={idx} {...elm} />)}

                <button onClick={this.addSubmit}> Add new food </button>

                {this.state.showForm ? <form onSubmit={this.addNewFood}>
                    <div classNameName="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="name" type="text" placeholder="Text input" value={this.state.foods.name} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Calories</label>
                        <div className="control">
                            <input className="calories" type="text" placeholder="Text input" value={this.state.foods.calories} />
                        </div>
                    </div>

                    <div class="file">
                        <label class="file-label">
                            <input class="file-input" type="file" name="resume" value={this.state.foods.image} />
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">Choose a file…</span>
                            </span>
                        </label>
                    </div>
                    <div class="control">
                        <button type='submit' class="button is-primary">Submit</button>
                    </div>
                </form>
                    : null}
            </div >
        )
    }
}



export default Foodbox