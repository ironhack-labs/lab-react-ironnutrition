import { render } from '@testing-library/react';
import React, { Component } from 'react'

export default class AddNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
          fields: {
            name: "",
            calories: "",
            image: ""
           
          },

          showForm: false
          
        }
      }
    

    handleSubmit(event) {
        event.preventDefault();
        
          this.props.addFood(this.state.fields);
          this.setState({
            fields: {
              name: "",
              calories: "",
              image: "",

            
          },
         showForm:false
        })
        
        }

        handleChange(event) {
            const { name, value } = event.target;
            this.setState({
              fields: {
                ...this.state.fields,
                [name]: value
              }
              
            });
          }

        showForm() {

            const { fields } = this.state;
            
            return (

                <form onSubmit={(e) => this.handleSubmit(e)} >
                <div className="form-item">
                  <label htmlFor="title">Name </label>
                  <input  placeholder="Name.." type="text" name="name" value={fields.food} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-item">
                  <label htmlFor="year">Calories </label>
                  <input type="text" name="calories" value={fields.calories} onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-item">
                  <label htmlFor="runtime">Image Link </label>
                  <input type="text" name="image" value={fields.image} onChange={(e) => this.handleChange(e)} /> 
                </div>
               
                <button type="submit" >Create Food</button>
              </form>
            )

        }
        

        render() {
    
        return (
            <div>
            <button onClick = {() => this.setState({showForm:true})}>SHOW FORM</button>
            {this.state.showForm ? this.showForm() : null}
            </div>
      
    )
}
}
