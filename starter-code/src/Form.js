import React from "react"

class Form extends React.Component{
state={
    name: "",
    calories:"",
    image: ""
}

updateForm(e, field) {
    this.setState({
      ...this.state,
      [field]: e.target.value
    });
  }

  handleFormSubmit = (event) => {
      console.log("FUNCIONA")
    event.preventDefault();
    this.props.addTheFood(this.state);   
    this.setState({
      name: '',
      calories: '',
      image: "",
      
    })  
  }




render(){
    return(
        <form onSubmit={this.handleFormSubmit}>
        <input type="text" placeholder="name" value={this.state.name} onChange={e => this.updateForm(e, "name")}></input>
        <input type="text" placeholder="calories" value={this.state.calories} onChange={e => this.updateForm(e, "calories")}></input>
        {/* <input type="text"  value={this.state.image} ></input> */}
        <input type="submit" value="Submit" />
        </form>
    )
}
}

export default Form