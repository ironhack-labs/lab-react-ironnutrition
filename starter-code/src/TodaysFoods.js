import React from  'react'

const TodaysFoods = ({foods}) => {
      
        return (
        <div className="todays-foods" >
            <div className="row">
                <h1>Today's foods</h1>
                <ul>
                    <li>hamburger</li>
                    <li>pizza</li>
                </ul>
                <p>Total: cal</p>
            </div>
        </div>
    
    );
  }
  
  export default TodaysFoods