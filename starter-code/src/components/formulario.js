import React, { Component } from "react";

class Formulario extends Component {
    constructor(props){
      super(props)
      this.state = {
        name: "",
        calories: "",
        pictureUrl: "",
        quantity: 0
      }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state); 
        this.setState({
          name: '',
          calories: '',
          pictureUrl: '',
          quantity: 0
        })  
      }


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
          calories: event.target.value
        })
      }
    
      handleQuantityInput = (event) => {
        this.setState({
          quantity: event.target.value
        })
      }
    
    
    render(){
    return( 
  
            <div className="columns">
                <div className="column">
                    <form onSubmit={this.handleFormSubmit}>

                        <label>
                        <p className="text">Name:</p>
                            <input  className="input is-rounded" type="text" name="name" value={this.state.name} onChange={this.handleNameInput} />
                        </label>
                        <br/>       
                        <label className="text">
                        <p className="text">Calories:</p> 
                            <input  className="input is-rounded" type="text" name="calories" value={this.state.calories} onChange={this.handleCaloriesInput} />
                        </label>
                        <br/>  
                        <label className="text">
                        <p className="text">Image:</p>
                            <input  className="input is-rounded" type="text" name="pictureUrl" checked={this.state.image} onChange={this.handleImageInput} />
                        </label>
                        <br/>  
                        <label className="text">
                        <p className="text">Quantity:</p> 
                            <input  className="input is-rounded" type="text" name="quantity" value={this.state.quantity} onChange={this.handleQuantityInput} />
                        </label>
                        <br/>  
                        <button className = "btn btn-boton">Añadir</button><br/>
                    </form>

            </div>
        </div>    

    )
        }
}

export default Formulario;