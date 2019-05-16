import React from 'react';

const FoodForm = (props) =>{
    let {handleChange, food, submitNewFood}= props;
    return (
        <div>
            <form>
                <label >
                Name:
                <input type='text' name='name' onChange={handleChange}/>
                </label>
                <label >
                Calories:
                <input type='number' name='calories' onChange={handleChange}/>
                </label>
                <label >
                Image:
                <input type='text' name='image' onChange={handleChange}/>
                </label>
                <button onClick ={submitNewFood}>save</button>
            </form>
        </div>
    )
};

export default FoodForm;