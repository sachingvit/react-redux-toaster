import React from 'react';
import './App.css';
import ToastContainer from './Toast/ToastContainer';

import { Provider } from 'react-redux';
import Store from './Core/store';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
