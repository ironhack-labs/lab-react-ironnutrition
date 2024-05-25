import { useState } from "react";

const AddFoodForm = ({ addFood }) => {
    //Los valores de los inputs se maneja con variables de estado que al recoge el value
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);

    //La funcion para manejar el form
    //Le pasamos el evento para poder manejar su comportamiento por defecto
    const handleSubmit = (e) => {
        e.preventDefault()

        //Creamos el obejo con los valores de los inputs
        const newFood = {
            id: Math.random().toString(),
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }
        addFood(newFood)
    }

  return (
    //Para que funcione la funcion la tiene que tener el form, no el botón
    <form className="my-5 col-6 m-auto" onSubmit={handleSubmit}>
      <h2>Añde tu receta</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          aria-describedby="emailHelp"
          //Cambiamos la variable con el valor del input
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Imagen url
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={image}
          aria-describedby="emailHelp"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="calories" className="form-label">
          Calories
        </label>
        <input
          type="number"
          className="form-control"
          id="calories"
          name="calories"
          value={calories}
          aria-describedby="emailHelp"
          onChange={(e) => setCalories(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="servings" className="form-label">
          Servings
        </label>
        <input
          type="number"
          className="form-control"
          id="servings"
          name="servings"
          value={servings}
          aria-describedby="emailHelp"
          onChange={(e) => setServings(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default AddFoodForm;
