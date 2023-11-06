import React from 'react';
import Moon from '../assets/destination/image-moon.png';
import Mars from '../assets/destination/image-mars.png';
import Europa from '../assets/destination/image-europa.png';
import Titan from '../assets/destination/image-titan.png';


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
  return (
    <section className='w-full mt-10'>
        <h1 className='pl-[10rem] text-3xl flex items-center gap-4'><span className='font-bold text-white opacity-50'>01</span><span className='tracking-widest text-white'>PICK YOUR DESTINATION</span></h1>
        <section className='mt-5 flex items-center justify-between px-[10rem]'>
            <img src={data[0].image} alt="The Destination" />
            <section className='w-1/2'>
                <ul className='listOfDest flex items-center gap-10 text-new-purple'>
                    <li>
                        <p>MOON</p>
                        <div className="lineDest active-line"></div>
                    </li>
                    <li>
                        <p>MARS</p>
                        <div className="lineDest"></div>
                    </li>
                    <li>
                        <p>EUROPA</p>
                        <div className="lineDest"></div>
                    </li>
                    <li>
                        <p>TITAN</p>
                        <div className="lineDest"></div>
                    </li>
                </ul>
                <section className='mt-8'>
                    <section>
                        <h1 className='text-white font-serif text-8xl'>MOON</h1>
                        <p className='w-96 text-base mt-5 text-new-purple font-mono'>{data[0].text}</p>
                    </section>
                    <section className='mt-8 pt-8 border-t-2 w-96 border-line-color flex items-center gap-10'>
                        <section>
                            <p className='text-xl text-new-purple font-light tracking-widest'>AVG. DISTANCE</p>
                            <h2 className='text-3xl text-white font-serif mt-2'>{data[0].avgDist}</h2>
                        </section>
                        <section>
                            <p className='text-xl text-new-purple font-light tracking-widest'>EST. TRAVEL TIME</p>
                            <h2 className='text-3xl text-white font-serif mt-2'>{data[0].travelTime}</h2>
                        </section>
                    </section>
                </section>
            </section>
        </section>

    </section>
  )
}

export default Destination