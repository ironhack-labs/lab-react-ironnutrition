import './App.css';
import FoodBox from './FoodBox'

import 'bulma/css/bulma.css';

import foods from '../foods.json';

function App() {



  return (
    <>
    {foods.map(elm => <FoodBox {...elm} />)}
    </>
  );
}

export default App;
