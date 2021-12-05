import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Alert from './components/Layout/Alert';
import { Gener02 } from './pages/gener02/gener02';
import { Gener05 } from './pages/gener05/gener05';
import { Login } from './pages/login';
import { alertState } from './store/alert/types';
import { authState } from './store/authentication/types';

interface IGlobalState {
  alert: alertState;
  auth: authState;
}

const App: React.FC = () => {
  const alert = useSelector((state: IGlobalState) => state.alert.data);
  return (
    <main>
      {alert?.message && (
        <Alert type={alert.type} title="success" message={alert.message} close={() => {}} />
      )}{' '}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route path="gener02" element={<Gener02 />}>
            <Route
              index
              element={
                <main style={{ padding: '1rem' }}>
                  <p>Select an invoice</p>
                </main>
              }
            />
          </Route>
          <Route path="gener05" element={<Gener05 />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
      <h1>Bookkeeper!</h1>
      <Link to="/gener02">Gener02</Link> | <Link to="/gener05">Gener05</Link>
      <Outlet />
    </main>
  );
};

export default App;
