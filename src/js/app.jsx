import React from 'react';
import Information from './components/Information/';
import Input from './components/Input/';
import SVG from '../../public/svg';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Input />

        <Information />
      </div>
    );
  }
}
