import React from 'react';

export default class Information extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cityName, lat, lon, temp, pressure, humidity, temp_min, temp_max, windspd, icon } = this.props;
    return (
      <div className='col-6 information'>
            <div className='card'>
              <div className='card-header'>City Information</div>
              <div className='card-body cityName'>
                <h1 className='cityTitle'>{ cityName }</h1>
                {
                  (icon) ? 
                  <img src={`https://openweathermap.org/img/w/${icon}.png`} />  :
                  <span></span>
                  
                }
                <p>Lat/Long:{ lat }{ lon }</p>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-4 cityData'>
                    <h3>Tempurate (F)</h3>
                    <p>{ temp }</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Pressure</h3>
                    <p>{ pressure }</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Humidity</h3>
                    <p>{ humidity }</p>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-4 cityData'>
                    <h3>Low Temp (F)</h3>
                    <p>{ temp_min }</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>High Temp (F)</h3>
                    <p>{ temp_max }</p>
                  </div>
                  <div className='col-4 cityData'>
                    <h3>Wind Speed</h3>
                    <p>{ windspd }</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
    )
  }
}
