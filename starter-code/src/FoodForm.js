import React, {Component} from 'react';


class FoodForm extends Component {
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
    if(name === '') return this.setState({error:'Add a food name to submit'});
    if(calories === '') return this.setState({error:'Add calories to submit'});
    if(image === "") return this.setState({error:'Add an image url to submit'});
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
          <input className="input" type="text" placeholder="Delicious meal 😋" value={name} onChange={(e) => this.setState({name:e.target.value})} />
        </div>
      </div>
      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input className="input" type="text" placeholder="Many calories ☹️" value={calories} onChange={(e) => this.setState({calories:e.target.value})}  />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input className="input" type="text" placeholder="So delicious url 😭" value={image} onChange={(e) => this.setState({image:e.target.value})} />
        </div>
      </div>
      <button className="button is-link" onClick={this.handleSubmit.bind(this)}>Add new food</button>
    </div>
    )
  }
}





export default FoodForm;
