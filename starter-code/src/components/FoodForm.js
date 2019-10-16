import React, {Component} from 'react'

class FoodForm extends Component{
  constructor(props){
    super(props)
    // this.state = {
    //   foodform : 
    // }
  }


render(){
  return (
    <div>
      <form onSubmit={this.handleFormSubmit}>
          <label>name:</label>
          <input type="text" name="name" value={this.props.name} />

          <label>image:</label>
          <input type="text" name="image" value={this.props.image} />

          <label>quantity:</label>
          <input type="text" name="quantity" checked={this.props.quantity} />

          <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

}


export default FoodForm;