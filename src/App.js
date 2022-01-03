import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import * as React from 'react';
import PaginationScroll from './components/PaginationScroll';
import acVideo from './assets/videos/ac-valhalla.mp4';
import Profile from './components/pages/Profile';

function App() {
  return (
    <div className="app">
        <div className='light x1'></div>
        <div className='light x2'></div>
        <div className='light x3'></div>
        <div className='light x4'></div>
        <div className='light x5'></div>
        <div className='light x6'></div>
        <div className='light x7'></div>
        <div className='light x8'></div>
        <div className='light x9'></div>
      <Header name="Mangaliso" surname="Mtembu"/>
      <Profile/>
      {/* <div className='pagination'>
        <PaginationScroll/>
      </div> */}
      {/* <div className='backVideo'>
        <video autoPlay loop muted>
          <source src={acVideo} type='video/mp4'/>
        </video>
      </div> */}
      <div className='navigation'>
        <ul>
          <li><a className='active' href='#profile'>Profile</a></li>
          <li><a href='#education'>Education</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#accomplishments'>Accomplishments</a></li>
          <li><a href='#abilities'>Skills & Abilities</a></li>
        </ul>
      </div>

    </div>
  );
}

export default App;
