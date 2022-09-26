import { Card, Avatar } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const { Meta } = Card;

function FoodCard({ name, calories, image, servings, onDelete }) {
    return(
        <Card style={{width: 300, marginBottom: '2rem', borderRadius: '1rem', height: 'auto'}} 
            cover={
                <img alt="food" src={image} style={{height: 250, padding:'1rem'}}/>
                }
            actions={[ <DeleteFilled  onClick={onDelete} />]}
        >
            <Meta
                avatar={<Avatar src='https://joeschmoe.io/api/v1/random'/>}
                title={<p>Title: {name}</p>}
                description={<p>Calories: {calories}</p>}
                servings={<p>Servings: {servings}</p>}
            />
        </Card>
    )
}

export default FoodCard