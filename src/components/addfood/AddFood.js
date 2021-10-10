import React from 'react';
import './AddFood.css';

class AddFood extends React.Component {
  state = {
    name: '',
    calories: '',
    image: '',
    formDisplayed: false,
  };

  // handleNameInput = (event) => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };

  // handleCaloriesInput = (event) => {
  //   this.setState({
  //     calories: event.target.value,
  //   });
  // };

  // handleImageUrl = (event) => {
  //   this.setState({
  //     image: event.target.value,
  //   });
  // };

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.addFoodItem(this.state);
  //   console.log(this.state);
  //   this.setState({
  //     name: '',
  //     calories: '',
  //     image: '',
  //   });
  // };

  onSubmitHandler = (event) => {
    // this line is mandatory to prevent default html submit button
    event.preventDefault();
    this.props.addFoodItem(this.state);

    this.setState({
      name: '',
      calories: '',
      image: '',
      formDisplayed: false,
    });
  };

  onChangeHandler = (event) => {
    let { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      function () {
        console.log(this.state.name);
      }
    );
  };

  onClickAddNewHandler = () => {
    this.setState({
      formDisplayed: !this.state.formDisplayed,
    });
  };

  addNewFoodButton = () => {
    this.setState({
      formDisplayed: true,
    });
  };

  render = () => {
    return (
      <div className='form-container'>
        <button onClick={this.addNewFoodButton}>Add New Food</button>
        {this.state.formDisplayed && (
          <form onSubmit={this.onSubmitHandler} className='form-add-new-food'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.onChangeHandler}
            />

            <label>Calories</label>
            <input
              type='text'
              name='calories'
              value={this.state.calories}
              onChange={this.onChangeHandler}
            />

            <label>Image:</label>
            <input
              type='text'
              name='image'
              value={this.state.image}
              onChange={this.onChangeHandler}
            />
            <button>Submit</button>
          </form>
        )}
      </div>
    );
  };
}

export default AddFood;
