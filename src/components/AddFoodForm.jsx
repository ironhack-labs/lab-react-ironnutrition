
function AddFoodForm(props) {
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add new plate</h2>
                <label>Name</label>
                <input type="text" placeholder="Name" onChange={props.addName}></input><br />
                <label>Img</label>
                <input type="text" placeholder="url of the image" onChange={props.addImg}></input><br />
                <label>Calories</label>
                <input type="number" onChange={props.addCalories} ></input><br />
                <label>Servings</label>
                <input type="number" onChange={props.addServings} ></input><br />
                <button type='submit' onClick={props.addFood} >Add</button>
            </form>
        </div>
    )
}

export default AddFoodForm