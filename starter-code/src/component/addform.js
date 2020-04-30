import React, { Component } from "react";
import "bulma/css/bulma.css";

class Addform extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: "",
    };
  }


 addHandler = (e) => {
     const {
         name,
         value,
     } = e.target;
    
      this.setState({
        [name]: value,
      })
  }

  submitHandler = (e) => {
   
     e.preventDefault()
        const {
            createHandler
        } = this.props
        createHandler(this.state)
        this.setState  ({
            name: "",
            calories: "",
            image: "",
          });
  }


  render() {
      const {
          name,
          calories,
          image
      } = this.state;
    return (
      <div>
        <form onSubmit = {this.submitHandler}>
          <div className="field">
            <label className="label">Name</label>
          </div>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" name="name" value={name} onChange={this.addHandler}/>
          </div>

          <div className="field">
            <label className="label">Calories</label>
          </div>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" name="calories" value={calories} onChange={this.addHandler}/>
          </div>

          <div className="field">
            <label className="label">Image</label>
          </div>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" name="image" value={image} onChange={this.addHandler}/>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Addform;
