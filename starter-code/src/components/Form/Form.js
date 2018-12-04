import React, { Component } from 'react'

export default class Form extends Component {
  constructor(){
    super()

    this.state = {
      name: "",
      calories: "",
      image: ""
  }

  }

  updateDetailsHandler = (e) => {
    e.preventDefault();
    this.setState({ ...this.state }, () => {
        this.props.submitHandler(this.state)
    })
}

  changeNameHandler = (e) => {
    this.setState(
        { ...this.state, name: e.target.value }
    )
}

  changeCaloriesHandler = (e) => {
    this.setState(
        { ...this.state, calories: e.target.value }
    )
}

  changeImageHandler = (e) => {
    this.setState(
        { ...this.state, image: e.target.value }
    )
}


  render() {
    return (
      <div>
        <div className="control">
         <label className="label">Name</label>
            <input className="input" type="text" value={this.state.name} onChange={this.changeNameHandler}/>
         <label className="label">Number of calories</label>
            <input className="input" type="text" value={this.state.calories} onChange={this.changeCaloriesHandler}/>
         <label className="label">Image</label>
            <input className="input" type="text" value={this.state.image} onChange={this.changeImageHandler}/>
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.updateDetailsHandler}>Submit</button>

          {
                    (this.state.updated) ? <p style={{ color: 'green' }}>Your data has been updated</p> : ""
                }
        </div>
      </div>
    )
  }
}
