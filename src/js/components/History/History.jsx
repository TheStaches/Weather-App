import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cities } = this.props;
    return (
      <div className='col-6 history'>
        <div className='card'>
          <div className='card-header'>Search History</div>
          <div className='card-body'>
            <table className='table'>
              <tbody>
                {
                  (cities.length > 0) ?
                    cities.map((city, index) => (
                      (
                        <tr key={ index }>
                          <td>{ city.cityName }</td>
                          <td>{ city.date }</td>
                        </tr>
                      )
                    )) : <tr />
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
