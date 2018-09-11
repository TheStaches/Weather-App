import React from 'react';

export default class Information extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='col-6 information'>
            <div className='card'>
              <div className='card-header'>City Information</div>
              <div className='card-body cityName'>
                <h1>Tokyo</h1>
                <p>Lat/Long</p>
              </div>
              <div className='card-body>'>
                <div className='row'>
                  <div className='col-4 cityData'>
                    <h3>Tempurate (F)</h3>
                    <p>Info</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Pressure</h3>
                    <p>Info</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Humidity</h3>
                    <p>Info</p>
                  </div>
                </div>
              </div>
              <div className='card-body>'>
                <div className='row'>
                  <div className='col-4 cityData'>
                    <h3>Lowest Temp (F)</h3>
                    <p>Info</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Highest Temp (F)</h3>
                    <p>Info</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Wind Speed</h3>
                    <p>Info</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
    )
  }
}