import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='col-6 history'>
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
    );
  }
}
