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

            <input
              className="input is-info"
              type="text"
              placeholder="Name"
              name='name'
              value={ name }
              onChange={(event) => this.change(event)}
              />

          </div>
          <div className='food-item'>

            <input
              className="input is-info"
              type="text"
              placeholder="Calories"
              name='calories'
              value={ calories }
              onChange={(event) => this.change(event)}
            />

          </div>
          <div className='food-item'>

            <input
              className="input is-info"
              type="text"
              placeholder="Image URL"
              name='image'
              value={ image }
              onChange={(event) => this.change(event)}
            />

          </div>
          <div className='food-item'>

            <input
              className="input is-info"
              type="text"
              placeholder="Quantity"
              name='quantity'
              value={ quantity }
              onChange={(event) => this.change(event)}
            />

          </div>
          <button className="button is-info" type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
