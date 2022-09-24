import { Card, Button, Image, Typography } from 'antd';

const { Text } = Typography;

function FoodBox({ food, deleteFood }) {
  const { name, calories, image, servings } = food;

  function handleDelete() {
    deleteFood(name);
  }

  return (
    <Card title={name}>
      <Image height={100} src={image} />
      <br />
      <Text>
        Calories: <strong>{calories}</strong>
      </Text>
      <br />
      <Text>
        Servings: <strong>{servings}</strong>
      </Text>
      <br />
      <Text>
        Calories: <strong>{calories * servings}</strong> kcal
      </Text>
      <br />
      <Button
        onClick={() => {
          handleDelete();
        }}
      >
        Delete
      </Button>
    </Card>
  );
}

export default FoodBox;
