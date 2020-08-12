import React, { Component } from 'react'

class NewFood extends Component {

    constructor() {
        super()
        this.state = {
            newName: '',
            newCalories: '',
            newImage: ''
            
        }
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = e => {
        
        e.preventDefault();
        this.props.insertFood(this.state);
        this.setState({
            newName: '',
            newImage: '',
            newCalories: ''
        });

    }
    
    render() {
        return (
            
            <form onSubmit={this.handleSubmit}> 
                <label>Name: </label> 
                    
                    <div>
                    <input name="newName" type="text" value={this.state.newName} onChange={this.handleChange} />
                    </div>
                

                <label>Calories: </label>
                    
                    <div>
                    <input name="newCalories" type="number" value={this.state.newCalories} onChange={this.handleChange} />
                    </div>
                

                <label>Image: </label>
                    
                    <div>
                    <input name="newImage" type="text" value={this.state.newImage} onChange={this.handleChange} />
                    </div>
                

                <button className="button is-link" onClick={this.viewForm}>Create!</button>
            </form>
            

        )
    }

}

export default NewFood