import React,{Component } from "react";

export default class Today extends Component{
  constructor(props){
    super(props)
    this.state={list:{}}
  }
  render(){
    const list={}
    const total=this.props.list.reduce((t,l) => {
      if(!list[l.name])list[l.name]={...l,items:0}
      list[l.name].items+=+l.quantity
      return t+l.calories
    },0);
    return(
      <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
          {Object.values(list).map(l=><li key={l.name} >{l.items} {l.name} = {l.calories*l.items} cal <button name={l.name} onClick={e=>this.props.onRemoveList(e.target.name)} >Remove</button></li>)}
        </ul>
        <strong>Total: {total} cal</strong>
      </div>
    )
  }
}
