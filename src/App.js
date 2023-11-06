import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeBg from './assets/home/background-home-desktop.jpg';
import HomeBgTablet from './assets/home/background-home-tablet.jpg';
import HomeBgMobile from './assets/home/background-home-mobile.jpg';
import Home from './pages/Home';

function App() {
  return (
    <div className="App relative h-screen w-full">
      <img src={HomeBg} alt='Desktop Page Background' className='w-full h-screen absolute top-0 -z-10 hidden lg:block'/>
      <img src={HomeBgTablet} alt='Tablet Page Background' className='w-full h-screen absolute top-0 -z-10 hidden lg:hidden md:block'/>
      <img src={HomeBgMobile} alt='Desktop Page Background' className='w-full h-screen absolute top-0 -z-10 block md:hidden'/>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
