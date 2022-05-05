import React from "react";

function TodaysFood(props) {

    const { foodList, removeFood } = props;

    const todaysFoodList = foodList.filter(f=>f.quantity > 0);

    const calTotal = todaysFoodList.reduce((sum,cal)=>(cal.quantity*cal.calories)+sum, 0);

    return (
        <div className="column content">        
            <h2 className="subtitle">Today's foods</h2>
            <ul>
            {todaysFoodList.map(f=><li key={f.id}> {f.quantity} {f.name} {"="} {f.quantity * f.calories} cal <span onClick={() => removeFood(f.id,0)}>🚮</span></li> )}
            </ul>
            <strong>Total: {calTotal} cal</strong>
        </div>            
      );    
}
 
export default TodaysFood;