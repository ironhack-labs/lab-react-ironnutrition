import React, { Component } from 'react'

export default class AddFood extends Component {
    state = { name:"",
              calories:0,
              image:"",
              quantity:0
            }

    handleInput = (e) => {
        e.preventDefault();
        let {value,name} = e.target;
        this.setState({[name]:value});
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addOneFood(this.state);
        this.setState(
      { name:"",
        calories:0,
        image:"",
        quantity:0
      });
    }

    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleInput}/>
                    <label>Image</label>
                    <input type='text' name='image' value={this.state.image} onChange={this.handleInput}/>
                    <label>Calories</label>
                    <input type='number' name='calories' value={this.state.calories} onChange={this.handleInput}/>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

