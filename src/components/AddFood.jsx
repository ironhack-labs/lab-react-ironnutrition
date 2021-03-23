import React, { Component } from 'react';

import '../assets/Modal.css'

class AddFoodButton extends Component {

    state = { 
        name: '',
        calories: '',
        image: ''
      }

      handleChange = (event) => {
        let { name, calories, value } = event.target
        this.setState({[name]: value, [calories]:value})
      }


    handleFormSubmit = (event)=>{
        event.preventDefault()
        console.log(event.target.name.value)
        console.log(event.target.calories.value)

        this.props.addTheFood(this.state);
    }

    onSearch = (event) => this.setState({search: event.target.value}) 

    render(){
        return (
            <div className="container__form">
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" name="calories" placeholder="Calories" value={this.state.calories} onChange={this.handleChange}/>
                    <input type="file" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default AddFoodButton