import 'bulma/css/bulma.css';
import React from 'react';
import foods from './foods.json';
import FooBox from './components/FooBox';
import Form from './components/Form';

import './App.css';

function App() {
  return (
    <div className="App">
      
      <Form />
     <FooBox/>
     
    </div>
  );
}

export default App;
