import React, { Component } from 'react';


class AddFood extends Component {

    constructor(props){
        super(props);
  
        this.state = { 
          name: '',
          calories: '',
          image: 'https://www.rd.com/wp-content/uploads/2018/04/9-Foods-You-Should-Never-Eat-Before-Bed-760x506.jpg'
        }
    }
   
    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)
        this.setState({
            name: '',
            calories: ''
        })
    }
  
    handleChange(e) {
      let { name, value } = e.target;
      this.setState({[name]: value});
    }
  
    render(){
      return (
        <div>
          <form onSubmit={this.handleFormSubmit}>
  
              <label>Name:</label>
              <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
              <label>Calories:</label>
              <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
        
              <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }
  
  export default AddFood;