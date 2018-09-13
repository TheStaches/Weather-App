const defaultState = {
  cityInput: '',
  cityName: '',
  lat: null,
  lon: null,
  temp: null,
  pressure: null,
  humidity: null,
  temp_min: null,
  temp_max: null,
  windspd: null,
  icon: '',
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
        cityInput: '',
        cityName: payload.data.name,
        lat: payload.data.coord.lat + ',',
        lon: payload.data.coord.lon,
        temp: payload.data.main.temp.toFixed(1) + 'F',
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity + '%',
        temp_min: payload.data.main.temp_min.toFixed(1) + 'F',
        temp_max: payload.data.main.temp_max.toFixed(1) + 'F',
        windspd: payload.data.wind.speed.toFixed(1) + 'MPH',
        icon: payload.data.weather[0].icon,
        cities: [{
          cityName: payload.data.name,
          date: new Date().toUTCString()
        }, 
        ...state.cities]
      };
    }
    

    case 'SEARCH_CITY_REJECTED': {
      return state;
    }

    default: {
      return state;
    }
  }
}
