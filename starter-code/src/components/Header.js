import React from 'react';

export const Header = ({ modalVisibility, setModalVisibility }) => {
    return (
        <header className="app-header">
            <h1 className="title">IronNutrition</h1>
            <button className="button is-primary" onClick={() => setModalVisibility(!modalVisibility)}>
                <span className="icon">
                    <span className="icon-add">+</span>
                </span>
                <span>Add Food</span>
            </button>
        </header>
    )
}