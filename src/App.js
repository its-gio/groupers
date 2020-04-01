import React from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import Nav from './Components/Nav/Nav'
import './App.scss';

function App() {
  return (
    <HashRouter>
      <div>
        <Nav />
        { routes }
      </div>
    </HashRouter>
  );
}

export default App;
