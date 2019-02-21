import React, { Component } from 'react';

class NewForm extends Component {
    render(){
      return (
        <form className="box" onSubmit={(event)=>this.props.addFood(event)}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" name="name" placeholder="Name your food" />
             </div>
          </div>
          <div className="field">
            <label className="label">Calories</label>
            <div className="control">
              <input className="input" type="number" name="cal" placeholder="0" />
             </div>
          </div>
          <div className="field">
            <label className="label">Image Path</label>
            <div className="control">
              <input className="input" type="url" name="img" placeholder="Path to food image" />
             </div>
          </div>
          <button type="submit" className="button is-primary">SUBMIT</button>
        </form>
      )
    }
  }

export default NewForm;