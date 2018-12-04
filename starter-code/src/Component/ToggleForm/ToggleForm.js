import React, { Component } from "react";

class ToggleForm extends Component {
  constructor() {
    super();
    this.state = { open: false, name:'', calories: 0, image: '' };
  }
  switchState = () => {
    this.setState({ open: !this.state.open });
  };

  handleChangeName(e) {
    this.setState({name:e.target.value})
    console.log(e.target.value)
  }

  handleChangeCalories(e) {
    this.setState({calories: e.target.value})
  }
  
  handleChangeImage(e) {
    this.setState({image: e.target.value})
  }

  render() {
    let displayForm;
    if (this.state.open) {
      displayForm = "block";
    } else {
      displayForm = "none";
    }

    return (
      <div>
        <button onClick={this.switchState}>Add new Food</button>
        <div style={{ display: displayForm }}>
          <form onSubmit={e => this.props.addFood(e, this.state)}>
            <input type="text" placeholder="name" onChange={e=>this.handleChangeName(e)}/>
            <input type="text" placeholder="calories" onChange={e=>this.handleChangeCalories(e)}/>
            <input type="file" onChange={e=>this.handleChangeImage(e)}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default ToggleForm;
