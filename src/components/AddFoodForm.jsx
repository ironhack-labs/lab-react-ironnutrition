import { useState } from "react";
const initialValue = {
    name: "",
    image: "",
    calories: "",
    servings: "",
}
// Your code here
function AddFoodForm({handleAddFood}) {
    const [data, setData] = useState(initialValue)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        handleAddFood({...data, id: crypto.randomUUID()})
        setData(initialValue)
    };
    return (
        <form className="d-flex flex-column gap-1 form mb-2" onSubmit={(event) => handleSubmit(event)}>
            <div className="d-flex justify-content-center gap-2 flex-row">
                <label htmlFor="name">Name</label>
                <input
                    value={data.name}
                    onChange={(event) => setData({...data, name: event.target.value })}
                    className="bg-light text-black"
                    type="text"
                    name="name"
                    id="name"
                />
            </div>
            <div className="d-flex justify-content-center gap-2 flex-row">
                <label htmlFor="image">Image</label>
                <input className="bg-light text-black"
                    value={data.image}
                    onChange={(event) => setData({...data, image: event.target.value })}
                    type="text"
                    name="image"
                    id="image"
                />
            </div>
            <div className="d-flex justify-content-center gap-2 flex-row">
                <label htmlFor="calories">Calories</label>
                <input className="bg-light text-black"
                    value={data.calories}
                    onChange={(event) => setData({...data, calories: event.target.value })}
                    type="number"
                    name="calories"
                    id="calories"
                />
            </div >
            <div className="d-flex justify-content-center gap-2 flex-row">
                <label htmlFor="servings">Servings</label>
                <input className="bg-light text-black"
                    value={data.servings}
                    onChange={(event) => setData({...data, servings: event.target.value })}
                    type="number"
                    name="servings"
                    id="servings"
                />
            </div >
            <div>
                <button
                    className="btn btn-primary"
                    type="submit"
                >
                    Create
                </button>
            </div>
        </form >
    );
}

export default AddFoodForm;