import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { MovieCards } from '../components';

import { fetchMovies, fetchSpecies } from '../actions';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getMovies, getSpecies } = this.props;
    getMovies();
    getSpecies();
  }

  handleClick(e) {
    e.preventDefault();
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    return (
      <main className="home-page">
        <MovieCards />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(fetchMovies()),
  getSpecies: () => dispatch(fetchSpecies()),
});

export default connect(null, mapDispatchToProps)(Home);

Home.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getSpecies: PropTypes.func.isRequired,
};
