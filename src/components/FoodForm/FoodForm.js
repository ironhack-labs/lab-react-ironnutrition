import React from 'react';
import './FoodForm.css';

const validators = {
  name: (value) => {
    let message;
    if (!value) {
      message = 'Name is required';
    } else if (value.length < 3) {
      message = 'Invalid name';
    }

    return message;
  },
  calories: (value) => {
    let message;
    if (!value) {
      message = 'Calories is required';
    } else if (value.length < 1) {
      message = 'Invalid calories';
    }

    return message;
  },
  image: (value) => {
    let message;
    if (!value) {
      message = 'Image is required';
    } else if (value.length < 3) {
      message = 'Invalid image';
    }
    return message;
  },
  form: () => {
    return 'Fill all the inputs!'
  }
};

export default class FoodForm extends React.Component {
  state = {
    fields: {
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    },
    errors: {
      name: null,
      calories: null,
      image: null,
    },
  };

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid() && this.hasContent()) {
      this.props.addFood(this.state.fields);
      this.setState({
        fields: {
          name: '',
          calories: '',
          image: '',
          quantity: 0,
        },
        errors: {
          name: null,
          calories: null,
          image: null,
        },
      });
    } else {
      this.setState({
        fields: {
          ...this.state.fields,
        },
        errors: {
          ...this.state.errors,
        },
      });
    }
  }

  isValid() {
    const { errors } = this.state;
    return !Object.keys(errors).some((key) => errors[key]);
  }

  hasContent() {
    const { fields } = this.state;
    return Object.keys(fields).filter((key) => (fields[key].length > 0 ? true : false )).length >= 3;
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value,
      },
      errors: {
        ...this.state.errors,
        [name]: validators[name](value),
      },
    });
  }

  render() {
    const { fields, errors } = this.state;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="form-item">
          <label htmlFor="name">Name:</label>
          <input
            className={`${errors.name ? 'error-input' : ''}`}
            placeholder="Name..."
            type="text"
            name="name"
            value={fields.name}
            onChange={(e) => this.handleInputChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="name">Calories:</label>
          <input
            className={`${errors.calories ? 'error-input' : ''}`}
            placeholder="Introduce calories"
            type="text"
            name="calories"
            value={fields.calories}
            onChange={(e) => this.handleInputChange(e)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="name">Image:</label>
          <input
            className={`${errors.image ? 'error-input' : ''}`}
            placeholder="Add Image"
            type="text"
            name="image"
            value={fields.image}
            onChange={(e) => this.handleInputChange(e)}
          />
        </div>
        <button disabled={!this.isValid()} type="submit">
          Create food
        </button>
      </form>
    );
  }
}
