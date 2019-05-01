import React from 'react';

class FormFood extends React.Component {
  constructor() {
    super();
    this.state = {
      "display": "none"
    }
  }

  addNewFood() {
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

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.addNewFood()} style={{ padding: 20, backgroundColor: "blue", color: "white", fontSize: 20 }}>Add new food</button>
        <form style={{display: this.state.display}}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Number of Calories</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>
          <button className="button is-small is-success">Add</button>
        </form>
      </React.Fragment>
    )
  }
}

export default FormFood;
