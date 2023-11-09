import React from "react";

function FoodBox(props) {
  return (
      <div className="card serv" style={{width: '25rem'}} key = {props.food.id}>
        <img className="card-img-top" src={props.food.image} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{props.food.name}</h5>
          <p className="card-text">Calories: {props.food.calories}</p>
          <p className="card-text">Servings {props.food.servings}</p>
          <p className="card-text"><b>Total Calories: {props.food.calories * props.food.servings}</b></p>
          <button href="#" onClick={()=>{props.handleDelete(props.food.id)}} className="btn btn-primary">Delete</button>
        </div>
      </div>
  );
}

export default FoodBox;
