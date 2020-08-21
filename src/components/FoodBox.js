import React from 'react';
import foods from '../foods.json';
import FoodDetails from "./FoodDetails";
import 'bulma/css/bulma.css';




class FoodBox extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
          listOfFood: foods 
      } 
    }
    render() {



      return (
        <div>
        {
            this.state.listOfFood.map((food, i) => {
                return <FoodDetails key={i} food={food} id={i}/>
            })  
        }
        </div>
      )
    }
  
  }
  
  
  
  export default FoodBox;