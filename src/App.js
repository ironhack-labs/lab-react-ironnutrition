import './App.css';
import Home from './components/views/Home/Home';
import Navbar from './components/misc/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />
    
      <div className="container my-5">
        
        <Home />

      </div>
   
     
    </div>
  );
}

export default App;
