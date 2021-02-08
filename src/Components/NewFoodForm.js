import React, { Component } from 'react'

class NewFoodForm extends Component {

    state = {
        foodName: 'Donuts',
        foodCalories: '452',
        foodImage: 'https://i.imgur.com/zzCYQpc.png'
    }
    
    handleChangeFoodName = (event) => {
        this.setState({foodName: event.target.value})
    }

    handleChangeCalories = (event) => {
        this.setState({foodCalories: event.target.value})
    }

    handleChangeImage = (event) => {
        this.setState({foodImage: event.target.value})
    }
    
    render() {
        
        return (
            
            <form >
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" 
                        value={this.state.foodName} onChange={this.handleChangeFoodName} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input className="input" type="text" 
                        value={this.state.foodCalories} onChange={this.handleChangeCalories} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input className="input" type="text" 
                        value={this.state.foodImage} onChange={this.handleChangeImage} />
                    </div>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-info" onClick={() => 
                        this.props.addNewFood(this.state.foodName, this.state.foodCalories, this.state.foodImage)} >Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-danger" onClick={this.props.handleToggle}>Cancel</button>
                    </div>
                </div>
            </form>

        );
    }

}

export default NewFoodForm