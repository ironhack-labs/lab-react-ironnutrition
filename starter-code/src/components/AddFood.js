import React from "react";

class AddFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", calorie: 0, image: "" };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({ name: "", calorie: 0, image: "" });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.calories]: event.target.value,
      [event.target.image]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div class="field is-horizontal">
            <div class="control">
              <button class="button is-info">Add new food</button>
            </div>

            <div class="field-body">
              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                    placeholder="Name"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user" />
                  </span>
                </p>
              </div>

              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="number"
                    name="calories"
                    value={this.state.calories}
                    onChange={e => this.handleChange(e)}
                    placeholder="Number of calories"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user" />
                  </span>
                </p>
              </div>

              <div class="field">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="text"
                    name="image"
                    value={this.state.image}
                    onChange={e => this.handleChange(e)}
                    placeholder="Image URL"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddFood;
