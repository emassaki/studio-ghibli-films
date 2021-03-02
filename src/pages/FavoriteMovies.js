import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import { Link } from 'react-router-dom';

class FavoriteMovies extends React.Component {
  handleClick(e) {
    e.preventDefault();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const favoritedMovies = JSON.parse(localStorage.getItem('favoritedMovies'));
    return (
      <main className="fav-page">
        <div className="main-cards">
          {favoritedMovies.map((movie) => (
            <section key={ movie.id } className="movie-card">
              <div className="movie-card-details">
                <div className="movie-card-header">
                  <h2>{movie.title}</h2>
                  <AiFillStar />
                </div>
                <p className="movie-card-description">{movie.description}</p>
                <p>{`Release Date: ${movie.release_date}`}</p>
              </div>
              <div className="more-details-btn">
                <Link to={ `/movies/${movie.id}` } className="more-details-link">
                  More Details
                </Link>
              </div>
            </section>
          ))}
        </div>
      </main>
    );
  }
}

export default FavoriteMovies;
