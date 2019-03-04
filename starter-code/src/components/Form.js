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
            },
            show:false
        }
    }    
    onClicK = (e) => {
        this.setState({
            show:true
        })
    }
  
    onChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            newFood: {
                ...this.state.newFood,
                [name]: value
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addNewFood(this.state.newFood)
        this.setState({
            show:false
        })
    }

    render () {
       
        if (!this.state.show){
            return(<button className="button is-link " onClick={this.onClicK}>Add New Food</button>)
        } else {
            return (
                <div className="">
                    
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
                        <button type="sumbit" >Add food</button>
        
                    </form>
                </div>
            )
        }
    }
}