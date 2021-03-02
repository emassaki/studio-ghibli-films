import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { MovieInfo } from './components';
import Home from './pages/Home';

import './styles/app.css';
import FavoriteMovies from './pages/FavoriteMovies';

function App() {
  return (
    <>
      <header className="master-header">
        <h1>Studio Ghibli Movies</h1>
        <nav className="nav-links">
          <Link to="/"><AiFillHome /></Link>
          <Link to="/favorited-movies"><AiFillStar /></Link>
        </nav>
      </header>

      <Switch>
        <Route path="/movies/:id" component={ MovieInfo } />
        <Route path="/favorited-movies" component={ FavoriteMovies } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </>
  );
}

export default App;
