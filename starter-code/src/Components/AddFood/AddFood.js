import React, { Component } from 'react';
import FoodBox from '../FoodBox/FoodBox';

class AddFood extends Component {
    state = {
        form: undefined,
        name: undefined,
        calories: undefined,
        image: undefined
    }

    renderForm = () => {
        this.setState({
            form: this.state.form === true? false : true 
        })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    addToList= (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log(this.state)
    }

    render(){
        return(
            <div>
        <div className="box">
  
            <div className="control">
                <button onClick={this.renderForm} className="button is-info">
                    {!this.state.form? "Show form" : "Hide form"}
                </button>
            </div>

            {this.state.form?
                <div><br/>
                    <label>Name</label>
                    <input  className="input"
                        id="name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInput}
                    /><br/>
                    <label>Calories</label>
                    <input  className="input"
                        id="calories"
                        type="number"
                        name="calories"
                        value={this.state.calories}
                        onChange={this.handleInput}
                    /><br/>
                    <label>Image</label>
                    <input  className="input"
                        id="image"
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleInput}
                    /><br/><br/>
                    <div className="control">
                        <button onClick={this.addToList} className="button is-info">Add</button>
                    </div>
                </div> 
            : false}
            </div>
         <FoodBox click={this.state}/>  
        </div>
        )
    }
}

export default AddFood