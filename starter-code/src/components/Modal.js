import React, {Component} from 'react';


class Modal extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "calories": 0,
      "image": "",
      "quantity": 0
    }
  }

  handleForm = (event) => {
    event.preventDefault();
    this.props.addFood(this.state);
    this.setState({
      "name": "",
      "calories": 0,
      "image": "",
      "quantity": 0
    })
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCal = (event) => {
    this.setState({
      calories: event.target.value
    })
  }

  handleUrl = (event) => {
    this.setState({
      image: event.target.value
    })
  }
  
  render () {
    return (
    <div className={this.props.clickModal}>
      <div className={this.props.backModal}></div>
        <div className={this.props.content}>
          <form onSubmit={this.handleForm} className="box">
            <label className="label">Name</label>
            <input className="input has-text-centered" type="text" name="name" value={this.state.name} onChange={(e) => this.handleName (e)}/>
            <label className="label">Calories</label>
            <input className="input has-text-centered" type="number" name="calories" value={this.state.calories} onChange={(e) => this.handleCal (e)}/>
            <label className="label">Image url</label>
            <input className="input has-text-centered" type="text" name="image" value={this.state.url} onChange={(e) => this.handleUrl (e)}/>
            <hr/>
            <button className="button is-outlined is-success" type="submit">Add food</button>
          </form>
        </div>
      <button onClick= {this.props.close} className={this.props.closeHide} aria-label="close"></button>
    </div>
    )
  }
}

export default Modal
