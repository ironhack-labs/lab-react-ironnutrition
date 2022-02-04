import React, { useState } from 'react';

function Modal(props) {
  const [isActive, setActive] = useState('');

  //Objecto
  const [newFood, setNewFood] = useState({ name: '', calories: '', image: '' });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFood((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('newFood', newFood);
    props.addFood(newFood); //<--- le estamos mando al papá o mamá  infromacion desde el hijo
    setActive(''); //para cerrar el modal
  };
  /*
    {name:"Perro",calories:500,image:'https://...'}
    (prevState)=>{
        1){}
        2)//...
          {name:"Perro",calories:500,image:'https://...'}
        3) {caloires:500,image:'https://...',name:'Gordita de Suadero'}
        return {...prevState, [name]:value}
    }
    //
     (prevState)=>{
        return {[name]:value}
    }
    {name:"Perro",calories:500,image:'https://...'} se hace un delete
    //
    {name:'perro'}
  
  */
  return (
    <div>
      <div className={'modal ' + isActive}>
        <div className="modal-background"></div>
        <div className="modal-content">
          {/* Form */}
          <form className="card" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name Food</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Queso"
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Number calories</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="Calories"
                  name="calories"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Add Image</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Image"
                  name="image"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit">
                  Submit
                </button>
              </div>
              <div className="control">
                <button
                  className="button is-link is-light"
                  type="reset"
                  onClick={() => (setActive(''), setNewFood({}))}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setActive('')}
        ></button>
      </div>
      <button
        className="button is-primary is-large modal-button"
        data-target="modal"
        aria-haspopup="true"
        onClick={() => setActive('is-active')}
      >
        Add New Food
      </button>
    </div>
  );
}

export default Modal;