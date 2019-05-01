import React from "react";

export default class Form extends React.Component {
  state = {
    name: undefined,
    calories: undefined,
    image: undefined
  };

  colletFormInfo(e, key) {
    const newState = { ...this.state };
    newState[key] = e.target.value;
    this.setState(newState);
  }

  addFood(e) {
    e.preventDefault();
    this.props.newFood(this.state);
  }

  render() {
    return (
      <div className={this.props.modalClass}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">New Food</p>
          </header>
          <section className="modal-card-body" />
          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="text"
                placeholder="name"
                onChange={e => this.colletFormInfo(e, "name")}
                name="name"
                value={this.state.name}
                required
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="text"
                placeholder="calories"
                onChange={e => this.colletFormInfo(e, "calories")}
                name="calories"
                value={this.state.calories}
                required
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input
                className="input is-info"
                type="text"
                placeholder="image"
                onChange={e => this.colletFormInfo(e, "image")}
                name="image"
                value={this.state.image}
                required
              />
            </div>
          </div>

          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={(e) => this.addFood(e)}
            >
              Submit
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
