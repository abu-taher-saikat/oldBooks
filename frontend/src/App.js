import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Headers from './Components/Headers';

function App() {
  return (
    <div className="App">
      <Headers></Headers>
       <Router></Router>
       <h1>hi</h1>
    </div>
  );
}

export default App;
