import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import '../styles/movieCards.css';

class MovieCards extends React.Component {
  render() {
    const { movies } = this.props;
    if (!movies.length) return (<h1 className="main-cards">Loading...</h1>);
    return (
      <div className="main-cards">
        {movies.map((movie) => {
          const favoritedMovies = JSON.parse(
            localStorage.getItem('favoritedMovies'),
          ) || [];
          const isFavorite = favoritedMovies.find((favMovie) => favMovie.id === movie.id);
          return (
            <section key={ movie.id } className="movie-card">
              <div className="movie-card-details">
                <div className="movie-card-header">
                  <h2>{movie.title}</h2>
                  {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
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
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MovieCards);

MovieCards.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieCards.defaultProps = {
  movies: [],
};
