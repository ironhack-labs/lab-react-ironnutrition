import foods from "./foods.json";
import './App.css';

import { Row, Divider, Button } from 'antd';


function App() {
  return (
    <div className="App" key = "App" >
      {/* Display Add Food component here */}

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>
      {foods.map(food => 
        <div >
              <p> {food.name}</p>
             <img src={food.image} alt="image here" width={200} />
       
         </div>
      
        )}


     

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;