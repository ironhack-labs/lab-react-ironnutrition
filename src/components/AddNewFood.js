import React from 'react';

const AddNewFood = () => {
    return (
        <div>
            <form>
                Name:
                <input type="Text"></input>
                Calories
                <input type="Text"></input>
                Image
                <input type="Text"></input>
            </form>
            <button type="submit" value="Submit">Submit</button>
        </div>
    );
};

export default AddNewFood;