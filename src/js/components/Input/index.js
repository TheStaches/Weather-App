import { connect } from 'react-redux';
import Input from './Input';

function mapStoreToProps(store) {
  return {
    cityInput: store.input.cityInput
  };
}

export default connect(mapStoreToProps)(Input);
