import React, { Component } from 'react';

const initialState = {
  name: '',
  calories: '',
  image: '',
  error: false,
};

class NewForm extends Component {
  state = { ...initialState };

  onHandleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    const { name, calories, image } = this.state;

    event.preventDefault();

    if (name && Number(calories) && image.length > 0) {
      this.props.onAddFood({
        name,
        calories: Number(calories),
        image,
      })

      this.resetForm()
    } else {
      this.setState({ error: true });
    }
  };

  resetForm = () => {
    this.setState({ ...initialState });
  };

  render() {
    const { name, calories, image, error } = this.state;

    return (
      <div>
        <form className="NewForm" onSubmit={this.onSubmit}>
          <div className="mt-3 ml-4 newForm">
            <div className="field">
              <label htmlFor="name" className="label">
                Name
              </label>
              <div className="control">
                <input
                  value={name}
                  name="name"
                  id="name"
                  onChange={this.onHandleChange}
                  className="input"
                  type="text"
                  placeholder="Death by Chocolate Cake"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="calories" className="label">
                Calories
              </label>
              <div className="control">
                <input
                  value={calories}
                  name="calories"
                  id="calories"
                  onChange={this.onHandleChange}
                  className="input"
                  type="number"
                  placeholder="1500"
                />
              </div>

              <div className="field">
                <label htmlFor="image" className="label">
                  Upload image
                </label>
                <div className="control">
                  <input
                    value={image}
                    name="image"
                    id="image"
                    onChange={this.onHandleChange}
                    className="input"
                    type="text"
                    placeholder="image.png"
                  />
                </div>
              </div>
            </div>
          </div>
          {error && <p className="mt-3 ml-4 help is-danger">Invalid fields</p>}
          <button className="mt-3 ml-4 button is-success" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewForm;
