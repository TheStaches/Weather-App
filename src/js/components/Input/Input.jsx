import React from 'react';
import SVG from '../../../../public/svg';

import {
  updateCityName,
  searchCity
} from './inputActions';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleSearchCity = this.handleSearchCity.bind(this);
  }

  handleCityInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCityName(value));
  }

  handleSearchCity(event) {
    const { dispatch } = this.props;
    const { cityInput } = this.props;
    if (event.key === 'Enter' || event.target.value === 'button') {
      dispatch(searchCity(cityInput));
    }
  }

  render() {
    const { cityInput, searched, borderColor } = this.props;

    return (
      <div className='header'>
        <h1 className='title'>How's the Weather?</h1>
        <input
          className={ `input ${borderColor}` }
          placeholder='Enter your city or town...'
          onKeyDown={ this.handleSearchCity }
          value={ cityInput }
          onChange={ this.handleCityInput }
        />

        {
          searched ? SVG.chevron : <span />
        }
      </div>
    );
  }
}
