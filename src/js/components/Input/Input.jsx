import React from 'react';

import {
  updateCityName,
  searchCity
} from './inputActions'

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleSearchCity = this.handleSearchCity.bind(this);
    this.handleButtonSearch = this.handleButtonSearch.bind(this);
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

  handleButtonSearch(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(searchCity(value));
  }

  render() {
    const { cityInput } = this.props;

    return (
      <div className='inputGroup'>

        <div className='btn-group btn-group-toggle' data-toggle='buttons'>
          <label className='btn btn-secondary '>
            <input
              type='radio'
              name='options'
              id='option1'
              value='San Diego' onClick={ this.handleButtonSearch }
            />San Diego
          </label>
          <label className='btn btn-secondary'>
            <input
              type='radio'
              name='options'
              id='option1'
              value='New York' onClick={ this.handleButtonSearch }
            />New York
          </label>
          <label className='btn btn-secondary'>
            <input
              type='radio'
              name='options'
              id='option1'
              value='Washington DC.' onClick={ this.handleButtonSearch }
            />Washington D.C
          </label>
          <label className='btn btn-secondary'>
            <input
              type='radio'
              name='options'
              id='option1'
              value='London' onClick={ this.handleButtonSearch }
            />London
          </label>
          <label className='btn btn-secondary'>
            <input
              type='radio'
              name='options'
              id='option1'
              value='Tokyo' onClick={ this.handleButtonSearch }
            />Tokyo
          </label>
        </div>

        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            onKeyDown={ this.handleSearchCity }
            value={ cityInput }
            onChange={ this.handleCityInput }
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-dark'
              value='button'
              onKeyDown={ this.handleSearchCity }
              onClick={ this.handleSearchCity }
            >Go!</button>
          </div>
        </div>
      </div>
    );
  }
}
