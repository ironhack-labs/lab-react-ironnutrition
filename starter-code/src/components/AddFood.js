import React from "react";

class AddFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", calorie: 0, image: "" };
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({ name: "", calorie: 0, image: "" }); // form reset
  };

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <div className="control">
          <form onSubmit={this.handleFormSubmit}>
            <div className="field is-horizontal">
              <div className="field-body">

                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={e => this.handleChange(e)}
                      placeholder="Name"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </p>
                </div>

                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      className="input"
                      type="number"
                      name="calories"
                      value={this.state.calories}
                      onChange={e => this.handleChange(e)}
                      placeholder="Number of calories"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </p>
                </div>

                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      className="input"
                      type="text"
                      name="image"
                      value={this.state.image}
                      onChange={e => this.handleChange(e)}
                      placeholder="Image URL"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user" />
                    </span>
                  </p>
                </div>

                <div className="control">
                  <button className="button is-info">SUBMIT</button>
                </div>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddFood;
