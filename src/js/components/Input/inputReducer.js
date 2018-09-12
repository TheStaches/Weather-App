const defaultState = {
  cityName: ''
}

export default function inputReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CITY_NAME': {
      return {
        ...state,
        cityName: payload.cityName
      };
    }

    default: {
      return state;
    }
  }
}


// city = {
//   coord: {
//     lat: '',
//     lon: '',
//   },
//   main: {
//     temp: '',
//     pressure: '',
//     humidity: '',
//     temp_min: '',
//     temp_max: '',
//   }
//   wind: {
//     speed: '',
//     deg: '',
//   },
//   name: '',
//   id: '',
// }