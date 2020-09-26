import React, { useState } from 'react';
// import './FoodBox.css';
import FoodBox from './FoodBox'
import Button from './Button';
import Summatory from './Summatory';

function SplittedBody(props) {
    const [allFoods, setAllFoods] = useState(props.foods);
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState('');
    const [buttonStatus, setButtonStatus] = useState(false);
    const [searchedFood, setSearchedFood] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [selectedFood, setSelectedFood] = useState([]);

    const searched = allFoods.filter(food => food.name.toLowerCase().includes(searchedFood))

    const foodsInDiv = searched.map(food => <FoodBox {...food} addToMenu={addToMenu} />);

    function showForm() {
        setButtonStatus(!buttonStatus);
    };

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

    function addToMenu(name, calories, quantity) {
        const selected = {
            name: name,
            calories: calories,
            quantity: quantity
        };
        const newMenu = [
            ...selectedFood.filter(food => food.name !== selected.name), 
            selected
        ].filter(food => food.quantity > 0)

        
        setSelectedFood(newMenu);
    }

    function deleteFromMenu (name) {
        const newMenu = selectedFood.filter(food => food.name !== name)
        setSelectedFood(newMenu);
    }


    return (
        <div className="FoodCardDiv">
            <div>
                {!buttonStatus && <div>
                    <input className="input" type="text" name="searched food" value={searchedFood} placeholder="Search Food" onChange={(e) => setSearchedFood(e.target.value.toLowerCase())} />
                </div>}
                <div>
                    <Button funct={showForm} buttonStatus={buttonStatus} />
                    {buttonStatus && 
                    <form onSubmit={submitForm}>
                        <input className="input" type="text" name="name" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <input className="input" type="number" name="calories" value={calories} placeholder="Calories" onChange={(e) => setCalories(e.target.value)} />
                        <input className="input" type="text" name="image" value={image} placeholder="Image" onChange={(e) => setImage(e.target.value)} />
                        <button className="button is-info">+</button>
                    </form>}
                </div>
            </div>
            <div className="splittedElem columns">
                <ul className="column">
                    {foodsInDiv}
                </ul>
                <Summatory foods={selectedFood} deleteFromMenu={deleteFromMenu}/>
            </div>

        </div>
    );
};

export default SplittedBody;