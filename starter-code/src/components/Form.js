import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            newFood: {
                name: '',
                calories: '',
                image: '',
                amount: 0
            }
        }
    }    
    
  
    onChange = (e) => {
        const { newFood } = this.state
        newFood[e.target.name] = e.target.value
        this.setState({ 
            newFood })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addNewFood(this.state)
    }

    render () {
       

        return (
            <form className="has-text-left" onSubmit={this.onSubmit}>
                <h1 className="is-size-4">Add a new food:</h1>
                
                <div>
                   <label>Name:</label> <br />
                    <input type="text" name="name" value={this.state.newFood.name} onChange={this.onChange} />
                </div>
                <div>
                    <label>Calories:</label><br />
                    <input type="text" name="calories" value={this.state.newFood.calories} onChange={this.onChange} />
                </div> 
                <div>
                    <label>Image:</label><br />
                    <input type="text" name="image" value={this.state.newFood.image} onChange={this.onChange} />
                </div>   
                <button type="sumbit" ><Link to='/' >Add food</Link></button>
  
            </form>
        )

    }
}