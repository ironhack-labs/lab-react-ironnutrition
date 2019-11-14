import React from 'react';

class AddFoodButton extends React.Component {

    render() {
        return(
            <div>
            {
                !props.addFoodBtn &&
                <button onClick = {props.showFoodForm}>Add New Food</button>
            }
            </div>
        )
    }
}

export default AddFoodButton;