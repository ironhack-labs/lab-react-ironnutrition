import React from 'react'


class AddForm extends React.Component {
  state = {
    active: false,
    foodText: '',
    imgURL: '',
    calories: ''
    //(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)  //** para checkear url **/
  }

  handleAddClick = ( () => {
    this.setState({
      active: true
    })
  })

  handleChange = (e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  })

  handleSubmit = (e => {
    e.preventDefault()
    const obj = {
      name: this.state.foodText,
      image: this.state.imgURL,
      calories: this.state.calories
    }
    this.props.addFood(obj) 
    this.setState({
      active: false,
      foodText: '',
      imgURL: '',
      calories: ''
    })
  })


  render() {
    return (
      <div className="add-form mt-5 container">
        {!this.state.active && <button className='button is-primary m-2 is-large'  onClick={this.handleAddClick}>Add food</button>}
        {this.state.active && <form onSubmit={this.handleSubmit}>
          <input name="foodText" className="input mb-2" placeholder="Insert food name" type="text" value={this.state.foodText} onChange={this.handleChange}></input>
          <input name="imgURL" className="input mb-2" placeholder="Insert food image URL" type="text" value={this.state.imgURL} onChange={this.handleChange}></input>
          <input name="calories" className="input mb-2" placeholder="Insert food calories" type="number" Value={this.state.calories} onChange={this.handleChange}></input>
          <button type='submit' className="button is-success m-2 is-large">Submit!</button>
        </form>}
      </div>
    )
  }
}

export default AddForm