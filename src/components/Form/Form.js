import React, { useState, useEffect } from 'react';
import './Form.css';

const Form = ({ foodList, setFoodList, showHideForm }) => {
  const [values, setValues] = useState({
    name: '',
    calories: '',
    image: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    calories: '',
    image: '',
  });
  const [touched, setTouched] = useState({
    name: '',
    calories: '',
    image: '',
  });

  const verifyValidation = () => {
    const newErrors = {};

    const validationErrors = Object.keys(validationScheme).filter((key) => {
      // Object.keys(validationScheme) returns ['name', 'image', 'calories'];
      const error = validationScheme[key].find(
        (property) => !property.validation
      );
      // validationScheme[key].find: searches inside validationScheme.name, validationScheme.image and validationScheme.calories for 'validation' property. If verifyValidation(argument) is !opposed to condition inside 'validation', this is an 'error'.

      if (error) {
        newErrors[key] = error.message; // if finds an error, we add it to newErrors object
        return true; // returning true inside a filter method makes it keep the object inside the new array
      }

      newErrors[key] = ''; // if there's no error, we just add an empty string to newErrors object
      return false; // returning false inside a filter method makes it discard this object
    });

    setErrors(newErrors); // update errors state variable

    return validationErrors.length > 0; // returns true if there's at least one error property inside validationErrors array
  };

  useEffect(() => {
    verifyValidation();
  }, [values, touched]);

  const validationScheme = {
    name: [
      {
        validation: values.name.length > 0,
        message: 'Required Field',
      },
      {
        validation: values.name.length >= 3,
        message: 'Minimum of 3 characters',
      },
      {
        validation: values.name.length <= 50,
        message: 'Maximum of 50 characters',
      },
    ],
    image: [
      {
        validation: values.image.length > 0,
        message: 'Required Field',
      },
      {
        validation: values.image.length >= 3,
        message: 'Minimum of 3 characters',
      },
      {
        validation: values.image.length <= 100,
        message: 'Maximum of 100 characters',
      },
    ],
    calories: [
      {
        validation: values.calories >= 1,
        message: 'Minimum value of 1',
      },
      {
        validation: values.calories <= 1000,
        message: 'Maximum value of 1000',
      },
    ],
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
  };

  const defineClassFeedback = (touched, error) => {
    if (touched && error) return 'error-border';
    if (touched && !error) return 'success-border';
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasError = verifyValidation(); // Call verifyValidation method
    setTouched({
      name: true,
      pictureUrl: true,
      popularity: true,
    }); // set all fields to touched = true to make sure we will be able to show the correct feedback to user

    if (hasError) {
      return; // if there is any error, we return in this point, so the code below won't be executed and new food won't be created
    }

    const newFood = {
      id: new Date().getTime(),
      name: values.name,
      image: values.image,
      calories: values.calories,
    };

    setFoodList([...foodList, newFood]);
    showHideForm();
    setValues({
      name: '',
      calories: '',
      image: '',
    });
    setTouched({
      name: false,
      pictureUrl: false,
      popularity: false,
    }); // reset touched
  };

  return (
    <form onSubmit={handleSubmit} className="create-food-container">
      <div className="name">
        <input
          className={defineClassFeedback(touched.name, errors.name)}
          type="text"
          name="name"
          placeholder="Food Name"
          value={values.name}
          onChange={handleOnChange}
          onBlur={handleBlur}
        />
        {touched.name && errors.name && (
          <span className="error message">{errors.name}</span>
        )}
        {touched.name && !errors.name && (
          <span className="success message">Ok</span>
        )}
      </div>
      <div className="image">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={values.image}
          onChange={handleOnChange}
          onBlur={handleBlur}
        />
        {touched.image && errors.image && (
          <span className="error message">{errors.image}</span>
        )}
        {touched.image && !errors.image && (
          <span className="success message">Ok</span>
        )}
      </div>
      <div className="calories">
        <input
          type="number"
          name="calories"
          placeholder="Calories"
          value={values.calories}
          onChange={handleOnChange}
          onBlur={handleBlur}
        />
        {touched.calories && errors.calories && (
          <span className="error message">{errors.calories}</span>
        )}
        {touched.calories && !errors.calories && (
          <span className="success message">Ok</span>
        )}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
