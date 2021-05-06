import React, { Component } from 'react'
import "./Form.css";


export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            fields: {
                name: "",
                calories: "",
                image: "",
                quantity: ""
            }            
        }
    }
     handleSubmit(event){
         event.preventDefault();
         
             this.props.addFood(this.state.fields);
             this.setState({
                fields:{
                    name: "",
                    calories: "",
                    image: "",
                    quantity: ""
                }
             })
             this.props.patata();
            
         
     }
    
    handleChange(event){
        const { name, value } = event.target;
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: value
            }
        });
    }

    toggleForm = () => {
      this.setState({ showForm: !this.state.showForm})    
    }
   
    //TODO:TODO:
    // isValid(){
    //     const { errors } = this.state;
    //     return !Object.keys(errors).some(key => errors[key]);
    // }

    render(){
        const { fields, errors } = this.state;
        return (
          <form onSubmit={(e) => this.handleSubmit(e)} style={{ marginBottom: 50 }} >
            <div className="form-item">
              <label htmlFor="name">Name: </label>
              <input placeholder="Name..." type="text" name="name" value={fields.name} onChange={(e) => this.handleChange(e)} />              
            </div>
            <div className="form-item">
              <label htmlFor="calories">Calories: </label>
              <input placeholder="Calories..." type="text" name="calories" value={fields.calories} onChange={(e) => this.handleChange(e)} />              
            </div>
            <div className="form-item">
              <label htmlFor="image">Image: </label>
              <input placeholder="Picture link"type="text" name="image" value={fields.image} onChange={(e) => this.handleChange(e)} />              
            </div>
            <div className="form-item">
              <label htmlFor="quantity">Quantity: </label>
              <input placeholder="Quantity" type="text" name="quantity" value={fields.quantity} onChange={(e) => this.handleChange(e)} />              
            </div>
            
            <button type="submit"> Add food </button>             
          </form>
        ) 
    }
}