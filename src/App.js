import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import { Adresses } from './routes';

function App() {
  return (
    <Router>
      <Adresses />
    </Router>
  );
}

export default App;