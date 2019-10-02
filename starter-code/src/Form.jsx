import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      name: "",
      calories: undefined,
      image: ""
    }
  }

  updateForm (e, input, type) {
    let newUpdatedState= {...this.state};
    newUpdatedState[input] = typeof input === Number? +e.target.value : e.target.value;
    this.setState(newUpdatedState);
  };

  sendState (e) {
    e.preventDefault();
    let newUpdatedState= {...this.state};
    this.setState(newUpdatedState)
    this.props.sendStateFromApp(this.state);
  };


  render() {
    return (
      <form className="form">
        <h3>Add new food</h3>
        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={e => this.updateForm(e, "name", "string")}/>
        <input type="text" name="calories" placeholder="calories" value={this.state.calories} onChange={e => this.updateForm(e, "calories", "number")}/>
        <input type="text" name="image" placeholder="image" value={this.state.image} onChange={e => this.updateForm(e, "image", "string")}/>
        <button onClick={e => this.sendState(e)}>Submit</button>
      </form>
    )
  }
}
