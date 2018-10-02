import React, { Component } from "react";

export default class Form extends Component  {
  constructor(props){
    super(props)
    this.state={
      expand:false,
      name:"",
      image:"",
      calories:0,
      error:""
    }
  }
  submit=({name,calories,image})=>{
    if(!name||name=="")return this.setState({error:"El nombre es obligatorio"})
    if(!calories||calories=="")return this.setState({error:"Las calorias son obligatorias"})
    if(!image||image=="")return this.setState({error:"El imagen es obligatoria"})
    this.setState({expand:false})
    return this.props.onAddFood({name,calories,image})
  }
  expandForm=()=>{
    this.setState({expand:true})
  }
  render(){
    let {name,calories,image} = this.state
    return(
    <div>
      {!this.state.expand && (
        <div className="control">
            <button onClick={this.expandForm} className="button is-link">Add Food</button>
         </div>)}
      {this.state.expand && (
        <div>
          {this.state.error&&<p>{this.state.error}</p>}
          <Input onChange={e=>this.setState({name:e.target.value})} label="Name" type="text" placeholder="Name" required ></Input>
          <Input onChange={e=>this.setState({calories:e.target.value})} label="Calories" type="number" required></Input>
          <Input onChange={e=>this.setState({image:e.target.value})} label="Image" type="text" placeholder="Image Url" required></Input>
          <div className="control">
            <button onClick={()=>this.submit({name,calories,image})} className="button is-link">Submit</button>
          </div>
        </div>
      )}
      </div>
    )
  }
};

const Input = ({label,type,placeholder,value,onChange}) =>{
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input onChange={onChange} className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  )
}