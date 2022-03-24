import { Component } from 'react';


const initialState = {
  name: '',
  calories: '',
  image: '',
  error: false,
};

class NewForm extends Component {
    state = { ...initialState };
      
  onSubmit = (event) => {
      const { name, calories, image } = this.state;

    event.preventDefault();

    if (name && calories && image > 1) {
      this.props.onAddFood({
        name,
        calories,
        image,
      });

      this.resetForm();
    } else {
      this.setState({ error: true });
    }
  };

  resetForm = () => {
    this.setState({ ...initialState });
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, calories, image } = this.state;

    return (
      <form className="NewForm" onSubmit={this.onSubmit}>
        <div className="mt-3 ml-4 newForm">
          <div className="field">
            <label className="label">Name</label>
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
            <label className="label">Calories</label>
            <div className="control">
              <input
                value={calories}
                name="calories"
                id="calories"
                onChange={this.onHandleChange}
                className="input"
                type="text"
                placeholder="1500"
              />
            </div>

            <div className="field">
              <label className="label">Upload image</label>
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
        <button className="mt-3 button is-success">Submit</button>
      </form>
    );
  }
}

export default NewForm;
