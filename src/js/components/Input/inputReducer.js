const defaultState = {
  cityInput: '',
  cityName: '',
  lat: 0,
  lon: 0,
  temp: 0,
  pressure: 0,
  humidity: 0,
  temp_min: 0,
  temp_max: 0,
  windspd: 0,
  cities: []
}

export default function inputReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_INPUT': {
      return {
        ...state,
        cityInput: payload.cityName
      };
    }

    case 'SEARCH_CITY_FULFILLED': {
      return {
        ...state,
        cityName: payload.data.name,
        lat: payload.data.coord.lat,
        lon: payload.data.coord.lon,
        temp: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        temp_min: payload.data.main.temp_min,
        temp_max: payload.data.main.temp_max,
        windspd: payload.data.wind.speed,
      }
    }
    case 'SEARCH_CITY_REJECTED': {
      return { 
        ...state
      }
    }

    default: {
      return state;
    }
  }
}
