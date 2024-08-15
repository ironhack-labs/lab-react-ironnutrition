function AddFoodForm(props) {
    const addNewFood = props.addNewFood

    return (
        <form onSubmit={(event) => addNewFood(event)}>
            <label>Name</label>
            <input name="name" type="text"></input>
            <label>Image</label>
            <input name="image" type="text"></input>
            <label>Calories</label>
            <input name="calories" type="number"></input>
            <label>Servings</label>
            <input name="servings"  type="number"></input>
            <button type="submit">Create</button>
        </form>
    )
}

export default AddFoodForm;