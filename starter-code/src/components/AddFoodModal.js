import React, { useState } from 'react';

export const AddFoodModal = ({ visibility, setVisibility, onFormSubmit }) => {

    const [newFood, setNewFood] = useState({
        name: '',
        calories: '',
        image: '',
        quantity: 0
    });

    const handleSubmit = (e, data) => {
        e.preventDefault();
        onFormSubmit(data);
        setVisibility(false);
        setNewFood({ name: '', calories: '', image: '' })
    }

    return (
        <div className={`modal ${visibility ? 'is-active' : ''}`}>
            <div className="modal-background"></div>

            <div className="modal-card">
                <form onSubmit={(e) => handleSubmit(e, newFood)}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">Add food</p>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label" htmlFor="name">Name</label>
                            <div className="control">
                                <input className="input" id="name" name="name" type="text" value={newFood.name} onChange={e => setNewFood({ ...newFood, 'name': e.target.value })} required />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor="calories">Calories</label>
                            <div className="control">
                                <input className="input" id="calories" name="calories" type="number" value={newFood.calories} onChange={e => setNewFood({ ...newFood, calories: e.target.value })} required />
                            </div>
                        </div>
                        <div className="field" htmlFor="image_url">
                            <label className="label" htmlFor="image">Image Url</label>
                            <div className="control">
                                <input className="input" id="image" name="image" type="text" value={newFood.image} onChange={e => setNewFood({ ...newFood, image: e.target.value })} />
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