import { Card } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const { Meta } = Card;

// esto = {name, image, calories, servings} tiene que ir como esta en el json sino no lo encuentra

function FoodBox({ name, image, calories, servings, onDelete }) {
    return (
    <Card
      style={{ width: 250 }}
      title=<h2><strong>{name}</strong></h2>
      cover={<img src={image} alt={name} width={150}height={150}/>}
      actions={[
      <DeleteFilled onClick={onDelete} />
    ]}
    >
      <Meta
        description=
        <div>
          <p>Calories: {calories}</p>
          <p>Servings:<strong> {servings}</strong></p>
          <p><strong>Total Calories: {calories}</strong> kcal</p>
        </div>
      />
    </Card>
  );
}

export default FoodBox;
