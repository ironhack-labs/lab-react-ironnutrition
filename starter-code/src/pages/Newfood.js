import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Form, Group, Button } from "react-bootstrap";

export const Newfood = withRouter(({ history }) => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`${name} ${calories} ${image}`);
    history.push("/");
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeCalories = e => {
    setCalories(e.target.value);
  };
  const handleChangeImage = e => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <br />
          <Form.Control
            type="text"
            placeholder="Food name"
            value={name}
            onChange={handleChangeName}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Calories"
            value={calories}
            onChange={handleChangeCalories}
          />
          <br />
          <Form.Control type="file" onChange={handleChangeImage} />
          {image && <img src={image} alt="imagen" />}
        </Form.Group>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
});
