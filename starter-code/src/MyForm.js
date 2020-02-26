import React from "react";


export default class MyForm extends React.Component{

    state = {
        image: "",
        name: "",
        calories: 0,
        quantityu: 0,
        
      };

      handleNameInput = (event) => {
    this.setState({
     name: event.target.value
    })
  }

  handleCaloriesInput = (event) => {
    this.setState({
      calories: event.target.value
    })

  }

  handleImageInput = (event) => {
    this.setState({
      image: event.target.value
    })
    
  }
  sendForm(e){
    e.preventDefault()
     this.props.addFood(this.state)
    
   
  }

    render(){

        return(
            <form onSubmit={this.handleFormSubmit}>

            <input type="text" name= "name" placeholder="name" value={this.state.name} onChange={(e) => this.handleNameInput(e)}></input>
            <input type="text" name="calories" placeholder="calories" value={this.state.calories} onChange={(e) => this.handleCaloriesInput(e)} ></input>
            <input type="text" name="image" placeholder="image" value={this.state.image} onChange={(e) => this.handleImageInput(e)}></input>

            <input type ="submit" value={"send form"} onClick= {e => this.sendForm(e)}></input>
            </form>
        )
    }
}

