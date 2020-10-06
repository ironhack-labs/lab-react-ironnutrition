import React from 'react';
import InputLabelHorizontal from './components/InputLabelHorizontal';

const validations = {
  name: (value) => value.length > 0,
  calories: (value) => value.length > 0,
  image: (value) => value.length > 0,
};

class FormNewProduct extends React.Component {
  state = {
    data: {
      name: '',
      calories: '',
      image: '',
    },
    error: {
      name: true,
      calories: true,
      image: true,
    },
    touch: {},
    success: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    const isValid = validations[name](value);

    this.setState({
      data: {
        ...this.state.data,
        [name]: value,
      },
      error: {
        ...this.state.error,
        [name]: !isValid,
      },
    });
  };

  handleBlur = (event) => {
    const { name } = event.target;
    this.setState({
      touch: {
        ...this.state.touch,
        [name]: true,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setNewFood(this.state.data);
    this.setState({
      success: true,
    });
  };

  handleClose = () => {
    this.setState((oldState) => ({
      success: !oldState.success,
      data: Object.values(oldState.data).map((val) => (val = '')),
    }));
  };

  render() {
    const { data, error, touch, success } = this.state;
    const isError = Object.values(error).some((err) => err);

    return success ? (
      <div className="notification is-primary">
        <button className="delete" onClick={this.handleClose}></button>
        New Food has been added, close this message for adding more foods
      </div>
    ) : (
      <form onSubmit={this.handleSubmit}>
        <InputLabelHorizontal
          name="name"
          type="text"
          value={data.name}
          error={error['name']}
          touch={touch['name']}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <InputLabelHorizontal
          name="calories"
          type="number"
          value={data.calories}
          error={error['calories']}
          touch={touch['calories']}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <InputLabelHorizontal
          name="image"
          type="text"
          value={data.image}
          error={error['image']}
          touch={touch['image']}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />

        <button type="submit" className="button is-primary" disabled={isError}>
          Save
        </button>
      </form>
    );
  }
}
export default FormNewProduct;
