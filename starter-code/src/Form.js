import React, { Component } from 'react'
import './index.css'
import 'bulma/css/bulma.css';
export class Form extends Component {

constructor(props){
        super(props);
  
        this.state = { 
          name: '',
          calories: '',
          image: '',
          quantity: 0
        }
    }

submitForm = (e) =>{
        e.preventDefault(); 
    
        this.setState({
          user: null,
          username: this.state.name,
          usercalories: this.state.calories,
          userimage: this.state.image,
          userQuantity: this.state.quantity
        })
      }

updateInput = (e) =>{
       this.setState({
        [e.target.name]: e.target.value
        }, ()=>{
          console.log(this.state)
        })
    }

closePopupSubmit = (e) => {
e.preventDefault()
let food = {
name: this.state.name,
calories: this.state.calories,
image: this.state.image,
quantity: this.state.quantity
} 
this.props.closePopup(food);
} ;



render() {
        return (
    <div>
       <div className='popup'>  
       <div className='popup-inner'> 
       <form onSubmit = {this.closePopupSubmit}>
       <div className="field">
         <label>Name:</label>
         <div className="control">
          <input type="text" name="name" value={this.state.name} onChange = {this.updateInput} />
      </div>
      </div>
      <div className="field">
          <label>Calories:</label>
          <div className="control">
          <input type="text" name="calories" value={this.state.calories} onChange = {this.updateInput} />
      </div>
      </div>
      <div className="control">
      <label>Quantity:</label>
          <input
            className="input"
            type="number" dvalue={this.state.quantity}
          />
        </div>
      <div className="field">
      <label>Image:</label>
      <div className="control">
      <input type="file" name="image" value={this.state.image} onChange = {this.updateInput} />   
      </div>
      </div> 
      <input className="button is-small is-success" type="submit" value="Submit"/>
      </form>
      </div>  
      </div> 
  
                
            </div>
        )
    }
}

export default Form


 
 