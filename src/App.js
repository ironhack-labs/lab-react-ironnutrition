import { OmitProps } from 'antd/lib/transfer/ListBody';
import './App.css';
import FoodBox from './components/FoodBox';
import food from "./foods.json"


function App() {
  return (<div className="App">

    {food.map(banana =>
      <div>
      <FoodBox food={banana}/>
   
    </div> )}
   </div>
  );

}
    
export default App;

