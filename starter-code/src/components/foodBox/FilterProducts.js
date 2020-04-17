import React, {Component} from 'react'
import '../foodBox/FoodBox.css'
import foods from '../../foods.json'
import 'bulma/css/bulma.css';
import BoxInfo from './BoxInfo';

class FilterProducts extends Component {
  state = {
    product : [],
    value : "",
  }

  handleValue = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  filterProducts = () => {
    return foods.filter((product) => {
      const lc = product.name.toLowerCase();
      const filter = this.state.value.toLowerCase();
      return lc.includes(filter);
    })
  }

  render(){
    const {product, value} =this.state;
    return( 
      <div>
        <label htmlFor="products"></label>
        <input className="is-primary" type="text" value={value} onChange={this.handleValue} />
        {this.filterProducts().map((product) => {
          return <BoxInfo food={product} />
        })
        }
      </div>
    )
  }
}

export default FilterProducts