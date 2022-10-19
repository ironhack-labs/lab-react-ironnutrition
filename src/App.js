import './App.css';
import foods from './foods.json';

import { Row, Divider, Button } from 'antd';
import FoodBox from './component/FoodBox';


function App() {
  const [listOfFood, setListOfFood] = useState(foods);
  
  const foodList =(prevFoodList)=>{
    

  }
  listOfFood.map((food) => {
    return (
      <FoodBox food ={foodList} />
    );
  })
  return (
    <div className="App">
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        
      </Row>
    </div>
  );
}

export default App;
