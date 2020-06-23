// components/dynamicListsDemo/AddMovie.js
import React, { Component } from 'react'

export default class AddNewFood extends Component {
constructor(props){
    super(props);
    this.state = {
            name:'',
            calories:'',
            image:'',
            quantity:''
        }
    }
     
handleName =(event) => {
    this.setState({
        name:event.target.value
    })
}

handleCalories=(event)=>{
    this.setState({
        calories:event.target.value
    })
}

handleImage=(event) =>{
    this.setState({
        image:event.target.value
    })
}

handleQuantity=(event) => {
    this.setState({
        quantity: event.target.value
    })
}
handleFormSubmit=(event)=>{
    debugger
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({
             name:'',
            calories:'',
            image:'',
            quantity:''

    })
}
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <label>name</label>
                <input type = "text" name = "name" value={this.state.name} onChange={(e)=>this.handleName(e)}/>

                 <label>calories</label>
                <input type = "text" name = "calories" value={this.state.calories} onChange={(e)=>this.handleCalories(e)}/>

                 <label>Image:</label>
                <input type = "text" name = "image" value={this.state.image} onChange={(e)=>this.handleImage(e)}/>

                 <label>quantity</label>
                <input type = "text" name = "quantity" value={this.state.quantity} onChange={(e)=>this.handleQuantity(e)}/>

                <input type = "submit" value="Submit"/>                
                </form>    
            </div>
        )
    }
}
