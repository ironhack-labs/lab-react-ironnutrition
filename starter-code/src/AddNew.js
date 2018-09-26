import React, { Component } from 'react';

class AddFood extends Component {
    constructor(props){
        super(props)
        this.state = {
            nameField: "",
            caloriesField: "",
            imageField: ""
        }
    }
  // the following 3 functions update the state as you type so that you can type stuff into the form
  nameFieldChange = (theEventObject) => {
    this.setState({nameField: theEventObject.target.value})
  }
  caloriesFieldChange = (theEventObject) => {
    this.setState({caloriesField: theEventObject.target.value})
  }
  imageFieldChange = (theEventObject) => {
    this.setState({imageField: theEventObject.target.value})
  }


    render(){
        return(
 
        <form onSubmit = {(e)=> this.props.addNew(e, this.state)}>
        <h2>Add A New Food</h2>
        <label>Name</label>
        <input type="text" onChange={(e)=> this.nameFieldChange(e)} value={this.state.titleField}></input>

        <label>Calories</label>
        <input type="text" onChange={(e)=> this.caloriesFieldChange(e)} value={this.state.directorField}></input>

        <label>Image</label>
        <input type="text" onChange={(e)=> this.imageFieldChange(e)} value={this.state.ratingField}></input>

        <button>Submit</button>
      </form>

        )

    }


}


export default AddFood;