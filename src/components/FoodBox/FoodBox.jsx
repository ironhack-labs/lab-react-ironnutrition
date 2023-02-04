import { Card, Space, Button, Image  } from 'antd';

const FoodBox = ({name,image,calories,servings, ...props}) => {
    return(
        <Space direction="vertical" size={16} >
            <Card title={name}  style={{ width: 300 }}>
                <Image src={image} width={100}/>
                <p>Calories: {calories}</p>
                <p>Servings:<strong> {servings}</strong></p>
                <p><strong>Total Calories: {calories * servings}</strong> Kcal</p>
                <Button type="primary">Delete</Button>
            </Card>
        </Space>
    );
};

export default FoodBox;