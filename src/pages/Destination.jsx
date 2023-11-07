import React, { useEffect, useState, useContext, useRef } from 'react';
import Moon from '../assets/destination/image-moon.png';
import Mars from '../assets/destination/image-mars.png';
import Europa from '../assets/destination/image-europa.png';
import Titan from '../assets/destination/image-titan.png';
import { ContextPage } from '../Context/ContextPage';


const data = [
    {
        name: "MOON",
        image: Moon,
        text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avgDist: "384,400 KM",
        travelTime: "3 DAYS"
    },
    {
        name: "MARS",
        image: Mars,
        text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        avgDist: "225 MIL. KM",
        travelTime: "9 MONTHS"
    },
    {
        name: "EUROPA",
        image: Europa,
        text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        avgDist: "628 MIL. KM",
        travelTime: "3 YEARS"
    },
    {
        name: "TITAN",
        image: Titan,
        text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        avgDist: "1.6 BIL. KM",
        travelTime: "7 YEARS"
    }
]

function Destination() {
    const [destination, setDestination] = useState("Moon");
    const [currentData, setCurrentData] = useState(data[0]);
    const [currDestination, setCurrDestination] = useState(0)
    const {setPageBg} = useContext(ContextPage);
    const pageViewRef = useRef(null);

    const changeDestination = (e) => {
        if (e.key === 'ArrowRight'){
            setCurrDestination(prev => prev + 1);
        } else if (e.key === 'ArrowLeft'){
            setCurrDestination(prev => prev - 1);
        }

        if (currDestination === 0) {
            setDestination('Moon')
        } else if (currDestination === 1) {
            setDestination('Mars')
        } else if (currDestination === 2){
            setDestination('Europa')
        } else if (currDestination === 3){
            setDestination('Titan')
        } else if (currDestination > 3){
            setCurrDestination(0);
        } else if (currDestination < 0){
            setCurrDestination(3)
        }
    }

    useEffect(() => {
        switch (destination) {
            case "Moon":
                setCurrentData(data[0])
                break;
            case "Mars":
                setCurrentData(data[1])
                break;
            case "Europa":
                setCurrentData(data[2])
                break;
            case "Titan":
                setCurrentData(data[3])
                break;
            default: setCurrentData(data[0])
                break;
        }

        setPageBg('Destination')

        pageViewRef.current.focus();
    }, [destination, setPageBg, currDestination])

  return (
    <section className='w-full mt-10'>
        <h1 className='pl-2 md:pl-10 lg:pl-[10rem] text-2xl lg:text-3xl flex items-center gap-4'><span className='font-bold text-white opacity-50'>01</span><span className='tracking-widest text-white'>PICK YOUR DESTINATION</span></h1>
        <section className='mt-5 flex lg:flex-row flex-col items-center justify-between px-10 lg:px-[2rem] xl:px-[5rem] gap-2 xl:gap-4 outline-none' ref={pageViewRef} tabIndex={0} onKeyDown={changeDestination}>
            <img src={currentData.image} alt="The Destination" className='w-1/2 xl:w-auto' />
            <section className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-start my-8 lg:my-0'>
                <ul className='listOfDest flex items-center gap-10 text-new-purple'>
                    <li onClick={() => setDestination('Moon')}>
                        <p className={destination === 'Moon' ? 'text-white' : ''}>MOON</p>
                        <div className={`lineDest ${ destination === 'Moon' ? 'active-line' : ''}`}></div>
                    </li>
                    <li onClick={() => setDestination("Mars")}>
                        <p className={destination === 'Mars' ? 'text-white' : ''}>MARS</p>
                        <div className={`lineDest ${ destination === 'Mars' ? 'active-line' : ''}`}></div>
                    </li>
                    <li onClick={() => setDestination("Europa")}>
                        <p className={destination === 'Europa' ? 'text-white' : ''}>EUROPA</p>
                        <div className={`lineDest ${ destination === 'Europa' ? 'active-line' : ''}`}></div>
                    </li>
                    <li onClick={() => setDestination("Titan")}>
                        <p className={destination === 'Titan' ? 'text-white' : ''}>TITAN</p>
                        <div className={`lineDest ${ destination === 'Titan' ? 'active-line' : ''}`}></div>
                    </li>
                </ul>
                <section className='mt-8'>
                    <section>
                        <h1 className='text-white font-serif text-6xl text-center lg:text-left lg:text-8xl'>{currentData.name}</h1>
                        <p className='w-full sm:w-96 text-base mt-5 text-new-purple font-mono text-center lg:text-left'>{currentData.text}</p>
                    </section>
                    <section className='mt-8 pt-8 border-t-2 w-full lg:w-96 border-line-color flex flex-col md:flex-row justify-center lg:justify-start items-center gap-10'>
                        <section className='flex flex-col justify-center items-center'>
                            <p className='text-xl text-new-purple font-light tracking-widest'>AVG. DISTANCE</p>
                            <h2 className='text-2xl lg:text-3xl text-white font-serif mt-2'>{currentData.avgDist}</h2>
                        </section>
                        <section className='flex flex-col justify-center items-center'>
                            <p className='text-xl text-new-purple font-light tracking-widest'>EST. TRAVEL TIME</p>
                            <h2 className='text-2xl lg:text-3xl text-white font-serif mt-2'>{currentData.travelTime}</h2>
                        </section>
                    </section>
                </section>
            </section>
        </section>

    </section>
  )
}

export default Destination