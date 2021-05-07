import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: '',
        calories: '',
        image: '',
        quantity: ''
      }
    };
  }

  componentDidMount() {

  };

  submit(event) {
    event.preventDefault();
    this.props.addFood(this.state.fields);
    this.setState({
      fields: {
        name: '',
        calories: '',
        image: '',
        quantity: ''
      }
    });
  }

  change(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      }
    });
  }

  render() {
    const { name, calories, image, quantity } = this.state.fields;

    return (
      <div>
        <form className='food-form' onSubmit={(event) => this.submit(event)}>
          <div className='food-item'>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              className='food-input'
              placeholder='Food name'
              name='name'
              value={ name }
              onChange={(event) => this.change(event)}
            />
          </div>
          <div className='food-item'>
            <label htmlFor='name'>Calories: </label>
            <input
              type='text'
              className='food-input'
              placeholder='Food calories'
              name='calories'
              value={ calories }
              onChange={(event) => this.change(event)}
            />
          </div>
          <div className='food-item'>
            <label htmlFor='name'>Image: </label>
            <input
              type='text'
              className='food-input'
              placeholder='Food image'
              name='image'
              value={ image }
              onChange={(event) => this.change(event)}
            />
          </div>
          <div className='food-item'>
            <label htmlFor='name'>Quantity: </label>
            <input
              type='text'
              className='food-input'
              placeholder='Food quantity'
              name='quantity'
              value={ quantity }
              onChange={(event) => this.change(event)}
            />
          </div>
          <button type='submit'> Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
