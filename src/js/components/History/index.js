import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
  return {
    cities: store.input.cities
  };
}

export default connect(mapStoreToProps)(History);
