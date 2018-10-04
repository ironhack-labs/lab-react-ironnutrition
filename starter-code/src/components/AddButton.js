import React, { Component } from 'react';
import Form from './Form'

class AddButton extends Component {

  

  render() {
   
    
  

    if ( this.props.form.showForm === false) {
      return (<div>
        <br/>
        <button  className="button is-info" onClick= {() => {this.props.form.FormFunc()} } >ADD new food</button>
        <br/>
        <br/>
        
        </div>
      );
    }
    else {
      return(
        <div>
        <br/>
        <Form form = {this.props.form } food = {this.props.food } addFood = {this.props.addFood}></Form>
        
        </div>
      )
    }

    
  }
}

export default AddButton;