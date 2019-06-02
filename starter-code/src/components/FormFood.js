import React from 'react';

class FormFood extends React.Component {

  state = {
    name: '',
    calories: '',
    image:'',
    quantity:0
  }

  handleInput = (e) => {
    if(e.target.name === 'calories') {
      this.setState({
        calories: Number(e.target.value)
      })
    } else {
    const {name, value} = e.target
    this.setState({
      [name]:value
    })
  }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addFood(this.state)
    this.setState({
      name: '',
      calories: '',
      image:'',
      quantity:0
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="div-form">
          <label className="label">Name</label>
            <div className="control">
              <input onChange={e => this.handleInput(e)} value={this.state.name} name='name' className="input" type="text" placeholder="Text input" />
            </div>
              <label className="label">Calories</label>
                <div className="control">
                  <input onChange={e => this.handleInput(e)} value={this.state.calories} name='calories' className="input" type="text" placeholder="Text input" />
                </div>
                  <label className="label">Image</label>
                    <div className="control">
                      <input onChange={e => this.handleInput(e)} value={this.state.image} name='image' className="input" type="text" placeholder="Url Img" />
                    </div>
                      <a name="edge"><span></span></a>
                      <input className="is-link" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
  
}

export default FormFood;