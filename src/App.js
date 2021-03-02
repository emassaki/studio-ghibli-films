import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MovieInfo } from './components';
import Home from './pages/Home';

import './styles/app.css';

function App() {
  return (
    <>
      <header className="master-header">
        <h1>Studio Ghibli Movies</h1>
        <nav>
          <Link to="/"><AiFillHome /></Link>
        </nav>
      </header>

      <Switch>
        <Route path="/movies/:id" component={ MovieInfo } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </>
  );
}

export default App;
