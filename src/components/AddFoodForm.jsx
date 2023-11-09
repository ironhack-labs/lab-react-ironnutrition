function addFoodForm(props) {
    return (
        <form
            onSubmit={() => {
                props.callbackToSubmit;
            }}
        >
            <label>
                Name
                <input
                    name="name"
                    type="text"
                    required={true}
                    //value={props....}
                ></input>
            </label>
            <label>
                Image
                <input
                    name="image"
                    type="text"
                    //value={props....}
                ></input>
            </label>
            <label>
                Calories
                <input
                    name="calories"
                    type="number"
                    required={true}
                    //value={props....}
                ></input>
            </label>
            <label>
                Servings
                <input
                    name="servings"
                    type="number"
                    required={true}
                    //value={props....}
                ></input>
            </label>
            <button>Create</button>
        </form>
    );
}

export default addFoodForm;