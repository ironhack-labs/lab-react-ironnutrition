import React from 'react';
import faker from 'faker';

const validations = {
  name: (value) => {
    let message;
    if (!value) {
      message = 'Name is required';
    }
    return message;
  },
  calories: (value) => {
    let message;
    if (!value) {
      message = 'Calories are required';
    }
    return message;
  }
}


class FoodForm extends React.Component {

  state = {
    food: {
      name: '',
      calories: '',
      quantity: 0,
      image: faker.image.food()
    },
    errors: {
      name: validations.name(''),
      calories: validations.calories(''),
    }
  }

  handleInputChange(event) {
    const inputName = event.target.name;
    const value = event.target.value;
    console.log('target', event.target);
    console.log('inputName', inputName);
    console.log('value', value);
    this.setState((prevState) => ({
      food: {
        ...prevState.food,
        [inputName]: value,
      },
      errors: {
        ...prevState.errors,
        [inputName]: validations[inputName] ? validations[inputName](value) : undefined,
      }
    }))
  }

    handleShowForm() {
        this.setState({
            form: !this.state.form
        })
    }

    isFormValid() {
    const { errors } = this.state;
    return !Object.keys(errors).some(key => errors[key] !== undefined);
  }

  handleRandomImageClick() {
    this.setState(({ food }) => ({
      food: {
        ...food,
        image: faker.image.food()
      }
    }))
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.isFormValid()) {
      const { food } = this.state;
      this.props.onCreateFood(food);
    }
    
  }

  render() {
    const { food, errors } = this.state;
    return (
      <div className="row mb-3">
        <div className="col-12 col-sm-2">
          <img src={food.image} alt={food.name} className="img-thumbnail w-100"/>
        </div>
        <div className="col-12 col-sm-10">
          <form onSubmit={(event) => this.handleSubmit(event)}>

            <div className="input-group mb-1">
              <span className="input-group-text"><i className="fa fa-user fa-fw" /></span>
              <input name="name" type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Food Name" value={food.name}
                onChange={(event) => this.handleInputChange(event)} />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="input-group mb-1">
              <span className="input-group-text"><i className="fa fa-phone fa-fw" /></span>
              <input name="calories" type="text" className={`form-control ${errors.calories ? 'is-invalid' : ''}`} placeholder="Calories" value={food.calories}
                onChange={(event) => this.handleInputChange(event)} />
              {errors.calories && <div className="invalid-feedback">{errors.calories}</div>}
            </div>

            <div className="input-group mb-1">
              <span className="input-group-text"><i className="fa fa-picture-o fa-fw" /></span>
              <input name="image" type="text" className="form-control" placeholder="Image url..." value={food.image}
                onChange={(event) => this.handleInputChange(event)} />
              <button className="btn btn-outline-secondary" type="button" onClick={() => this.handleRandomImageClick()}><i className="fa fa-refresh" /></button>
              {errors.image && <div className="invalid-feedback">{errors.image}</div>}
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-sm-4">
                <button className="btn btn-primary w-100" onClick={() => this.handleShowForm()}>Create New Food</button>
              </div>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

FoodForm.defaultProps = {
  onCreateFood: () => {}
}


export default FoodForm;
