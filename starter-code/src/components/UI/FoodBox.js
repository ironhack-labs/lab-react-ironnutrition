import React, { useState, useEffect } from "react";
import foods from "../../foods.json";
import styled from "styled-components";

const FormFoodContainer = styled.div`
  background-color: #eeeeee;
  position: fixed;
  right: 0px;
  top: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  -webkit-box-shadow: -3px 0 20px 1px #616161;
  box-shadow: -3px 0 20px 1px #616161;
  padding-top: 50px;

  @media (min-width: 400px) {
    width: 400px;
  }
`;

const FormFood = styled.form`
  max-width: 350px;
  margin: auto;
  input {
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    height: 50px;
    border: 1px solid #dedede;
    margin-bottom: 10px;
    font-size: 18px;
    padding-left: 10px;

    &::placeholder {
      color: #ababab;
    }
  }

  input#submit {
    background-color: #209cee;
    color: #fff;
    cursor: pointer;
  }

  input#submit:hover {
    background-color: #168bda;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const FoodBox = () => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");

  const handleNewFood = (newName, newCalories, newImage) => {
    foods.push({
      name: newName,
      calories: newCalories,
      image: newImage,
      quantity: 0
    });
    handleClear();
    return foods;
  };

  const handleClear = () => {
    setName("");
    setCalories("");
    setImage("");
  };

  return (
    <>
      <FormFoodContainer>
        <FormFood
          onSubmit={e => {
            e.preventDefault();
            handleNewFood(name, calories, image);
          }}
        >
          <h2>Add New</h2>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            id="calories"
            name="calories"
            value={calories}
            placeholder="Calories"
            onChange={e => setCalories(e.target.value)}
          />
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            placeholder="Image"
            onChange={e => setImage(e.target.value)}
          />
          <input type="submit" id="submit" value="SAVE" />
        </FormFood>
      </FormFoodContainer>

      <div className="columns">
        <div className="column">
          {foods.map(food => {
            return (
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={food.image} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{food.name}</strong> <br />
                        <small>{food.calories} cal</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input className="input" type="number" value="1" />
                      </div>
                      <div className="control">
                        <button className="button is-info">+</button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
        <div className="column">
          <p>hola</p>
        </div>
      </div>
    </>
  );
};

export default FoodBox;
