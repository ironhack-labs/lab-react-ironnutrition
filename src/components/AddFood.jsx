import React, { Component } from 'react';

class AddFood extends Component {

    constructor(props){
        super(props);

        this.state = {
                name: '',
                calories: '',
                image: '',
                isShown: false
        }
    }
    
    toggleAddFood = () => {
        this.setState({ isShown: !this.state.isShown })
    }
  
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addFood(this.state);
        this.setState({     
          name: '',
          calories: '',
          image: '',
          isShown: false
        })     
      }
     
      handleChange(event) {
        let { name, value } = event.target;
        this.setState({[name]: value});
      }

      divStyle (shown) {
        let display;
        shown ? display = {display: 'block'} : display = {display: 'none'};
        return display;
      }
     
      render(){
        return (
          <div>
            <button onClick={() => this.toggleAddFood() }>Add Food</button>
            
            <form style={this.divStyle(this.state.isShown)} onSubmit={this.handleFormSubmit}>
     
                <label>Name:</label>
                <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                <label>Calories:</label>
                <input type="text" placeholder="Calories" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
                <label>Image:</label>
                <input type="text" placeholder="Image Url" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />
                
                <button type="submit">Submit</button>
            </form>
          </div>
        )
      }
    }
     
    export default AddFood;