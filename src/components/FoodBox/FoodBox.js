// import "./FoodBox.css"
import React from "react";

const FoodBox = ({ name, image, calories, servings, onDelete, id }) => {

    return (
        <div>

            <div className="card">
                <h5 className="card-title">{name}</h5>
                <hr></hr>

                <img src={image} style={{ height: 100, width: 100 }} className="card-img" alt="..." />
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
            </div>
        </div>
    );
};

export default FoodBox;
