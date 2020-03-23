import React, { useReducer, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormGroup from "./UI/styles/FormGroup";
import Label from "./UI/styles/Label";
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

function AddFood() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [image, setImage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const { name, number_of_calories, image } = state;
    console.log(FoodsArray);
    return FoodsArray.push(state);
  }

  function handleChangeInput(event) {
    dispatch({
      type: MODIFY_INPUT,
      field: event.target.name,
      value: event.target.value
    });
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Food{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div>
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
                  name="number_of_calories"
                  type="number"
                  value={state.number_of_calories}
                  onChange={handleChangeInput}
                />
              </FormGroup>
              <FormGroup>
                <Label>Image</Label>
                <input
                  style={{ width: "22rem" }}
                  name="image"
                  type="file"
                  src={state.image}
                  value={state.image}
                  onChange={handleChangeInput}
                />
                {image && <img src={image} alt="Imagen" />}
              </FormGroup>
              <input
                className="btn btn-secondary"
                style={{ textAlign: "center" }}
                type="submit"
                value="Add New Food"
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddFood;
