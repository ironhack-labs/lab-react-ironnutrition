import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods.map((food) => (
          <div>
            <p> {food.name} </p>
            <img src={food.image} width={100} alt={food.name} />
          </div>
        ))}

        <FoodBox
          food={{
            name: 'Orange',
            calories: 85,
            image: 'https://i.imgur.com/abKGOcv.jpg',
            servings: 1,
          }}
        />
      </Row>
    </div>
  );
}

export default App;
