import React, {Component} from 'react';
import foods from '../foods.json';
import Food from './Food';
import 'bulma/css/bulma.css'

class FoodBox extends Component{

state={
  food:foods
}
render(){
  const {food} = this.state;

  return(<div>
    {food.map((items,key)=><Food key={key} {...items}/>)}

    </div>
  )
}
}




export default FoodBox 