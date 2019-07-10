import React, { Component } from 'react'

export default class AddFood extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: {
                name:"new food",
                image: "https://image.shutterstock.com/display_pic_with_logo/136306/722718082/stock-photo-healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereals-leaf-vegetable-on-722718082.jpg",
                calories:50,
                quantity:0,
            },
            displayForm: false,
        }
       
    }

    handleChange =(event) =>{
        let { name, value } = event.target;
        this.setState({ value: {[name]: value}});
    }

    handleSubmit=(event) =>{
        event.preventDefault()
        this.props.addTheFood(this.state.value);
        this.setState({displayForm: !this.state.displayForm})
        alert('form submitted ' , this.state.displayForm);
    
    }

    render() {
        return (
            <React.Fragment>
                {this.state.displayForm}
                <form className="add-food-form" onSubmit={this.handleSubmit} >
                    <label> Name: </label>
                    <input type="text" name="name" value={this.state.value.name} onChange={this.handleChange} required />

                    <label> Calories: </label>
                    <input type="Number" name="calories"value={this.state.value.calories} onChange={this.handleChange} required/>

                    <label> Image: </label>
                    <input type="text" name="image" value={this.state.value.image} onChange={this.handleChange} required/>
                    
                    <button type="submit" disabled={this.state.displayForm}>Submit</button>
            </form>
          </React.Fragment>
        )
    }
}
