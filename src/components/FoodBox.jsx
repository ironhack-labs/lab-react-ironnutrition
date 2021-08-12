import React from 'react';


//class FoodBox extends Component {
//	state = {
//		foodList: foodsJSON,
//		name: "",
//		calories: "",
//		
//	}
//
//
//	
//
//	render() {
		
	
	const  FoodBox = (food) => {
	return (
//	{/* display component with info of the food, "food" as prop*/}
				<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small> cal {food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value="1" />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>


			
		);
	}




export default FoodBox;