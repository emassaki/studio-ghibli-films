import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaRegSadCry } from 'react-icons/fa';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { fetchPeople } from '../actions';

import '../styles/movieInfo.css';

class MovieInfo extends React.Component {
  componentDidMount() {
    const { getPeople } = this.props;
    getPeople();
  }

  favoriteClick(movie) {
    if (!localStorage.getItem('favoritedMovies')) {
      localStorage.setItem('favoritedMovies', JSON.stringify([movie]));
    } else {
      const fav = JSON.parse(localStorage.getItem('favoritedMovies'));
      const newFav = fav
        .some((favMovie) => favMovie.id === movie.id) ? [...fav] : [...fav, movie];
      localStorage.setItem('favoritedMovies', JSON.stringify(newFav));
    }
  }

  unFavoriteClick(movie) {
    if (!localStorage.getItem('favoritedMovies')) {
      localStorage.setItem('favoritedMovies', JSON.stringify([]));
    } else {
      const fav = JSON.parse(localStorage.getItem('favoritedMovies'));
      const newFav = fav.filter((favMovie) => favMovie.id !== movie.id);
      localStorage.setItem('favoritedMovies', JSON.stringify(newFav));
    }
  }

  renderCharacters(characters, species) {
    return (
      <div className="characters-main">
        <h2 className="characters-header">Characters</h2>
        <div className="characters-card-container">
          {characters.map((character) => {
            const {
              name,
              gender,
              age,
              eye_color: eyeColor,
              hair_color: hairColor,
              species: speciesURL,
            } = character;
            const type = species.find(
              (specie) => specie.id === speciesURL.split('/')[4],
            );
            const { name: specieName } = type;
            return (
              <div key={ character.id } className="character-cards">
                <div className="character-name">
                  <h3>{name}</h3>
                </div>
                <div className="character-details">
                  <p>{`Gender: ${gender}`}</p>
                  <p>{`Age: ${age}`}</p>
                  <p>{`Eye color: ${eyeColor}`}</p>
                  <p>{`Hair color: ${hairColor}`}</p>
                  <p>{`Specie: ${specieName}`}</p>
                </div>
              </div>
            );
          })}
        </div>
        ;
      </div>
    );
  }

  renderButtons(selectedMovie) {
    return (
      <div className="fav-btns">
        <button type="button" onClick={ () => this.favoriteClick(selectedMovie) }>
          Favorite
          <AiFillStar />
        </button>
        <button type="button" onClick={ () => this.unFavoriteClick(selectedMovie) }>
          Unfavorite
          <AiOutlineStar />
        </button>
      </div>
    );
  }

  render() {
    const {
      movies,
      people,
      species,
      match: {
        params: { id },
      },
    } = this.props;
    const selectedMovie = movies.find((movie) => movie.id === id);
    const characters = people.filter(
      (person) => person.films.includes(`https://ghibliapi.herokuapp.com/films/${id}`),
    );
    return (
      <main className="main-details">
        <div className="selected-movie">
          <h2>Movie Details</h2>
          <div className="movie-details">
            <h3>{selectedMovie.title}</h3>
            <p>{selectedMovie.description}</p>
            <p>{`Director: ${selectedMovie.director}`}</p>
            <p>{`Release Date: ${selectedMovie.release_date}`}</p>
            <p>{`Rotten Tomatoes Score: ${selectedMovie.rt_score}`}</p>
            {this.renderButtons(selectedMovie)}
          </div>
        </div>
        {characters.length > 0 ? (
          this.renderCharacters(characters, species)
        ) : (
          <div className="characters-header">
            <FaRegSadCry className="sad-emote" />
            <h2>
              No Characters Found
            </h2>
            <FaRegSadCry className="sad-emote" />
          </div>
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  people: state.people.people,
  species: state.species.species,
});

const mapDispatchToProps = (dispatch) => ({
  getPeople: () => dispatch(fetchPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);

MovieInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  getPeople: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object),
  people: PropTypes.arrayOf(PropTypes.object),
  species: PropTypes.arrayOf(PropTypes.object),
};

MovieInfo.defaultProps = {
  movies: [],
  people: [],
  species: [],
};
