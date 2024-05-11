// import


// css
import './App.css';
import './style/hero.css'

// functional components
import NavbarNavigation from './components/NavigationBar'
import Intro from './components/Intro';

function App() {
  return (
    <div className='hero'>
      <NavbarNavigation/>
      <Intro/>
    </div>
  );
}

export default App;
