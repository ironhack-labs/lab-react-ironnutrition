function AddFoodForm(props) {
    
    return (
<form>
    <label>
        Name
        <input type="text" name="name"></input>
    </label>
    <label>
     Image
     <input type="text" name="image"></input>
    </label>
    <label>
    Calories
    <input type="Number" name="Calories"></input>
    </label>
    <label>
    Servings
    <input type="Number" name="Servings"></input>
    </label>
</form>
    );
  }
  export default AddFoodForm; 
  