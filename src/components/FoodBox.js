import React, {useState} from 'react'
import styled from 'styled-components'

const StyledFoodBox = styled.article`
  width: 500px;
  height: auto;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin: 0 auto;
  border: 1px solid #000;

  img {
    width: 100px;
    height: auto;
  }
  b {
    text-align: center;
    margin: 0 auto;
  }
`

export default function FoodBox({ name, calories, image, quantity, addFood2List }) {

const [foodQuantity, setFoodQuantity] = useState(0)
    
  function handleAdd2TodaysFood() {
    let food = {
      name,
      calories: calories*foodQuantity,
      image,
      quantity: foodQuantity,
    }
    console.log(food)
    addFood2List(food);
  }
  const inputChangeHandler = (e) => {
    setFoodQuantity(foodQuantity + 1)
    console.log(e.target.value)
  };

  return (
    <div>
      <StyledFoodBox>
        <div>
          <figure>
            <img src={image} />
          </figure>
        </div>
        <div>
          <div>
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} calories</small>
            </p>
          </div>
        </div>
        <div>
          <div>
            <div>
              <input
                className="input"
                type="number"
                value={foodQuantity}
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <button onClick={handleAdd2TodaysFood}>+</button>
            </div>
          </div>
        </div>
      </StyledFoodBox>
    </div>
  );
}