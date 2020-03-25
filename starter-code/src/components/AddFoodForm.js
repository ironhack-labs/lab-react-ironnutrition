import React, { useState } from 'react';

export const AddFoodForm = ({ onFormSubmit, isVisible = false }) => {

    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [image, setImage] = useState('');
    const [visibility, setVisibility] = useState(isVisible);

    const handleSubmit = (e, data) => {
        e.preventDefault();
        onFormSubmit(data);
        setVisibility(false);
    }

    return (
        <form id="food-form" className={isVisible ? 'is-block' : 'is-hidden'} onSubmit={(e) => handleSubmit(e, { name, calories, image, quantity: 0 })}>
            <div className="field">
                <label className="label" htmlFor="name">Name</label>
                <div className="control">
                    <input className="input" id="name" name="name" type="text" value={name} onChange={e => setName(e.target.value)} required />
                </div>
            </div>
            <div className="field">
                <label className="label" htmlFor="calories">Calories</label>
                <div className="control">
                    <input className="input" id="calories" name="calories" type="number" value={calories} onChange={e => setCalories(e.target.value)} required />
                </div>
            </div>
            <div className="field" htmlFor="image_url">
                <label className="label" htmlFor="image">Image Url</label>
                <div className="control">
                    <input className="input" id="image" name="image" type="text" value={image} onChange={e => setImage(e.target.value)} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-link" type="submit">Save</button>
                </div>
            </div>
        </form >
    )
}