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
  }

  handleCityInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateCityName(value));
  }

  handleSearchCity() {
    const { dispatch } = this.props;
    const { cityInput } =this.props;
    dispatch(searchCity(cityInput))
  }

  render() {
    const { cityInput } = this.props;

    return(
      <div className='inputGroup'>

        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-secondary ">
            <input type="radio" name="options" id="option1" />San Diego
          </label>
          <label className="btn btn-secondary active">
            <input type="radio" name="options" id="option1" />New York
          </label>
          <label className="btn btn-secondary">
            <input type="radio" name="options" id="option1" />Washington D.C
          </label>
          <label className="btn btn-secondary">
            <input type="radio" name="options" id="option1" />London
          </label>
          <label className="btn btn-secondary">
            <input type="radio" name="options" id="option1" />Tokyo
          </label>
        </div>

        <div className='input-group'>
          <input 
            type='text' 
            className='form-control' 
            value={ cityInput }
            onChange={ this.handleCityInput }
            />
          <div className='input-group-append'>
            <button 
              className='btn btn-outline-dark'
              onClick={ this.handleSearchCity }
              >Go!</button>
          </div>
        </div>
      </div>
    );
  }
}
