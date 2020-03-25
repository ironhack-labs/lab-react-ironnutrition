import React, { useState, useContext } from "react";
import { FoodContext } from "./context/FoodContext";

export const NewFood = () => {
  //añado el contexto para poder utilizar las props
  const { newFood } = useContext(FoodContext);

  //añado los cambios de estado
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");

  //añado un estado para que se muestre el botón
  const [showButton, setShowButton] = useState(false);

  //creo una variable para limpiar los input
  const cleanInput = () => {
    setName("");
    setCalories("");
    setImage("");
  };

  //variable para que cuando este el formulario no activo lo limpie
  const showForm = () => {
    setShowButton(!showButton);
    cleanInput();
  };

  //variable para que me añada el objeto
  const handleSubmit = () => {
    newFood({ name, calories, image, quantity: 0 });
    setShowButton(false);
    cleanInput();
  };

  if (!showButton) {
    return (
      <div className="field">
        <div className="control">
          <button className="button is-link" onClick={() => showForm()}>
            Add Food
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="field">
          <div className="control">
            <button className="button is-danger" onClick={() => showForm()}>
              Cancel
            </button>
          </div>
        </div>

        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Food name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Calories"
              value={calories}
              onChange={e => setCalories(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Image Url</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Image"
              value={image}
              onChange={e => setImage(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Label</label>
          <div className="control">
            <button
              className="button is-primary"
              onClick={() => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
};
