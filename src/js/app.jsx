import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>

        <div className='jumbotron'>
          <h1 className='display-4'>Origin Weather Application</h1>
          <p>Alway know if you'll need an umbrella</p>
        </div>


        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-secondary active">
            <input type="radio" name="options" id="option1" checked />San Diego
          </label>
          <label className="btn btn-secondary">
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
            <button className='btn btn-outline-primary'>Go!</button>
          </div>
        </div>
        

        <div className='row'>

          <div className='col-6'>
            <div className='card'>
              <div className='card-header'>City Information</div>
              <div className='card-body>'>
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

          <div className='col-6'>
              <div className='card'>
                <div className='card-header'>Search History</div>
                <div className='card-body>'>
                  <table className='table'>
                    <tbody>
                      <tr>
                        <td>San Diego</td>
                        <td>04/28/2016 19:04:46</td>  
                      </tr>
                      <tr>
                        <td>New York</td>
                        <td>04/28/2016 19:04:46</td>  
                      </tr>
                      <tr>
                        <td>Washington D.C</td>
                        <td>04/28/2016 19:04:46</td>  
                      </tr>
                      <tr>
                        <td>London</td>
                        <td>04/28/2016 19:04:46</td>  
                      </tr>
                      <tr>
                        <td>Tokyo</td>
                        <td>04/28/2016 19:04:46</td>  
                      </tr>  
                    </tbody>                  
                  </table>
                </div>
            </div>
          </div> 

          </div>
        </div>
    );
  }
}
