import { connect } from 'react-redux';
import Input from './Input';

function mapStoreToProps(store) {
  return {
    cityInput: store.input.cityInput,
    searched: store.input.searched,
    searchedError: store.input.searchedError,
    borderColor: store.input.borderColor,
  };
}

export default connect(mapStoreToProps)(Input);
