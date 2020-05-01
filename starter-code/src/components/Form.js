import React, {Component} from "react";
import "bulma/css/bulma.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      image: '',
      calories: '',
      quantity: 0
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let {name, value} = e.target;

    this.setState({
        [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const {addHandlerFood} = this.props

    addHandlerFood(this.state)

    this.setState({
      name: '',
      image: '',
      calories: '',
      quantity: 0
    })
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name="name" placeholder="name" value={this.state.name}></input>

                <input onChange={this.handleChange} type="text" name="image" placeholder="image" value={this.state.image}></input>

                <input onChange={this.handleChange} type="number" name="calories" placeholder="calories" value={this.state.calories}></input>

                <button>Add</button>
            </form>
        </div>
    );
  }
}

export default Form;