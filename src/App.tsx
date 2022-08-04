import React from 'react';
import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducers/index"
import { Provider } from 'react-redux';
import WidthAdjuster from './components/Controls/WidthAdjuster';
import HeightAdjuster from './components/Controls/HeightAdjuster';
import ScaleBoard from './components/Board/ScaleBoard';
import BoardScale from './pages/BoardScale';
import BoardFlip from './pages/BoardFlip';
import Router from './pages/Router';

function App() {
  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Sexy Weaving App</h1>
        </header>
      </div>
      <Router />
    </Provider>
  );
}

export default App;
