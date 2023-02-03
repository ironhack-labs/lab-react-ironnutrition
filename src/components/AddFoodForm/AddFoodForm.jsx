import './AddFoodForm.css'
import { InputNumber, Input, Button } from 'antd';

const AddFoodForm = () => {
    return(
        <>
        <h2>Add Food Entry</h2>
        <form>
            <div>
                <label>Name</label>
            </div>
            <Input placeholder="Name" style={{width: '95%'}}/>
            <div>
                <label>Image</label>
            </div>
            <Input placeholder="Image" style={{width: '95%'}}/>
            <label>Calories</label>
            <InputNumber min={1} max={2000} defaultValue={1} style={{width: '95%'}} name='calories'/>
            <label>Servings</label>
            <InputNumber min={1} max={3} defaultValue={1} style={{width: '95%'}} name='servings'/>
            <Button className='btn' type="primary">Create</Button>
        </form>
        </>
    );
};

export default AddFoodForm;