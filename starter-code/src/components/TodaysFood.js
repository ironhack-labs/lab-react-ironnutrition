
import React, {Component} from 'react';


class TodaysFood extends Component{

  render(){
    let sum = 0
    var arr = this.props.savedData
return( 
  <div>
    <h1 className="title"> TODAY's FOODS </h1>
    
      {arr.map((item, index) => {
        sum = sum + item.calories
        return(
          <div key= {index}>
              <p > {item.quantity + 1} {item.name} = {item.calories} kcal</p>
            

        </div>)
      })}
    <p className="subtitle"> TOTAL CALORIES: {sum}Kcal </p>
  </div>

)
    
   
 }
}
 

export default TodaysFood;