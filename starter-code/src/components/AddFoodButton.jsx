import React from 'react';

const AddFoodButton = (props) => {
    const { addButton } = props;
    return (
        <button className="button is-primary" onClick={addButton}>Adicionar Comida</button>
    )
}

export default AddFoodButton;