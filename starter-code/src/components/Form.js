import React, {Component} from 'react';


class Form extends Component {
  constructor(props){
    super(props),
    this.state = {
      name: '',
      image: '',
      calories: ''
    }
  }

  onChange = (event) => {
    this.setState({[event.currentTarget.name] : event.currentTarget.value })
    console.log(this.state)
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);   
    this.setState({
      name: '',
      image: '',
      calories: ''
    })  
  }


  render = () => (
    <form onSubmit={this.handleFormSubmit}>
      <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input className="input" type="text" placeholder="Email"  
        value={this.state.name} 
        onChange={this.onChange}
        name='name'
        />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </p>
    </div>
    <div className="field">
      <p className="control has-icons-left">
        <input className="input" type="text" placeholder="Image url"   
        value={this.state.image}
        onChange={this.onChange}
        name='image'
        />
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div className="field">
      <p className="control has-icons-left">
        <input className="input" type="text" placeholder="Calories"   
        value={this.state.calories}
        onChange={this.onChange}
        name='calories'
        />
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div className="field">
      <p className="control">
        <button className="button is-success">
          Login
        </button>
      </p>
    </div>
  </form>
  )
}

export default Form