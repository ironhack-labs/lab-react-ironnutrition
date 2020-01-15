import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            calories: 0,
            image: ""
        }
    }

    foodHandler = (e) => {
        this.setState({
          name: e.target.value
        })
      }
    
      caloryHandler = (e) => {
        this.setState({
          calories: e.target.value
        })
      }
    
      imgHandler = (e) => {
        this.setState({
          image: e.target.value
        })
      }

    render(){
        return(
            <form style={this.props.style}>
                <input type="text" name="name" onChange={this.foodHandler} placeholder="Food Name"></input>
                <input type="number" name="calories" onChange={this.caloryHandler} placeholder="Calories"></input>
                <input type="text" name="image" onChange={this.imgHandler} placeholder="Paste Image URL"></input>
                <input type="submit" value="Submit" onClick={(e)=>this.props.submitHandler(e, this.state)}></input>
            </form>
        )
    }
}

export default Form