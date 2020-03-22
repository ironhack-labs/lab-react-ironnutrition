import React, { useContext, useState } from "react";
import { FormBox, ButtonLighbox } from "../../public/styles/Form.styles";
import { FoodsContext } from "../context/Context";
import { FormItem } from "./FormItem";

export const FormAddBox = () => {
  const { foods, setFood } = useContext(FoodsContext);

  const [stateligthbox, setChangeStateLigthbox] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    calories: "",
    image: ""
  });

  const buttonAdd = e => {
    e.preventDefault();
    stateligthbox
      ? setChangeStateLigthbox(false)
      : setChangeStateLigthbox(true);
    setFormState({ name: "", calories: "", image: "" });
  };

  const buttonForm = e => {
    e.preventDefault();
    buttonAdd(e);
    if (formState.name && formState.calories && formState.image) {
      setFood([...foods, formState]);
      setFormState({ name: "", calories: "", image: "" });
    }
  };

  return (
    <>
      <ButtonLighbox
        className={stateligthbox ? "addButton active" : "addButton"}
        onClick={e => buttonAdd(e)}
      >
        {stateligthbox ? "Close" : "Add New"}
      </ButtonLighbox>
      <FormBox id="formBox" className={stateligthbox ? "active" : ""}>
        <form>
          <FormItem
            id="name"
            type="text"
            name="Name"
            label="Name"
            {...{ formState, setFormState }}
          />
          <FormItem
            id="calories"
            name="Calories"
            type="number"
            label="Number of Calories"
            {...{ formState, setFormState }}
          />
          <FormItem
            id="image"
            name="image"
            type="text"
            label="Food Image"
            {...{ formState, setFormState }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={e => buttonForm(e)}
          >
            Submit
          </button>
        </form>
      </FormBox>
    </>
  );
};
