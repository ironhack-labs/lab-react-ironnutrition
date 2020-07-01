import React from 'react';


const FoodBox = props => {

	const displayFoodItem = foodItem =>{
		return(	<div className="box">
			  <article className="media">
			    <div className="media-left">
			      <figure className="image is-64x64">
			        <img src={foodItem.image} />
			      </figure>
			    </div>
			    <div className="media-content">
			      <div className="content">
			        <p>
			          <strong>{foodItem.name}</strong> <br />
			          <small>{foodItem.calories} cal</small>
			        </p>
			      </div>
			    </div>
			    <div className="media-right">
			      <div className="field has-addons">
			        <div className="control">
			          <input className="input" name={foodItem.name} onChange={props.handleChangeQuant} type="number" value={foodItem.quantity} />
			        </div>
			        <div className="control">
			          <button onClick={props.addTodaysFood} value={foodItem.name} className="button is-info">
			            +
			          </button>
			        </div>
			      </div>
			    </div>
			  </article>
			</div>)
		}

  return (
    <div>
	{props.foods.map(function(foodItem){
		if(props.searchBarText.length>0){
			if(foodItem.name.toLowerCase().includes(props.searchBarText.toLowerCase())){
	 			return displayFoodItem(foodItem)}}
	 	else{return displayFoodItem(foodItem)}})}
    </div>
  );
};

export default FoodBox
