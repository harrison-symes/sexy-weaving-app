import React from 'react';
import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducers/index"
import { Provider } from 'react-redux';
import Router from './pages/Router';

function App() {
  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>🐞 Weevil 🐞</h1>
        </header>
      </div>
      <Router />
    </Provider>
  );
}

export default App;
