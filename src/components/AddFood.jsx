import React, { Component } from 'react';

class AddFood extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.onAddFood} className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="name"
            ></input>
          </div>
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="calories"
            ></input>
          </div>
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              name="image"
            ></input>
          </div>

          <div class="control">
            <button class="button is-primary">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default AddFood;
