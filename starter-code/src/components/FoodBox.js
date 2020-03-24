import React, { useState } from "react";
import FoodsArray from "../foods.json";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormGroup from "./UI/styles/FormGroup";
import Label from "./UI/styles/Label";

const FoodBox = () => {
  const [foods, setFoods] = useState([...FoodsArray]);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(event) {
    event.preventDefault();
    setFoods([...foods, { name, calories, image }]);
    setName("");
    setCalories("");
    setImage("");
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeCalories(event) {
    setCalories(event.target.value);
  }
  function handleChangeImage(event) {
    setImage(event.target.value);
  }

  function handleCleanForm() {
    setName("");
    setCalories("");
    setImage("");
  }

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>IronNutrition</h1>
              <div>
                <div>
                  {foods.map((food, i) => (
                    <article key={i} style={{ display: "flex" }}>
                      <div>
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
                            <input
                              className="input"
                              type="number"
                              value="0"
                              onChange={useState}
                            />
                          </div>
                          <div className="control">
                            <button className="button is-info">+</button>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="col">
              <main>
                <Button
                  style={{ marginTop: "3.5rem", backgroundColor: "#2793da" }}
                  variant="primary"
                  onClick={handleShow}
                >
                  Add New Food{" "}
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header style={{ background: "#2793da" }} closeButton>
                    <Modal.Title style={{ color: "white" }}>
                      Add Food
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div>
                      <form onSubmit={handleSubmit}>
                        <FormGroup>
                          <Label>Name</Label>
                          <input
                            style={{ width: "22rem" }}
                            name="name"
                            type="text"
                            value={name}
                            onChange={handleChangeName}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Number Of Calories</Label>
                          <input
                            style={{ width: "22rem" }}
                            name="calories"
                            type="number"
                            value={calories}
                            onChange={handleChangeCalories}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Image</Label>
                          <input
                            style={{ width: "22rem" }}
                            name="image"
                            type="text"
                            value={image}
                            onChange={handleChangeImage}
                          />
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
                  <Modal.Footer style={{ background: "#2793da" }}>
                    <Button
                      variant="secondary"
                      type="reset"
                      onClick={handleCleanForm}
                    >
                      Limpiar
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </main>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FoodBox;
