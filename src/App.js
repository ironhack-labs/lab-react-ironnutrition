// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

import './App.css';
import foods from "./foods.json";
import { useState } from 'react';

function App () {
  const [foodsArr, setFoodsArr] = useState(foods);
  return <div className="App">
    <h1>Food List</h1>
    {foodsArr.map((food, i) => {
      return <div key={i}>
        <p>{food.name}</p>
        <img src={food.image} alt={food.name} width={150} />
      </div>
    })}
  </div>;
}

export default App;