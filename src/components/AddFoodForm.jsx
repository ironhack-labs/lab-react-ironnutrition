function AddFoodForm(props) {
  console.log(props.imageValue)
    return (
    <>
      <h1>Add Food Entry</h1>
      <form
        onSubmit={function () {
          props.callbackToAdd(
            props.nameValue,
            props.imageValue,
            props.caloriesValue,
            props.servingsValue
          );
        }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            // required={true}
            placeholder="enter name of food"
            value={props.nameValue}
            onChange={(event) => {
              props.setNameValue(event.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            name="image"
            placeholder="enter the url"
            value={props.imageValue}
            onChange={(event) => {
                props.setImageValue(event.target.value);
            }}
          />
        </label>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            // required={true}
            placeholder="amount of calories"
            value={props.caloriesValue}
            onChange={(event) => {
                props.setCaloriesValue(event.target.value);
            }}
          />
        </label>
        <label>
          Servings:
          <input
            type="number"
            name="servings"
            // required={true}
            placeholder="amount of servings"
            value={props.servingsValue}
            onChange={(event) => {
                props.setServingsValue(event.target.value);
            }}
          />
        </label>

        <button type="submit">Create</button>
    
      </form>
    </>
  );
}

export default AddFoodForm;
