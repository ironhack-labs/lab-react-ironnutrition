import React, { Component} from 'react';

export default class AddFoodForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      name: '',
      calories: '',
      image: '',
      quantity: 0
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({     
      name: '',
      calories: '',
      image: '',
      showForm: false
    })
   
  }

  showForm = () => {
    this.setState({ showForm: true});
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value})
  }

  render() {
    return (
      <div className="">
        <button className="button is-info has-margin-bottom-30" onClick={this.showForm}>Add new food</button>
          { ( this.state.showForm === true ) &&
              <form className="has-margin-bottom-30" onSubmit={this.handleFormSubmit}>
                  <input className="input is-info has-margin-bottom-10" type="text" name="name" placeholder="Food name" value={this.state.name} onChange={this.handleChange}/> 
                  <input className="input is-info has-margin-bottom-10" type="text" name="calories" placeholder="Calories" value={this.state.calories} onChange={this.handleChange}/> 
                  <input className="input is-info has-margin-bottom-10" type="text" name="image" placeholder="Image" value={this.state.image} onChange={this.handleChange}/> 
                  <button className="button is-info is-outlined" type="submit">Submit</button>
              </form>
          }
      </div>
    );
  }
}



