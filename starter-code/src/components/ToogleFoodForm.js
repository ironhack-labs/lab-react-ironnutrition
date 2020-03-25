import React from 'react';

export const ToogleFoodForm = () => {

    const [formVisibility, setFormVisibility] = useState(false);

    const toggleFormVisibility = (e, isVisible) => {
        setFormVisibility(isVisible);
    }

    return (
        <button className="button is-primary" onClick={e => toggleFormVisibility(e, !formVisibility)}>
            <span className="icon">
                <span className="icon-add">+</span>
            </span>
            <span>Add Food</span>
        </button>
    )
}