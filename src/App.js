import { useState } from 'react';
import FoodBox from './components/FoodBox';
import logo from './logo.svg';
import foods from './foods.json';
import './App.css';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

//   return (
//     <div className="App">
//             <Divider>Food List</Divider>
//       {foodsToDisplay.map((foodObj, index) => {
//         return (
//           <div>
      
//             <Row style={{ width: '100%', justifyContent: 'center' }}>
//               <FoodBox key={index} foodDetails={foodObj} />
//             </Row>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

return (
  <div className="App">
    <Divider>Food List</Divider>
    <Row gutter={[16, 16]} justify="center">
      {foodsToDisplay.map((foodObj, index) => (
        <FoodBox key={index} foodDetails={foodObj} />
      ))}
    </Row>
  </div>
);
}

export default App;
