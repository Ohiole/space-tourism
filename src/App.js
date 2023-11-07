import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ContextPage } from './Context/ContextPage';
import Header from './components/Header';
import HomeBg from './assets/home/background-home-desktop.jpg';
import HomeBgTablet from './assets/home/background-home-tablet.jpg';
import HomeBgMobile from './assets/home/background-home-mobile.jpg';
import Home from './pages/Home';
import Destination from './pages/Destination';
import DestBg from './assets/destination/background-destination-desktop.jpg';
import DestBgTablet from './assets/destination/background-destination-tablet.jpg';
import DestBgMobile from './assets/destination/background-destination-mobile.jpg';
import CrewBg from './assets/crew/background-crew-desktop.jpg';
import CrewBgTablet from './assets/crew/background-crew-tablet.jpg';
import CrewBgMobile from './assets/crew/background-crew-mobile.jpg';
import TechBg from './assets/technology/background-technology-desktop.jpg';
import TechBgTablet from './assets/technology/background-technology-tablet.jpg';
import TechBgMobile from './assets/technology/background-technology-mobile.jpg';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
  const [pageBg, setPageBg] = useState('Home');

  return (
    <div className="App relative min-h-screen w-full">
      <ContextPage.Provider value={{setPageBg, pageBg}}>
        <img src={pageBg === 'Home' ? HomeBg : pageBg === 'Destination' ? DestBg : pageBg === 'Crew' ? CrewBg : pageBg === 'Technology' ? TechBg : ''} alt='Desktop Page Background' className='w-full h-full absolute inset-0 -z-10 hidden lg:block'/>
        <img src={pageBg === 'Home' ? HomeBgTablet : pageBg === 'Destination' ? DestBgTablet : pageBg === 'Crew' ? CrewBgTablet : pageBg === 'Technology' ? TechBgTablet : HomeBgTablet} alt='Tablet Page Background' className='w-full h-full absolute inset-0 -z-10 hidden lg:hidden md:block'/>
        <img src={pageBg === 'Home' ? HomeBgMobile : pageBg === 'Destination' ? DestBgMobile : pageBg === 'Crew' ? CrewBgMobile : pageBg === 'Technology' ? TechBgMobile : HomeBgMobile} alt='Desktop Page Background' className='w-full h-full absolute inset-0 -z-10 block md:hidden'/>
        <Header />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/destination' exact Component={Destination} />
          <Route path='/crew' exact Component={Crew} />
          <Route path='/technology' exact Component={Technology} />
        </Routes>
      </ContextPage.Provider>
    </div>
  );
}

export default App;
