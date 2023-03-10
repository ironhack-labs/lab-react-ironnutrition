import React from 'react';

const FoodItem = ({ name, calories, image, servings, onDelete, id }) => {

  return (
    <div>
      <div className="card d-flex">
      <h5 className="card-title">{name}</h5>
      <hr></hr>
      <div className='d-flex justify-content-center'>

    <img src={image} style={{height: 100, width: 100}} className="card-img" alt="..." />
      </div>
          <h5 className="card-title">{name}</h5>
          
          <p className="card-text">
            Calories: {calories}
          </p>

          <p className="card-text">
            Serving: <strong>{servings}</strong>
          </p>

          <p className="card-text">
          <strong>Total Calories:{calories}</strong> kcal
          </p>

          <button onClick={() => onDelete(name)} className="btn btn-primary">Delete</button>

          {/* pongo onDelete(name) porque no hay un id. en el json por lo que uso el name como id*/}
          
        </div>
      </div>
  );
};

export default FoodItem;