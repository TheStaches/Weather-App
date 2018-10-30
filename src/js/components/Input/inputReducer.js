const defaultState = {
  cityInput: '',
  cityName: '',
  lat: null,
  lon: null,
  forecastList: [],
  searched: false,
  searchError: false,
  borderColor: 'borderTrans',
  hidden: 'hidden'
};

export default function inputReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_INPUT': {
      return {
        ...state,
        cityInput: payload.cityName,
        searched: false,
      };
    }

    case 'SEARCH_CITY_FULFILLED': {
      return {
        ...state,
        cityInput: '',
        cityName: payload.data.city.name,
        lat: `${payload.data.city.coord.lat},`,
        lon: payload.data.city.coord.lon,
        forecast: [
          payload.data.list[0],
          payload.data.list[8],
          payload.data.list[16],
          payload.data.list[24],
          payload.data.list[32],
          payload.data.list[payload.data.list.length - 1],
        ],
        searched: true,
        borderColor: 'borderTrans',
        hidden: ''
      };
    }

    case 'SEARCH_CITY_REJECTED': {
      return {
        ...state,
        searchError: true,
        borderColor: 'borderRed',
      };
    }

    default: {
      return state;
    }
  }
}
