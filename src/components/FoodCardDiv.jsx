import React, { useState } from 'react';
import './FoodCardDiv.css';
import Button from './Button';
import Summatory from './Summatory';

function FoodCardDiv(props) {
    const [allFoods, setAllFoods] = useState(props.foods);
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState('');
    const [buttonStatus, setButtonStatus] = useState(false)
    const [quantity, setQuantity] = useState(1);
    // const [selectedFood, setSelectedFood] = useState([]);

    const foodsInDiv = allFoods.map(food => {
        return (
            <li key={food.name}>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={food.image} alt="" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <strong>{food.name}</strong>
                                <p>
                                    <br />
                                    <small>{food.calories} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                </div>
                                <div className="control">
                                    <button className="button is-info">+</button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </li>
        );
    });

    function showForm() {
        setButtonStatus(!buttonStatus)
    }

    function submitForm(e) {
        console.log('entra')
        e.preventDefault();
        const newFood = {
            name: name,
            calories: calories,
            image: image
        };

        setAllFoods([...allFoods, newFood]);
        setName('');
        setCalories(0);
        setImage('');
        showForm();
    };

    return (
        <div className="FoodCardDiv">
            <div>
                <Button funct={showForm} buttonStatus={buttonStatus} />
                {buttonStatus && <form onSubmit={submitForm}>
                    <input className="input" type="text" name="image" value={image} placeholder="Image" onChange={(e) => setImage(e.target.value)} />
                    <input className="input" type="text" name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input className="input" type="number" name="calories" value={calories} placeholder="Calories" onChange={(e) => setCalories(e.target.value)} />
                    <button className="button is-info">+</button>
                </form>}
            </div>
            <div className="splittedElem">
                <ul>
                    {foodsInDiv}
                </ul>
                <Summatory selectedFoods={0} />
            </div>

        </div>
    );
};

export default FoodCardDiv;