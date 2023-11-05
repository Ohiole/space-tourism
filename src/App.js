import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeBg from './assets/home/background-home-desktop.jpg';
import Home from './pages/Home';

function App() {
  return (
    <div className="App relative h-screen w-full">
      <img src={HomeBg} alt='Page Background' className='w-full h-screen absolute top-0 -z-10'/>
      <Header />
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
