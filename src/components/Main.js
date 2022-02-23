import React from "react";
import FoodBox from "./FoodBox";
import FoodSelection from "./FoodSelection";

function Main(props) {

    const { foods, selectFood, selectedFoods, unselectFood } = props;

    return(
        <div className="is-flex is-flex-direction-row mx-5">
        <div>
          { foods.map((food, index) => <FoodBox key={ index } food={ food } selectFood={ selectFood }/>) }
        </div>
        
        <div className="mx-5">
          <FoodSelection selectedFoods={ selectedFoods } unselectFood={ unselectFood }/>
        </div>

      </div>
    );
}

export default Main;