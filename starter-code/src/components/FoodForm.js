import React, { Component } from 'react';

class FoodForm extends Component {
    constructor(props) {
        super(props);

        this.state =  {
            image: "",
            name: "",
            calories: ""
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state);
        this.setState({     
          image: '',
          name: '',
          calories: 0,
        })     
      }

      handleChange(event) {
        let { name, value } = event.target;
        this.setState({[name]: value});
      }
    
      render() {
          return (
              <div>
                <form onSubmit={this.handleFormSubmit}>    
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />
                    <label>Calories:</label>
                    <input type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />                  
                    <input type="submit" value="Submit" />
                </form>
              </div>    
          )
      }

}

export default FoodForm;