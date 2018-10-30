import React from 'react';
import SVG from '../../../../public/svg';
const moment = require('moment');


export default class Information extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { forecast, hidden } = this.props;
    return (
      <div className={ `infoCard row ${hidden}` }>
        <div className='col-8'>
          <div className='infoDate'>
            <h2>{ forecast && `${moment(forecast[0].dt_txt).format('dddd Do')} ` }</h2>
            <h2>{ forecast && `${moment(forecast[0].dt_txt).format('MMMM')} ` }</h2>
          </div>

          <div className='displayTemp'>
            <div className='temp'>{ forecast && `${forecast[0].main.temp.toFixed(0)}\u00B0` }</div>
          </div>

          <div className='fiveDayForecast'>
            <div className='forecast'>
              <div className='forecastDay'>{ forecast && `${moment(forecast[0].dt_txt).add(1, 'days').format('dddd')} ` }</div>
              <div className='forecastIcon'>{ forecast && SVG[forecast[1].weather[0].icon] }</div>
              <div className='forecastDeg'>{ forecast && `${forecast[1].main.temp.toFixed(0)}\u00B0` }</div>
            </div>
            <div className='forecast'>
              <div className='forecastDay'>{ forecast && `${moment(forecast[0].dt_txt).add(2, 'days').format('dddd')} ` }</div>
              <div className='forecastIcon'>{ forecast && SVG[forecast[2].weather[0].icon] }</div>
              <div className='forecastDeg'>{ forecast && `${forecast[2].main.temp.toFixed(0)}\u00B0` }</div>
            </div>
            <div className='forecast'>
              <div className='forecastDay'>{ forecast && `${moment(forecast[0].dt_txt).add(3, 'days').format('dddd')} ` }</div>
              <div className='forecastIcon'>{ forecast && SVG[forecast[3].weather[0].icon] }</div>
              <div className='forecastDeg'>{ forecast && `${forecast[3].main.temp.toFixed(0)}\u00B0` }</div>
            </div>
            <div className='forecast'>
              <div className='forecastDay'>{ forecast && `${moment(forecast[0].dt_txt).add(4, 'days').format('dddd')} ` }</div>
              <div className='forecastIcon'>{ forecast && SVG[forecast[4].weather[0].icon] }</div>
              <div className='forecastDeg'>{ forecast && `${forecast[4].main.temp.toFixed(0)}\u00B0` }</div>
            </div>
            <div className='forecast'>
              <div className='forecastDay'>{ forecast && `${moment(forecast[0].dt_txt).add(5, 'days').format('dddd')} ` }</div>
              <div className='forecastIcon'>{ forecast && SVG[forecast[5].weather[0].icon] }</div>
              <div className='forecastDeg'>{ forecast && `${forecast[5].main.temp.toFixed(0)}\u00B0` }</div>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <img className='image' src={ forecast && `gifs/${forecast[0].weather[0].icon}.gif` } />
        </div>
      </div>
    );
  }
}
