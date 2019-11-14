import React from 'react';
function AddFoodButton(props) {
    return (<div>
        {!props.addFoodBtn &&
            <button onClick={props.showFoodForm}>Add New Food</button>}
    </div>);
}
export default AddFoodButton;
