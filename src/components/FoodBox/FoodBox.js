import { Card } from 'antd';

const { Meta } = Card;

// esto = {name, image, calories, servings} tiene que ir como esta en el json sino no lo encuentra

function FoodBox({ name, image, calories, servings }) {
    return (
    <Card
      style={{ width: 250 }}
      title=<h2><strong>{name}</strong></h2>
      cover={<img src={image} alt={name} height={200}/>}
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
