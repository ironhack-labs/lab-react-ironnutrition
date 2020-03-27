import React, { useState } from 'react';

export const AddFoodModal = ({ visibility, setVisibility, onFormSubmit }) => {

    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e, data) => {
        e.preventDefault();
        onFormSubmit(data);
        setVisibility(false);
    }

    return (
        <div className={`modal ${visibility ? 'is-active' : ''}`}>
            <div className="modal-background"></div>

            <div className="modal-card">
                <form onSubmit={(e) => handleSubmit(e, { name, calories, image, quantity: 0 })}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">Add food</p>
                    </header>
                    <section className="modal-card-body">
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

                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                    </footer>
                </form>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={() => setVisibility(!visibility)}></button>
        </div>
    )
}