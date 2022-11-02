// Css imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FoodBox(props) {
  const { name, image, calories, servings } = props.eachItem;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img variant="top" src={image} />
        <Card.Text>Calories: {calories}</Card.Text>
        <Card.Text>Servings: {servings}</Card.Text>
        <Card.Title>Total Calories: {calories}Kcal</Card.Title>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default FoodBox;
