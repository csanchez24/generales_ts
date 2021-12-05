import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <Link to="/gener02">Gener02</Link> | <Link to="/gener05">Gener05</Link>
      <Outlet />
    </div>
  );
}

export default App;
