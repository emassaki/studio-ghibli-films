import {
  REQUEST_FAIL,
  REQUEST_START,
  REQUEST_PEOPLE_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  people: [],
  isFetching: false,
};

export default function people(state = INITIAL_STATE, action) {
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
  case REQUEST_PEOPLE_SUCCESS:
    return {
      ...state,
      people: action.people,
      isFetching: false,
    };
  default:
    return state;
  }
}
