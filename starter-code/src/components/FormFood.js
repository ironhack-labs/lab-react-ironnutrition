import React, { useReducer, useState } from "react";
import FormGroup from "../components/UI/FormGroup";
import Label from "../components/UI/Label";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodsArray from "../foods.json";

const MODIFY_INPUT = "MODIFY_INPUT";

const initialState = {
  name: "",
  number_of_calories: "",
  image: ""
};

function reducer(state, action) {
  if (action.type === MODIFY_INPUT) {
    return {
      ...state,
      [action.field]: action.value
    };
  } else {
    return state;
  }
}

const NewFoodForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [image, setImage] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    const { name, number_of_calories, image } = state;

    const createFood = async food => {
      const response = await axios.post(FoodsArray, beer);
      return response.data;
    };
    createBeer(state).then(food => console.log(food));
  }

  function handleChangeInput(event) {
    dispatch({
      type: MODIFY_INPUT,
      field: event.target.name,
      value: event.target.value
    });
  }

  function hadleChangeFile(event) {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <>
      <div
        className="rounded-bottom"
        style={{
          border: "2px solid #d3d3d3",
          width: "24rem",
          padding: "15px",
          display: "flex",
          textAlign: "center"
        }}
      >
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <input
              style={{ width: "22rem" }}
              className="rounded-pill"
              name="name"
              type="text"
              value={state.name}
              onChange={handleChangeInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Number Of Calories</Label>
            <input
              style={{ width: "22rem" }}
              className="rounded-pill"
              name="attenuation_level"
              type="text"
              value={state.number_of_calories}
              onChange={handleChangeInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Image</Label>
            <input
              style={{ width: "22rem" }}
              className="rounded-pill"
              name="contributed_by"
              type="file"
              value={state.image}
              onChange={hadleChangeFile}
            />
            {image && <img src={image} alt="Imagen" />}
          </FormGroup>
          <input
            className="btn btn-secondary"
            style={{ textAlign: "center" }}
            type="submit"
            value="Add New Foods"
          />
        </form>
      </div>
    </>
  );
};

export default NewFoodForm;
