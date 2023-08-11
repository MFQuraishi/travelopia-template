import React from 'react';
import './App.scss';
import HeroBanner from './components/HeroBanner/HeroBanner';

function App() {
  return (
    <>
      <div className='demo-top-bar'>
        Navbar goes here
      </div>
      <HeroBanner/>
      <div className='demo-content'>
        Page Content goes here
      </div>
    </>);
}

export default App;
