import React, { useEffect, useRef, useState } from 'react';
import Douglas from '../assets/crew/image-douglas-hurley.png';
import Mark from '../assets/crew/image-mark-shuttleworth.png';
import Victor from '../assets/crew/image-victor-glover.png';
import Ansari from '../assets/crew/image-anousheh-ansari.png';

const crewMembers = [
    {
        title: 'COMMANDER',
        name: 'DOUGLAS HURLEY',
        info: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        img: Douglas
    },
    {
        title: 'MISSION SPECIALIST',
        name: 'MARK SHUTTLEWORTH',
        info: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        img: Mark
    },
    {
        title: 'PILOT',
        name: 'VICTOR GLOVER',
        info: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        img: Victor
    },
    {
        title: 'FLIGHT ENGINEER',
        name: 'ANOUSHEH ANSARI',
        info: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        img: Ansari
    }
]

function Crew() {
    const [currMember, setCurrMember] = useState(crewMembers[0]);
    const [currSlide, setCurrSlide] = useState(0);
    const slideRef = useRef(null);

    useEffect(() => {
        if (currSlide === 0) {
            setCurrMember(crewMembers[0])
        } else if (currSlide === 1){
            setCurrMember(crewMembers[1])
        } else if (currSlide === 2){
            setCurrMember(crewMembers[2])
        } else if (currSlide === 3){
            setCurrMember(crewMembers[3])
        } else if(currSlide > 3){
            setCurrSlide(0)
        } else if(currSlide < 0){
            setCurrSlide(3)
        }
        slideRef.current.focus()
    }, [currSlide])

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            setCurrSlide(prev => prev + 1)
        } else if (e.key === 'ArrowLeft'){
            setCurrSlide(prev => prev - 1)
        }
    }

  return (
    <section>
        <h1 className='pl-2 md:pl-10 lg:pl-[10rem] text-2xl lg:text-3xl flex items-center gap-4'><span className='font-bold text-white opacity-50'>02</span><span className='tracking-widest text-white'>MEET YOUR CREW</span></h1>
        <section className='w-full px-[10rem] flex items-center justify-between gap-4 outline-none' onKeyDown={handleKeyDown} tabIndex={0} ref={slideRef}>
            <section className='w-1/2'>
                <section>
                    <h2 className='font-serif text-crew-title text-3xl'>{currMember.title}</h2>
                    <h1 className='mt-5 font-serif text-white text-5xl'>{currMember.name}</h1>
                    <p className='mt-10 text-left text-base font-mono text-new-purple w-96'>{currMember.info}</p>
                </section>
                <ul className='crewList flex w-full items-center mt-20 gap-4'>
                    <li className={currMember === crewMembers[0] ? 'active-list' : ''} onClick={() => setCurrMember(crewMembers[0])}></li>
                    <li className={currMember === crewMembers[1] ? 'active-list' : ''} onClick={() => setCurrMember(crewMembers[1])}></li>
                    <li className={currMember === crewMembers[2] ? 'active-list' : ''} onClick={() => setCurrMember(crewMembers[2])}></li>
                    <li className={currMember === crewMembers[3] ? 'active-list' : ''} onClick={() => setCurrMember(crewMembers[3])}></li>
                </ul>
            </section>
            <img src={currMember.img} alt="Crew Member AVI" className='h-[38rem]'/>
        </section>
    </section>
  )
}

export default Crew