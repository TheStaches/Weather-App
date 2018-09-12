import { connect } from 'react-redux';
import Input from './Input';

function mapStoreToProps(store) {
  return {
    cityName: store.input.cityName
  };
}

export default connect(mapStoreToProps)(Input);
