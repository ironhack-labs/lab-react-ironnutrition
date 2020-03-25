import React, { useState, useEffect, useContext } from "react";
import { FoodContext } from "./context/foodContext";
import "bulma/css/bulma.css";

export const AddButton = () => {
  const { addFood } = useContext(FoodContext);

  // Estados

  // Estado Botón para que se muestre o no
  const [show, setShow] = useState(false);

  // Estados de los campos "input"
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [images, setImages] = useState("");

  // Funcion para mostrar o no el botón de añadir un food. Y llama a Resetfields para limpiar los campos
  const showFields = () => {
    setShow(!show);
    resetFields();
  };

  // Funcion para limpiar los fields.
  const resetFields = () => {
    setName("");
    setCalories("");
    setImages("");
  };

  // Función para mandar los props al contexto y que se renderice el nuevo food.
  const handleSubmit = () => {
    addFood({ name, calories, images });
    showFields();
  };

  if (!show) {
    return (
      <div className="field">
        <button className="button is-primary" onClick={() => showFields()}>
          Add Food
        </button>
      </div>
    );
  } else {
    return (
      <>
        <div className="field">
          <button className="button is-danger" onClick={() => showFields()}>
            Cancel
          </button>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Name Food"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Calories"
              value={calories}
              onChange={e => setCalories(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="text"
              placeholder="Image"
              value={images}
              onChange={e => setImages(e.target.value)}
            />
          </div>
          <div className="field">
            <button
              className="button is-primary"
              onClick={() => handleSubmit()}
            >
              Add Food
            </button>
          </div>
        </div>
      </>
    );
  }
};
