import React from 'react';
import logo from './logo.svg';
import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducers/index"
import { Provider } from 'react-redux';
import WidthAdjuster from './components/ScaleControls/WidthAdjuster';
import HeightAdjuster from './components/ScaleControls/HeightAdjuster';
import ScaleBoard from './components/Board/ScaleBoard';
import SelectScale from './pages/SelectScale';
import SelectPattern from './pages/SelectPattern';
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
