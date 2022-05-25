import { useState } from 'react';
import React from 'react';

function AddFood(props) {

  
  const [foodShow, setFoodShow] = useState(false);

  // Creamos estados para cada uno de los componentes de los objetos
  const [foodName, setFoodName] = useState('');
  const [countCal, setCountCal] = useState(0);
  const [urlImg, setUrlImg] = useState('');

  // Creamos las Handle para cada evento de añadir nueva Food
  const handleChangeName = (event) => setFoodName(event.target.value);
  const handleCountCalChange = (event) => setCountCal(event.target.value);
  const handleImgChange = (event) => setUrlImg(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name: foodName,
      calories: countCal,
      image: urlImg,
    };
    props.handleAddFood(newFood);
    //Reiniciamos los valores
    setFoodName('');
    setCountCal(0);
    setUrlImg('');
    setFoodShow(false);
  };

  return (
    <div>
      <button onClick={() => setFoodShow(!foodShow)}>
        {foodShow ? 'Hide Food Form' : 'Show Add Food Form'}
      </button>
      <hr />
      {foodShow ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="foodName">Name</label>
            <input
              type="text"
              name="foodName"
              onChange={handleChangeName}
              value={foodName}
            />
          </div>
          <div>
            <label htmlFor="countCal">Calories</label>
            <input
              type="number"
              name="countCal"
              onChange={handleCountCalChange}
              value={countCal}
            />
          </div>
          <div>
            <label htmlFor="urlImg">Url</label>
            <input
              type="text"
              name="urlImg"
              alt="image"
              onChange={handleImgChange}
              value={urlImg}
            />
          </div>
          <button>Add Food</button>
        </form>
      ) : null}
    </div>
  );
}

export default AddFood;
