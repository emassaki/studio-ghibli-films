import {
  REQUEST_FAIL,
  REQUEST_START,
  REQUEST_SPECIES_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  species: [],
  isFetching: false,
};

export default function species(state = INITIAL_STATE, action) {
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
  case REQUEST_SPECIES_SUCCESS:
    return {
      ...state,
      species: action.species.map(({ name, id }) => ({ name, id })),
      isFetching: false,
    };
  default:
    return state;
  }
}
