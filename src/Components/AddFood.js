import React, {useState} from 'react';

const AddFood = ({allFood, setFood}) => {
  const [name, setName] = useState('add Name');
  const [calories, setInputCalories] = useState('Add Calories');
  const [pictureURL, setInputImage] = useState('Add Image URL here');

  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleInputchange = (event) => {
    event.preventDefault();

    const newFood = {
      name: name,
      calories: calories,
      image: pictureURL,
      quantity: 0,
    };

    setFood([...allFood, newFood]);
    setName('');
    setInputImage('');
    setInputCalories('');
  };

  const onClick = () => {
    setShowForm(!showForm);
    setShowButton(!showButton);
  };
  return (
    <div>
      {showButton &&  <button onClick={onClick} className="button">
        Add new food here!
      </button>}

      {showButton && (
        <button onClick={onClick} className="button">
          Add new food here!
        </button>
      )}

      {showForm && (
        <form onSubmit={handleInputchange} className="create-contact-container">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Contact Name"
              value={name}
              onChange={(event) => setName(event.target.value)} // atualizando o estado do name com o valor do input
            />
          </div>
          <div>
            <input
              type="text"
              name="pictureUrl"
              placeholder="Picture URL"
              value={pictureURL}
              onChange={(event) => setInputImage(event.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              name="Calories"
              placeholder="Add Calories"
              value={calories}
              onChange={(event) => setInputCalories(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">SUBMIT!</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddFood;
