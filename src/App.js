import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { AiFillHome, AiFillStar } from 'react-icons/ai';
import Home from './pages/Home';
import About from './pages/About';
import FavoriteMovies from './pages/FavoriteMovies';
import MovieInfo from './pages/MovieInfo';

import './styles/app.css';

function App() {
  return (
    <>
      <header className="master-header">
        <h1>Studio Ghibli Movies</h1>
        <nav className="nav-links">
          <Link to="/"><AiFillHome /></Link>
          <Link to="/favorited-movies"><AiFillStar /></Link>
          <Link to="/about"><AiFillStar /></Link>
        </nav>
      </header>

      <Switch>
        <Route path="/movies/:id" component={ MovieInfo } />
        <Route path="/favorited-movies" component={ FavoriteMovies } />
        <Route path="/about" component={ About } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </>
  );
}

export default App;
