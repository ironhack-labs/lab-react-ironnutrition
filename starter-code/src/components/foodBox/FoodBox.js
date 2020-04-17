import React, {Component} from 'react'
//import foods from '../../foods.json'
import '../foodBox/FoodBox.css'
import 'bulma/css/bulma.css';
import Ingredients from './Ingredients';
import BoxInfo from './BoxInfo';


class FoodBox extends Component {
  state = {
    products : [],
  }

  handleProducts = (products) =>{
    this.setState({
      products: products
    })
  }

  render(){
    const {food, func} = this.props;
    const {products} = this.state;

      return(
        <div>
          {/* Busca los alimentos que tienen el nombre especificado. En este caso pizza ya que es el prop que se le ha asignado manualmente */}
          <Ingredients name={food} func={this.handleProducts} />  
  
          {/* Luego los muestra */}
          {products.map((product, index) =>{
            return <BoxInfo food={product} func={func} />
          })
          }  
          </div>
        
      )
    } 
    
}

export default FoodBox