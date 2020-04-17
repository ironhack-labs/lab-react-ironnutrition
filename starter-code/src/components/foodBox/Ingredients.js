import React, {Component} from 'react'
import foods from '../../foods.json'
import '../foodBox/FoodBox.css'
import 'bulma/css/bulma.css';

class Ingredients extends Component {
  state = {
    product : [],
  };

  searchProductsWithThisIngredient = (e) => {
    const {name, func} = this.props
    let array = []
    for (let i=0; i<foods.length; i++){
      if(foods[i].name === name){
        array.push(foods[i])
      }
    }
    func(array)
    this.setState({
      product: array
    })
  }

  render(){
    const {name} = this.props;
    const {product} =this.state;
    //console.log(product)
    return(
      <div>
        <button className="button is-info" onClick={this.searchProductsWithThisIngredient}> Check</button>
        <h2>Products with the ingredient {name}:</h2>
        {product && product.length}
        {/* {product && 
        product.map((item, index) =>{
          return item[index].name
        })
        } */}

      </div>
    )
  }
}

export default Ingredients