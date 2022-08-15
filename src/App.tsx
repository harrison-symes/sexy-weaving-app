import './App.css';
import { configureStore } from '@reduxjs/toolkit';
import reducer from "./reducers/index"
import { Provider } from 'react-redux';
import Router from './pages/Router';
import { Header } from './components/Header';

function App() {
  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="app-container">
          <Router />
        </div>
        <div className="controls-filler"></div>
      </div>
    </Provider>
  );
}

export default App;
