import { Button } from 'antd';
import AddFoodForm from './AddFoodForm';
import { useState } from 'react';

const AddFoodButton = (props) => {
    const [visible, setVisible] = useState(false);
    return <>
        {visible ? 
            <>
            <AddFoodForm callbackAddFood={props.callbackAddFood}/>
            <Button type="primary" onClick={() => {setVisible(false)}}> Hide Form </Button> 
            </> :
            <Button type="primary" onClick={() => {setVisible(true)}}> Add New Food </Button>
        }
    </>
};

export default AddFoodButton;