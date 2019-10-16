import React, {Component} from 'react'

class FormNewFood extends Component {
  constructor (props){
    super(props)
  }
  render(){
    return(
    <div>
      <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={this.props.name} />

          <label>Image:</label>
          <input type="text" name="image" value={this.props.image} />

          <label>Calories:</label>
          <input type="text" name="calories" checked={this.props.calories} />

          <input type="submit" value="Submit" />
      </form>
    </div>)
  }
}

export default FormNewFood;