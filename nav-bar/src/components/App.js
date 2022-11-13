import './App.css';
import Nav from './nav/Nav';
import { carMarket } from '../carsAgObj';

function App() {
  return (
    <div>
      <Nav departments={Object.keys(carMarket)} />
    </div>
  );
}

export default App;
