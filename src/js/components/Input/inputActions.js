export function updateCityName(cityName) {
  return {
    type: 'UPDATE_CITY_NAME',
    payload: { cityName }
  }
}

export function searchCity(cityName) {
  axios.get(`api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${process.env.API_KEY}`)
    .then()
  
  return {
    type: '',
    
  }
}
