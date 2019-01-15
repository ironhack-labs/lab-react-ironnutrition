import React from "react";


export class Form extends React.Component {
  constructor() {
    super();
    this.state = { name: "", calories: "", image: "",quantity:0 };
  }

  changeHandler(e,changed){
    if(changed=="name"){this.setState({name:e.target.value})}
    if(changed=="cal"){this.setState({calories:e.target.value})}
    if(changed=="img"){this.setState({image:e.target.value})}
  }

  sendData(ctx){
      ctx.getData(this.state)
  }

  render() {
    return (
      <div>
       <input
          className="input is-rounded"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={(e)=>this.changeHandler(e,"name")}
        />
        <input
          className="input is-rounded"
          type="text"
          placeholder="Calories"
          value={this.state.calories}
          onChange={(e)=>this.changeHandler(e,"cal")}
        />
        <input
          className="input is-rounded"
          type="text"
          placeholder="Image url"
          value={this.state.image}
          onChange={(e)=>this.changeHandler(e,"img")}
        />
        <button onClick={()=>this.sendData(this.props.submit)} className="button">Create Meal</button>
      </div>
    );
  }
}
