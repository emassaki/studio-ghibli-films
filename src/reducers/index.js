import { combineReducers } from 'redux';
import movies from './movies';
import people from './people';
import species from './species';

const reducer = combineReducers({ movies, people, species });

export default reducer;
