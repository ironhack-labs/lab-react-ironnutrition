import React     from 'react';
import Button    from './Button';
import FormField from './FormField';

const AddFood = ({values, handleCloseModal, onChange, onSubmit}) => (
  <div className="modal">
    <div className="modal-background" onClick={handleCloseModal}></div>
    <div className="modal-content">
      <form className="modal-card" onSubmit={onSubmit}>
        <header className="modal-card-head">
          <p className="modal-card-title">Add new food</p>
        </header>
        <section className="modal-card-body">
          <FormField
            label="Name"
            name="name"
            type="text"
            holder="Food's name"
            value={values.name}
            onChange={onChange}
          />
          <FormField
            label="Calories"
            name="kcal"
            type="number"
            holder="Food's calories"
            value={values.kcal}
            onChange={onChange}
          />
          <FormField
            label="Image's link"
            name="img"
            type="text"
            holder="Food image's link"
            value={values.img}
            onChange={onChange}
          />
        </section>
        <footer className="modal-card-foot">
          <Button className="button is-success" type="submit">Add</Button>
          <Button className="button" type="button" onClick={handleCloseModal}>Cancel</Button>
        </footer>
      </form>
    </div>
    <Button className="modal-close is-large" aria-label="close" type="button" onClick={handleCloseModal}></Button>
  </div>
);

export default AddFood;