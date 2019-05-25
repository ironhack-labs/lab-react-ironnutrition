import React from  'react'

const TodaysFoods = ({foods}) => {
      
        return (
        <div className="todays-foods" >
            <div className="row">
                <h1>Today's Foods</h1>
                <ul>
                    <li>Hamburger</li>
                    <li>Pizza</li>
                </ul>
                <p>Total: 800 cal</p>
            </div>
        </div>
    
    );
  }
  
  export default TodaysFoods