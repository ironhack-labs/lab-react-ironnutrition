function AddFoodForm(props) {
  return (
    <>
    <h1>Add Food Entry</h1>
    <form
      onSubmit={function () {
        props.callbackToAdd();
      }}
    >
      <label>
        Name:
        <input 
        type="text" 
        name="name"
        required={true} />
      </label>
      <label>
        Image:
        <input 
        type="text" 
        name="image" />
      </label>
      <label>
        Calories:
        <input 
        type="number" 
        name="calories"
        required={true} />
      </label>
      <label>
        Servings:
        <input 
        type="number" 
        name="servings"
        required={true} />
      </label>
      <button type="submit">Create</button>
    </form>
    </>
  );
}

export default AddFoodForm;
