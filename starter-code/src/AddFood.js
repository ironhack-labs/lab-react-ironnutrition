import React from  'react'
// import foods from './foods.json'


const AddFood = ({foods}) => {
 
        return (
        <div className="/">
            <form>
                <div className="form-group">
                    <label for="FoodName">Food Name</label>
                    <input type="text" className="form-control" id="FoodName" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label for="NumberOfCalories">Number of Calories</label>
                    <input type="text" className="form-control" id="NumberOfCalories" placeholder="Calories" />
                </div>
                <div className="form-group">
                    <label for="image">Image</label>
                    <input type="file" className="form-control-file" id="NumberOfCalories"  />
                </div>
                <button type="submit" className="btn btn-primary">Add Food</button>
            </form>
        </div>
    );
  }
  
  export default AddFood