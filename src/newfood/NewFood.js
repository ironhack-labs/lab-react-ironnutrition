import React, { useState } from 'react';
import 'bulma/css/bulma.css';

function NewFood(props) {
  const [state, setState] = useState({
    name: '',
    calories: '',
    image: '',
    toggleForm: true,
  });
  console.log(state);
  function handleChange(event) {
    const { name, value } = event.target;
    //alvo do que ta sendo usado name = target, name=calories
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    setState({
      ...state,
      toggleForm: !state.toggleForm,
    });

    const copyFood = [...props.addFood];
    copyFood.push(state);
    props.attFood(copyFood);
  }
  return (
    <div>
      <form>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <label htmlFor="image">Image</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="image"
                  value={state.image}
                  alt=""
                />
                <label htmlFor="name">Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  value={state.name}
                />

                <label htmlFor="calories">Calories</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="calories"
                  value={state.calories}
                />
              </figure>
            </div>
            <div className="media-content"></div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control"></div>
                <div className="control">
                  <button onClick={handleClick} className="button is-info">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </form>
    </div>
  );
}

export default NewFood;
