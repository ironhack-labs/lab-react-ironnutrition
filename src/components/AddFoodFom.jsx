

function AddFoodForm(){
    return(
        <form>
            <Divider>Add Food Entry</Divider>

            <label>Name</label>
            <Input value={undefined} type="text" onChange={() => {}} />

            <label>Image</label>
            {/* render antd <Input /> type="text" here */}
             <Input type = 'text' value = {undefined} onChange={() => {}}/>

            <label>Calories</label>
            {/* render antd <Input /> type="number" here */}
            <Input type = 'text' value = {undefined} onChange={() => {}}/>
            <label>Servings</label>
            {/* render antd <Input /> type="number" here */}
            <Input type = 'text' value = {undefined} onChange={() => {}}/>
            <button type="submit">Create</button>
    </form>
    )
}

export default AddFoodForm;