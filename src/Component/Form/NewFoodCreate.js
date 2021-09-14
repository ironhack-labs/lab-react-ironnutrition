import React, { useState } from "react"

function NewFoodCreate () {
    // const [showForm, setShowForm] = useState('');
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [image, setImage] = useState('');

    const handleCreateFood = (event) => {
        event.preventDefault();
    }

    const newFood = {
      name: name,
      calories: calories,
      image: image,
    };

    // setShowForm([...showForm, newFood]);
    setName('');
    setCalories('');
    setImage('');
  
        return (
        <div>
        <button> Add New Food</button>
        <form onSubmit={handleCreateFood}>
         <input
          type="text"
          name="name"
          placeholder="food"
          value={newFood.name}
          onChange={(event) => setName(event.target.value)}
        />
        
        <input
          type="number"
          name="calories"
          placeholder="calories"
          value={newFood.calories}
          onChange={(event) => setName(event.target.value)}
        />
        
        <input
          type="text"
          name="image"
          placeholder="image"
          value={newFood.image}
          onChange={(event) => setName(event.target.value)}
        />

        <button>Create food</button>
      </form>
    </div>
      // )
      // }
    );
}



   
        
        
          
 

export default NewFoodCreate