import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/movieCards.css';

class MovieCards extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="main-cards">
        {movies.map((film) => (
          <section key={ film.id } className="movie-card">
            <div className="movie-card-details">
              <h2>{film.title}</h2>
              <p className="movie-card-description">{film.description}</p>
              <p>{`Release Date: ${film.release_date}`}</p>
            </div>
            <div className="more-details-btn">
              <Link to={ `/movies/${film.id}` } className="more-details-link">
                More Details
              </Link>
            </div>
          </section>
        ))}
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
