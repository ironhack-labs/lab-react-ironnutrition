import React from 'react';
import foods from './foods.json';

class FormFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "display": "none",
      newFood: {
        name: "",
        calories: "",
        image: ""
      },
      foods: foods
    }
  }

  showFormFood = () => {
    if (this.state.display === "none") {
      this.setState({
        "display": "block"
      })
    } else {
      this.setState({
        "display": "none"
      })
    }
  }

  changeFormData = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      newFood: {
        ...this.state.newFood,
        [name]: value
      }
    })
  }

  submitInfo = (e) => {
    e.preventDefault();
    console.log(this.state.newFood)
    this.props.addNewFood(this.state.newFood)

    this.setState({
      ...this.state,
      newFood: {
        name: "",
        calories: "",
        image: ""
      }
    })
  }

  render() {
    console.log(this.state.newFood)
    return (
      <React.Fragment>
        <button onClick={() => this.showFormFood()} style={{ padding: 20, backgroundColor: "blue", color: "white", fontSize: 20 }}>Add new food</button>
        <form style={{ display: this.state.display }} onSubmit={this.submitInfo}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                name="name"
                type="text"
                value={this.state.newFood.name}
                onChange={(e) => this.changeFormData(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Number of Calories</label>
            <div className="control">
              <input
                className="input"
                name="calories"
                type="text"
                value={this.state.newFood.calories}
                onChange={(e) => this.changeFormData(e)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
                className="input"
                name="image"
                type="text"
                value={this.state.newFood.image}
                onChange={(e) => this.changeFormData(e)}
              />
            </div>
          </div>
          <button className="button is-small is-success">Add</button>
        </form>
      </React.Fragment>
    )
  }
}

export default FormFood;
