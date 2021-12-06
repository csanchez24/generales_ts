import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Alert from './components/Layout/Alert';
import MainLayout from './components/Layout/MainLayout';
import Gener02 from './pages/gener02/gener02';
import Gener05 from './pages/gener05/gener05';
import Login from './pages/login';
import { clear } from './store/alert/action';
import { IGlobalState } from './store/reducers';

const App: React.FC = () => {
  const alert = useSelector((state: IGlobalState) => state.alert.data);
  const dispatch = useDispatch();
  return (
    <main>
      {alert?.message && (
        <Alert
          type={alert.type}
          title="success"
          message={alert.message}
          close={() => dispatch(clear())}
        />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route
            path="gener02"
            element={
              <RequireAuth>
                <Gener02 />
              </RequireAuth>
            }
          />
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
    </main>
  );
};

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector((state: IGlobalState) => state.auth.data);
  let location = useLocation();
  if (!auth.loggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

export default App;
