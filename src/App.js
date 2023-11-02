import './App.css';
import Header from './components/Header';
import HomeBg from './assets/home/background-home-desktop.jpg';

function App() {
  return (
    <div className="App relative">
      <img src={HomeBg} alt='Page Background' className='w-full absolute inset-0 -z-10'/>
      <Header />
    </div>
  );
}

export default App;
