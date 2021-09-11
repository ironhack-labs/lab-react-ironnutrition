import React, { useEffect, useState } from 'react';
import './Form.css';

const handleSubmit = (error, setHide, foodList, setFoodList, value, e) => {
  e.preventDefault();

  const invalidForm =
    Object.keys(error).some((key) => error[key]) ||
    Object.keys(value).some((key) => !value[key]);

  if (invalidForm) {
    return;
  }

  if (foodList.some((food) => food.name === value.name)) {
    window.alert('THIS FOOD ALREAD EXIST!');
  } else {
    setFoodList([...foodList, { ...value, quantity: 0 }]);
    setHide(true);
  }
};

const validateForm = (error, setError, value) => {
  const urlRegexMatch =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const formFieldValidations = {
    name: [
      {
        validation: value.name.length < 1,
        errorMessage: 'Required Field!',
      },
      {
        validation: value.name.length < 3,
        errorMessage: 'Minimum of 3 characters!',
      },
      {
        validation: value.name.length > 50,
        errorMessage: 'Maximum of 50 characters!',
      },
    ],
    calories: [
      {
        validation: value.calories < 1,
        errorMessage: 'Required Field!',
      },
      {
        validation: value.calories > 10000,
        errorMessage: 'Maximum calories of 10.000!',
      },
    ],
    image: [
      {
        validation: value.image.length < 1,
        errorMessage: 'Required Field!',
      },
      {
        validation: value.image.length < 3,
        errorMessage: 'Minimum of 3 characters!',
      },
      {
        validation: value.image.length > 100,
        errorMessage: 'Maximum of 100 characters!',
      },
      {
        validation: !value.image.match(urlRegexMatch),
        errorMessage: 'Invalid URL!',
      },
    ],
  };

  const newErrors = { name: '', calories: '', image: '' };

  Object.keys(formFieldValidations).forEach((key) => {
    formFieldValidations[key].find((verification) => {
      if (verification.validation) {
        newErrors[key] = verification.errorMessage;
        return true;
      } else return false;
    });
  });

  Object.assign(error, newErrors);

  setError({ ...error });
};

const handleChange = (e, stateValue, setValue) => {
  const { name, value } = e.target;
  setValue({ ...stateValue, [name]: value });
};

const handleBlur = (e, touched, setTouched) => {
  const { name } = e.target;
  setTouched({ ...touched, [name]: true });
};

const handleSpanClasses = (error, touch) => {
  if (touch && error) {
    return 'error-text';
  } else if (touch && !error) {
    return 'correct-text';
  } else {
    return ' hide-text';
  }
};

const handleInputClasses = (error, touch) => {
  if (touch && error) {
    return ' error-field';
  } else if (touch && !error) {
    return ' correct-field';
  } else {
    return '';
  }
};

const Form = ({ setHide, foodList, setFoodList }) => {
  const [value, setValue] = useState({
    name: '',
    calories: '',
    image: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    calories: false,
    image: false,
  });

  const [error, setError] = useState({
    name: '',
    calories: '',
    image: '',
  });

  useEffect(() => {
    validateForm(error, setError, value);
  }, [value]);

  return (
    <form
      className="form-container is-flex"
      onSubmit={(e) =>
        handleSubmit(error, setHide, foodList, setFoodList, value, e)
      }
    >
      <h2>NEW FOOD</h2>
      <label className="label is-small">Name</label>
      <input
        name="name"
        className={
          'input is-small' + handleInputClasses(error.name, touched.name)
        }
        type="text"
        placeholder="name"
        value={value.name}
        onChange={(e) => handleChange(e, value, setValue)}
        onBlur={(e) => handleBlur(e, touched, setTouched)}
      />
      <span className={handleSpanClasses(error.name, touched.name)}>
        {error.name || 'Ok'}
      </span>
      <label className="label is-small">Calories</label>
      <input
        name="calories"
        className={
          'input is-small' +
          handleInputClasses(error.calories, touched.calories)
        }
        type="number"
        placeholder="Calories"
        min="0"
        max="10000"
        value={value.calories}
        onChange={(e) => handleChange(e, value, setValue)}
        onBlur={(e) => handleBlur(e, touched, setTouched)}
      />
      <span className={handleSpanClasses(error.calories, touched.calories)}>
        {error.calories || 'Ok'}
      </span>
      <label className="label is-small">Image Link</label>
      <input
        name="image"
        className={
          'input is-small' + handleInputClasses(error.image, touched.image)
        }
        type="text"
        placeholder="Image Link"
        value={value.image}
        onChange={(e) => handleChange(e, value, setValue)}
        onBlur={(e) => handleBlur(e, touched, setTouched)}
      />
      <span className={handleSpanClasses(error.image, touched.image)}>
        {error.image || 'Ok'}
      </span>
      <div className="form-buttons">
        <button className="button is-info">Add!</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setHide(true);
          }}
          className="button is-info"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Form;
