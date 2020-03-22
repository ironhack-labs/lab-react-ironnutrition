import React, { useState, useContext } from "react";
import FormItem from "../components/FormItem";
import { FoodContext } from "../api/food.api";
import { withRouter } from "react-router-dom";

const Form = withRouter(({ history }) => {
  const { food, setFood } = useContext(FoodContext);
  const [formState, setFormState] = useState({ name: "", calories: "" });
  const handleSubmit = e => {
    e.preventDefault();
    setFood([...food, formState]);
    history.push("/");
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <FormItem id="name" name="Name" type="text" {...{ formState, setFormState }} />
      <FormItem id="calories" name="Calories" type="number" {...{ formState, setFormState }} />
      <div className="field">
        <p className="control">
          <button className="button is-success">Add</button>
        </p>
      </div>
    </form>
  );
});

export default Form;
