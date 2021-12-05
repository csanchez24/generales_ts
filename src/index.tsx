import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Gener05 } from './pages/gener05/gener05';
import { Gener02 } from './pages/gener02/gener02';
import { Gener02Edit } from './pages/gener02/gener02Edit';

import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
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
            <Route path="gener02/:gener02Id" element={<Gener02Edit />} />
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
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
