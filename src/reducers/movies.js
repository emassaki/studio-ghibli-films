import {
  REQUEST_FAIL,
  REQUEST_START,
  REQUEST_FILM_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  movies: [],
  isFetching: false,
};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_START:
    return {
      ...state,
      isFetching: true,
    };
  case REQUEST_FAIL:
    return {
      ...state,
      error: action.error,
      isFetching: false,
    };
  case REQUEST_FILM_SUCCESS:
    return {
      ...state,
      movies: action.movies,
      isFetching: false,
    };
  default:
    return state;
  }
}
