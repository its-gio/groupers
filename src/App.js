import React from 'react';
import routes from './routes';
import './App.scss';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        { routes }
      </div>
    </HashRouter>
  );
}

export default App;
