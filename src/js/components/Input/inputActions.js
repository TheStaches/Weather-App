import axios from 'axios';

export function updateCityName(cityName) {
  return {
    type: 'UPDATE_INPUT',
    payload: { cityName }
  };
}

export function searchCity(cityName) {
  return {
    type: 'SEARCH_CITY',
    payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=8e479903807d5a769d02e82404bfd1e0`)
  };
}
