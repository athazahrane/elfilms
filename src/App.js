// import
import React, { useEffect } from 'react'
import $ from 'jquery'
import 'paroller.js'


// css
import './App.css';
import './style/hero.css'

// functional components
import NavbarNavigation from './components/NavigationBar'
import Intro from './components/Intro'
import Trending from './components/Trending'

function App() {

  return (

    // hero section
    <div className='hero' data-paroller-factor="0.5" data-paroller-factor-xs="0.2">
      <NavbarNavigation />
      <Intro />
      <Trending />
    </div>
    // end hero

  );
}

export default App;
