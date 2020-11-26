import React from 'react';
import FormField from './FormField';

function FoodForm(props) {
  const [state, setState] = props.state;
  const [foodList, setFood] = props.stateFoods;
  const [formVisible, setFormVisible] = props.stateVisible;

  function handleSubmit(e) {
    e.preventDefault();
    setFood([...foodList,
      {
        name: state.name,
        calories: state.calories,
        image: state.image,
        quantity: 0,
      }
        ]);
        setFormVisible("");
    }

  function handleClose(){
      setFormVisible('');
    }

  return (
    <div class={`modal ${formVisible}`}>
      <div class="modal-background"></div>
      <div class="modal-card">
        <section className="modal-card-body">
          <h3 className="title is-1">New Food</h3>
            <form>
              <FormField
                label="Name"
                type="text"
                name="name"
                placeholder="Food Name"
                state={[state, setState]}
              />
              <FormField
                label="Calories"
                type="number"
                name="calories"
                placeholder="# Calories"
                state={[state, setState]}
              />
              <FormField
                label="Image"
                type="text"
                name="image"
                placeholder="Image Url"
                state={[state, setState]}
              />
              <button className="button mx-1" onClick={handleSubmit}>
                Save
              </button> 
              <button className="button is-danger mx-1" onClick={handleClose}>
                Cancel
              </button>
            </form>
        </section>
      </div>
    </div>
  );
}

export default FoodForm;