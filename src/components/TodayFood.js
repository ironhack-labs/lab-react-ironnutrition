import React from 'react'

const TodayFood = ({data, onClick}) => {

    return (
        <div className="column content">            
          <h2 className="subtitle">Today's foods</h2>
          <ul>
          {
            data.map((elem, index) => {
                if(elem.quantity > 0){
                    return <li key={index}> {elem.quantity} {elem.name} ={">"} {elem.quantity * elem.calories} cal | 
                    <button style={{height:"24px", marginLeft:"20px"}}className="button is-danger" onClick={() => onClick(index)}>Delete {elem.name}</button></li>
                }
                return "";
            })
          }
          </ul>
          <strong>Total:&nbsp;
          {
            data.reduce((acc, elem) => {
                return acc + elem.quantity * elem.calories
            }, 0)
          }
          &nbsp;cal</strong>
        </div>
    )
}

export default TodayFood
