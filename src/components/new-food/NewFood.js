import { useState } from 'react'

const validations = {
  name: value => {
    let message = '';
    message = !value && 'The name is required';
    return message;
  },
  image: value => {
    let message = '';
    message = !value && 'The image is required';
    return message;
  },
  calories: value => {
    let message = '';
    if (!value) {
      message = 'The calories is required';
    } else if (value < 1) {
      message = 'The calories cannot be negative or zero';
    }
    return message;
  },
  servings: value => {
    let message = '';
    message = !value && 'The servings is required';
    return message;
  }
}

const initialState = {
  food: {
    name: '',
    image: '',
    calories: 0,
    servings: 1
  },
  errors: {
    name: validations.name(''),
    image: validations.image(''),
    calories: validations.calories(0),
    servings: validations.servings(1)
  },
  touch: {
    name: false,
    image: false,
    calories: false,
    servings: false
  }
}

function NewFood({ onFoodCreate, hide, onHide }) {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(
    {
      ...state,
      food: {
        ...state.food,
        [name]: value
      },
      errors: {
        ...state.errors,
        [name]: validations[name] && validations[name](value)
      }
    })
  };

  const handleBlur = event => {
    const { name } = event.target;
    setState(
      {
        ...state,
        touch: {
          ...state.touch,
          [name]: true
        }
      }
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onFoodCreate(Object.assign({}, state.food))
    setState(initialState);

  };

  const isValid = () => !Object.keys(state.errors).some(error => state.errors[error])

  const handleHide = e => onHide(!hide);


  const { food, errors, touch } = state;
  return (
    <div className="new-food">
      <h2 className="title text-center">Add Food Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" value={food.name} type="text" className={`form-control ${errors.name && touch.name ? 'is-invalid' : ''}`} placeholder="Name" onChange={handleChange} onBlur={handleBlur}/>
          {errors.name && touch.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input name="image" value={food.image} type="text" className={`form-control ${errors.image && touch.image ? 'is-invalid' : ''}`} placeholder="URL image" onChange={handleChange} onBlur={handleBlur}/>
          {errors.image && touch.image && (
            <div className="invalid-feedback">{errors.image}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Calories</label>
          <input name="calories" value={food.calories} type="number" className={`form-control ${errors.calories && touch.calories ? 'is-invalid' : ''}`} placeholder="Calories" onChange={handleChange} onBlur={handleBlur}/>
          {errors.calories && touch.calories && (
            <div className="invalid-feedback">{errors.calories}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Servings</label>
          <input name="servings" value={food.servings} type="number" className={`form-control ${errors.servings && touch.servings ? 'is-invalid' : ''}`} placeholder="Servings" onChange={handleChange} onBlur={handleBlur}/>
          {errors.servings && touch.servings && (
            <div className="invalid-feedback">{errors.servings}</div>
          )}
        </div>

        <div className="d-flex">
          <button type="submit" disabled={!isValid()} className="btn btn-primary mx-1">Add new food</button>
          <button onClick={handleHide} className="btn btn-outline-success mx-1">Hide</button>
        </div>
      </form>
    </div>
  );
}

export default NewFood;