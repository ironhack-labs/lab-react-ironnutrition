import React, { Component } from "react";
import Column from "./Column";
import FormField from "./FormField";
import BulmaButton from "./BulmaButton";

export default class AddFood extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      calories: '',
      image: ''
    }
  }
  handleChange(e, name){
    this.setState({[name]: e.target.value});
  }
  handleClose() {
    this.setState({name:'', calories: '', image: ''});
    this.props.onClose(false);
  }
  handleAdd(){
    if((this.state.name === '') || (this.state.calories === '') || (this.state.imagen === '')){
      console.warn('Cannot add an empty fields');
      return;
    }
    let id = Number(this.props.foods[this.props.foods.length - 1]._id) + 1;
    this.props.addFood({"_id": id, "name": this.state.name, "calories": this.state.calories, "image": this.state.image, "quantity": 0});
    this.handleClose();
  }
  render() {
    return (
      <Column className={"formSection " + (this.props.show ? "" : "hide")}>
        <FormField label="Name" type="text" placeholder="e.g Artichokes" onChange={(e)=>this.handleChange(e, "name")} value={this.state.name}/>
        <FormField label="Calories" type="text" placeholder="e.g. 47" onChange={(e)=>this.handleChange(e, "calories")} value={this.state.calories}/>
        <FormField label="Image" type="text" placeholder="e.g. https://bit.ly/2HkSnmW" onChange={(e)=>this.handleChange(e, "image")} value={this.state.image}/>
        <div className="actions">
          <BulmaButton isWarning className="is-rounded submitBtn" onClick={()=>{this.handleClose()}}>CLOSE</BulmaButton>
          <BulmaButton isPrimary className="is-rounded submitBtn" onClick={()=>{this.handleAdd()}}>ADD</BulmaButton>
        </div>
      </Column>
    );
  }
}
