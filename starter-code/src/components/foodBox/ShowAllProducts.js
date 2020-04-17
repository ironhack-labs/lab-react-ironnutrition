import React, {Component} from 'react'
//import foods from '../../foods.json'
import '../foodBox/FoodBox.css'
import 'bulma/css/bulma.css';
import BoxInfo from './BoxInfo';

class ShowAllProducts extends Component {

  render(){
    const {food, func} = this.props;
      return (

        <div>
          {/* retornamos toooodos los productos */}
          {food.map((product, index) =>{
            return <BoxInfo key={product.name} food={product} func={func} />
          })
          }
        </div>
          )
        }
}

export default ShowAllProducts