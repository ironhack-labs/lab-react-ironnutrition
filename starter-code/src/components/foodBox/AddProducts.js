import React, {Component} from 'react'
import '../foodBox/FoodBox.css'
import 'bulma/css/bulma.css';


class AddProducts extends Component {
  state = {
    name : "",
    calories: 0,
    image: "",   //como indicar que es url
    quantity: 0,
    product: {}
  }

  handleChanges = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  addProduct = (e) => {
    // console.log(e);
    const {name, calories, image, quantity} = this.state;
    const newProduct= {name, calories, image, quantity};
    //this.props.products.push(newProduct)  //entiendo que esto tendremos que dejarlo funcionando para que persistan los datos tras actualizar
    this.props.addProduct([...this.props.products, newProduct]);
    this.setState({
      product: newProduct,
      name : "",
      calories: 0,
      image: "",
      quantity: 0,
    })
  }
  
  render(){
    const {name, calories, image, quantity} = this.state
    // console.log(this.props.products)
    return(
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={name} onChange={this.handleChanges} />

        <label htmlFor="calories">Calories</label>
        <input id="calories" name="calories" type="number" value={calories} onChange={this.handleChanges} />

        <label htmlFor="image">Image</label>
        <input id="image" name="image" type="url" value={image} onChange={this.handleChanges} />

        <label htmlFor="quantity">Quantity</label>
        <input id="quantity" name="quantity" type="number" value={quantity} onChange={this.handleChanges} /><br/>

        <button className="button is-info" onClick={this.addProduct}>Add product</button>
      </div>
    )
  }
}

export default AddProducts