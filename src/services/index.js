const MOVIES_API_URL = 'https://ghibliapi.herokuapp.com/films';
const PEOPLE_API_URL = 'https://ghibliapi.herokuapp.com/people';
const SPECIES_API_URL = 'https://ghibliapi.herokuapp.com/species';

const getResponse = (response) => (
  response
    .json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
);

export const getGhibliMoviesAPI = () => (
  fetch(MOVIES_API_URL)
    .then((response) => getResponse(response))
);

export const getGhibliPeopleAPI = () => (
  fetch(PEOPLE_API_URL)
    .then((response) => getResponse(response))
);

export const getGhibliSpeciesAPI = () => (
  fetch(SPECIES_API_URL)
    .then((response) => getResponse(response))
);
