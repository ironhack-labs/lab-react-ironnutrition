import React, { Component } from "react";


export default class AddFood extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      calories: "",
      img: ""
    };
  }


handleChange(e){
    this.setState({ name: e.target.value1, calories: e.target.value2, img: e.target.value3 });
 }


handleAdd(e){
    e.preventDefault();
    if(this.state.name == ''){
        console.warn('Cannot add an empty item');
        return;
    }
    this.props.addItem(this.state.name);
    this.setState({name:'', calories:'', img:''})
}


  render() {
    return (
      <form className={this.props.className} onSubmit={e=>this.props.AddFood(e,this.state)}>
        <div className="field">
          <p>Name</p>
          <div>
          <input className="input" value1={this.state.name} onChange={this.handleChange.bind(this)} placeholder="Name"/>
          </div>
          <p>Number of calories</p>
          <div>
          <input className="input" value2={this.state.calories} onChange={this.handleChange.bind(this)} placeholder="Calories"/>
          </div>
          <p>image</p>
          <div>
          <input className="input" value3={this.state.img} onChange={this.handleChange.bind(this)} placeholder="Image"/>
          </div>
          <button className="button is-info" onClick={() => this.handleAdd()}>Add</button>
        </div>
      </form>
    );
  }
}