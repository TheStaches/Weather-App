import { connect } from 'react-redux';
import Information from './Information';

function mapStoreToProps(store) {
  return {
    cityName: store.input.cityName,
    lat: store.input.lat,
    lon: store.input.lon,
    temp: store.input.temp,
    pressure: store.input.pressure,
    humidity: store.input.humidity,
    temp_min: store.input.temp_min,
    temp_max: store.input.temp_max,
    windspd: store.input.windspd,
    icon: store.input.icon,
  };
}

export default connect(mapStoreToProps)(Information);
