import { OmitProps } from 'antd/lib/transfer/ListBody';
import './App.css';
import FoodBox from './components/FoodBox';
import food from "./foods.json"
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';

function App() {
  return (<div className="App">
   
   <Row style={{ width: '100%', justifyContent: 'center' }}>
   {food.map(banana =>
      <div>
      <FoodBox food={banana}/>
   
    </div> )}
      </Row>
      <AddFoodForm />
    
   </div>
  );

}
    
export default App;

