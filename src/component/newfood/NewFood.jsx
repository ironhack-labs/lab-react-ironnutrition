import 'bulma/css/bulma.css'
import React, { Component } from 'react'

export default class NewFood extends Component {

    state = {
        name: '',
        calories: '',
        image: '',
        formVisible: false
    }

    handleChange(e) {
        let { name, value } = e.target

        this.setState({[name]: value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        this.props.addNewFood(this.state)        

        this.setState({
            name: '',
            calories: '',
            image: ''
        })       
    }


    render() {
    
            return (      
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <div class='field'>
                        <label htmlFor='name' class="label">Name:</label>
                        <div class="control">
                            <input 
                                className ='input is-normal'
                                type="text" 
                                name="name" 
                                value={this.state.name}
                                onChange={(e) => this.handleChange(e)} />
                        </div>


                        <label htmlFor='calories' class="label">Number of calories:</label>
                        <div class="control">
                            <input 
                                className ='input is-normal'
                                type="number" 
                                name="calories" 
                                value={this.state.calories} 
                                onChange={(e) => this.handleChange(e)} />
                        </div>

                        <label htmlFor='image' class="label">Image:</label>
                        <div class="control">
                            <input 
                                className ='input is-normal'
                                type="text" 
                                name='image'
                                value={this.state.image}
                                placeholder='url image'
                                onChange={(e) => this.handleChange(e)}
                                />
                        </div>
                        
                        <button className="button is-info">Submit</button>
                    </div>
                   
                </form>   
            </div>
            )

    }
}

