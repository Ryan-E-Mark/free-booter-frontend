import './App.css';
import React from 'react';
import Nav from './components/nav';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <h1>Freebooter</h1>
        <div>
          <p>Free your feet, free your soul</p>
        </div>   
      </div>

    </Router>
  );
}

export default App;
