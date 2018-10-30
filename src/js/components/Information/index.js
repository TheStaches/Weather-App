import { connect } from 'react-redux';
import Information from './Information';

function mapStoreToProps(store) {
  return {
    cityName: store.input.cityName,
    lat: store.input.lat,
    lon: store.input.lon,
    forecast: store.input.forecast,
    searched: store.input.searched,
    hidden: store.input.hidden,
  };
}

export default connect(mapStoreToProps)(Information);
