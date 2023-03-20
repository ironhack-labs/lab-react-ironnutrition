import { Component } from 'react';
import FormControl from '../FormComponents/FormControl';
import Input from '../FormComponents/Input';
import { REQUIRED_FIELD, URL_VALID } from '../../../utils/errors';
import { isRequiredValidator, urlValidator } from '../../../utils/validators';
import Button from '../../Button/Button';

const foodSchema = {
  name: (value) => {
    if (isRequiredValidator(value)) {
      return REQUIRED_FIELD;
    }
  },
  calories: (value) => {
    if (isRequiredValidator(value)) {
      return REQUIRED_FIELD;
    }
  },
  image: (value) => {
    if (isRequiredValidator(value)) {
      return REQUIRED_FIELD;
    }
    if (urlValidator(value)) {
      return URL_VALID;
    }
  },
  servings: (value) => {
    if (isRequiredValidator(value)) {
      return REQUIRED_FIELD;
    }
  },
};

const INITIAL_VALUES = {
  name: '',
  calories: 1,
  image: '',
  servings: 1,
};

export default class AddFoodForm extends Component {
  state = {
    values: { ...INITIAL_VALUES },
    errors: {},
  };

  onChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => {
      return {
        values: {
          ...prevState.values,
          [name]: value,
        },
      };
    });
  };

  isValidForm = () => {
    const { values } = this.state;
    const newErrors = {};

    Object.keys(values).forEach((valueKey) => {
      const error = foodSchema[valueKey](values[valueKey]); // Ejecuto el validador para cada uno de los campos

      if (error) {
        newErrors[valueKey] = error;
      }
    });

    const hasErrors = Object.keys(newErrors).length > 0;
    if (hasErrors) {
      this.setState({ errors: newErrors });
    }

    return !hasErrors;
  };

  onSubmit = (event) => {
    event.preventDefault();

    if (this.isValidForm()) {
      this.props.onSubmitFood(this.state.values); // Prop del padre para añadir un nuevo place al listado
      this.setState({ values: { ...INITIAL_VALUES }, errors: {} }); // Resetear el form
    }
  };

  render() {
    const { values, errors } = this.state;

    return (
      <div className="AddPlaceForm mb-3">
        <form onSubmit={this.onSubmit}>
          <FormControl text="Name" htmlFor="name" error={errors.name}>
            <Input
              name="name"
              id="name"
              value={values.name}
              error={errors.name}
              onChange={this.onChange}
            />
          </FormControl>

          <FormControl text="Image" htmlFor="image" error={errors.image}>
            <Input
              name="image"
              id="image"
              type="url"
              placeholder="http://food.com/image.jpg"
              value={values.image}
              error={errors.image}
              onChange={this.onChange}
            />
          </FormControl>

          <FormControl
            text="Calories"
            htmlFor="calories"
            error={errors.calories}
          >
            <Input
              name="calories"
              id="calories"
              type="number"
              min={1}
              value={values.calories}
              error={errors.calories}
              onChange={this.onChange}
            />
          </FormControl>

          <FormControl
            text="Servings"
            htmlFor="servings"
            error={errors.servings}
          >
            <Input
              name="servings"
              id="servings"
              type="number"
              min={1}
              value={values.servings}
              error={errors.servings}
              onChange={this.onChange}
            />
          </FormControl>

          <Button text="Create" />
        </form>
      </div>
    );
  }
}
