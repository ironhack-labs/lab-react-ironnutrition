import React, { Component } from "react";

class Form extends Component {

    state = {
        name: "",
        calories : "",
        images: ""
    }

    
    handleSubmit = (e) => {

        e.preventDefault();


    }


  render() {
    return (
      <div>
        <form action="">
          <div className="field">
            <label className="label">Name:</label>
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>

          <div className="field">
            <label className="label">Calories:</label>
            <input className="input" type="text" placeholder="e.g Alex Smith" />
          </div>

          <div className="field">
            <label className="label">Image Url:</label>
            <input className="input" type="text" placeholder="e.g Alex Smith" />

            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
