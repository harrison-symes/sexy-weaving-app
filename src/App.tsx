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
          <h2>Putting the "tech" in "textiles"</h2>
        </header>
      </div>
      <Router />
    </Provider>
  );
}

export default App;
