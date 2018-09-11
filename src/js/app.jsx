import React from 'react';
import History from './components/History/History';
import Information from './components/Information/Information'; 
import Input from './components/Input/Input';

export default class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
      
        <div className='jumbotron' id='jumbo'>
          <h1 className='display-4'>Origin Weather Application</h1>
          <p>Alway know if you'll need an umbrella</p>
        </div>


        <Input />
        

        <div className='row'>
          <Information />
          <History />
        </div>
      </div>
    );
  }
}
