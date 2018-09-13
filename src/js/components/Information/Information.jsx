import React from 'react';

export default class Information extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, lat, lon, temp, pressure, humidity, temp_min, temp_max, windspd } = this.props;
    return (
      <div className='col-6 information'>
            <div className='card'>
              <div className='card-header'>City Information</div>
              <div className='card-body cityName'>
                <h1>{name}</h1>
                <p>{lat / lon}</p>
              </div>
              <div className='card-body>'>
                <div className='row'>
                  <div className='col-4 cityData'>
                    <h3>Tempurate (F)</h3>
                    <p>{temp}</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Pressure</h3>
                    <p>{pressure}</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Humidity</h3>
                    <p>{humidity}</p>
                  </div>
                </div>
              </div>
              <div className='card-body>'>
                <div className='row'>
                  <div className='col-4 cityData'>
                    <h3>Lowest Temp (F)</h3>
                    <p>{temp_min}</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Highest Temp (F)</h3>
                    <p>{temp_max}</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Wind Speed</h3>
                    <p>{windspd}</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
    )
  }
}


// name: payload.data.name,
// lat: payload.data.coords.lat,
// lon: payload.data.coords.lon,
// temp: payload.data.main.temp,
// pressure: payload.data.main.pressure,
// humidity: payload.data.main.humidity,
// temp_min: payload.data.main.temp_min,
// temp_max: payload.data.main.temp_max,
// windspd: payload.data.wind.speed,