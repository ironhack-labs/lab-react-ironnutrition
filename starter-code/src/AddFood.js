import React, { Component } from "react";


 class AddFood extends Component
{
  constructor(){
    super();
    this.state = {
      name: "",
      calories: "",
      image: "",
      error: ""
    }
  }

  handleSubmit(){
    let { name, calories, image} = this.state;
    this.setState({error: '', name:'', calories:'', image:''});
    this.props.newFood({name, calories, image});
  }
  

  render(){
    let {name, calories, image, error} = this.state;
    return (
      <div className="box">
      <p style={{color:"red"}}>{error}</p>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text"value={name} onChange={(e) => this.setState({name:e.target.value})} />
        </div>
      </div>
      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input className="input" type="text" value={calories} onChange={(e) => this.setState({calories:e.target.value})}  />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input className="input" type="text" value={image} onChange={(e) => this.setState({image:e.target.value})} />
        </div>
      </div>
      <button className="button is-link" onClick={this.handleSubmit.bind(this)}>Add new food</button>
    </div>
    )
  }
}


export default  AddFood;