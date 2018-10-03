import React,{Component } from "react";

export default class Today extends Component{
  constructor(props){
    super(props)
    this.state={list:{}}
  }
  addElement(element){
    this.props.list[element.name]=element
    this.setState({list:this.state.list})
  }
  render(){
    const list={}
    const total=this.props.list.reduce((t,l) => {
      if(!list[l.name])list[l.name]={...l,items:0}
      list[l.name].items+=+l.quantity
      return t+l.calories
    },0);
    return(
      <div class="column content">
        <h2 class="subtitle">Today's foods</h2>
        <ul>
          {Object.values(list).map(l=><li>{l.items} {l.name} = {l.calories*l.items} cal</li>)}
        </ul>
        <strong>Total: {total} cal</strong>
      </div>
    )
  }
}
