import { Card, Row, Col, Divider, Input, Button } from 'antd';


function AddFoodForm () {
    return (
        <div>
        <form>
            <label htmlFor="name">Name</label>
            <Input  type="text" />

            <label htmlFor="image">Image</label>
            <Input  type="text" />

            <label htmlFor="calories">Calories</label>
            <Input  type="number" />

            <label htmlFor="servings">Servings</label>
            <Input  type="number" />

            <button> Create </button>


        </form>

        </div>

    )
}

export default AddFoodForm;