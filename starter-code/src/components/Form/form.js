import React, { Component } from "react";

class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      cal: '',
      img: '',
    }
  }


handleFormSubmit = (event) => {
  event.preventDefault();
  this.props.addTheFood(this.state);
  this.setState({     
    name: '',
    cal: '',
    img: ''
  })     
}

  handleChange = (e) => {
    let { name, cal, img} = event.target;
    if()
  }

  // handleCalInput = (e) => {
  //   this.setState({
  //     cal: e.target.value
  //   })
  // }
  
  // handleImgInput = (e) => {
  //   this.setState({
  //     img: e.target.value
  //   })
  // }
  
render () {
  return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
            <label>Name:</label>
            <input type="text" name="title" value={this.state.name} onChange={(e) => this.handleChange(e)}/>

            <label>Calories:</label>
            <input type="text" name="cal" value={this.state.cal} onChange={(e) => this.handleChange(e)}/>

            <label>Image:</label>
            <input type="checkbox" name="img" checked={this.state.img} onChange={(e) => this.handleChange(e)} />

            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}


export default Form;
