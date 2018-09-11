import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <input type='text' className='form-control' />
          <div className='input-group-append'>
            <button className='btn btn-outline-dark'>Go!</button>
          </div>
        </div>

      </div>
    );
  }
}