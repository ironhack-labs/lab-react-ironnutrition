import React from 'react'
const Foodbox = ()=>{
    return(
        <div className="box">
        <img className="media" src="https://i.imgur.com/eTmWoAN.png" />
        <p>
          <strong>Pizza</strong> <br />
          <small>400 cal</small>
        </p>
          <input
            className="input"
            type="number" 
            value="1"
          />
          <button className="button is-info">
            +
          </button>
</div>
    )
}
export default Foodbox