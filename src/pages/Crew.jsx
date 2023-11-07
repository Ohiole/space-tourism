import React, { useEffect, useRef, useState, useContext } from 'react';
import Douglas from '../assets/crew/image-douglas-hurley.png';
import Mark from '../assets/crew/image-mark-shuttleworth.png';
import Victor from '../assets/crew/image-victor-glover.png';
import Ansari from '../assets/crew/image-anousheh-ansari.png';
import { ContextPage } from '../Context/ContextPage';

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
    const {setPageBg} = useContext(ContextPage)
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
        slideRef.current.focus();

        setPageBg('Crew')
    }, [currSlide, setPageBg])

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            setCurrSlide(prev => prev + 1)
        } else if (e.key === 'ArrowLeft'){
            setCurrSlide(prev => prev - 1)
        }
    }

  return (
    <section>
        <h1 className='pl-2 md:pl-10 lg:pl-[3rem] xl:pl-[10rem] text-2xl lg:text-3xl flex items-center gap-4'><span className='font-bold text-white opacity-50'>02</span><span className='tracking-widest text-white'>MEET YOUR CREW</span></h1>
        <section className='w-full px-[3rem] 2xl:px-[10rem] flex lg:flex-row md:flex-col flex-col-reverse lg:mt-0 mt-10 items-center justify-between gap-8 xl:gap-4 outline-none' onKeyDown={handleKeyDown} tabIndex={0} ref={slideRef}>
            <section className=' w-full lg:w-1/2 flex flex-col justify-center lg:justify-start items-center lg:items-start'>
                <section>
                    <h2 className='font-serif text-crew-title text-xl md:text-2xl lg:text-left text-center xl:text-3xl'>{currMember.title}</h2>
                    <h1 className='mt-5 w-full font-serif text-white text-2xl md:text-3xl lg:text-left text-center xl:text-5xl'>{currMember.name}</h1>
                    <p className='mt-5 lg:mt-10 lg:text-left text-center text-base font-mono text-new-purple lg:w-96 w-full'>{currMember.info}</p>
                </section>
                <ul className='crewList flex lg:w-full items-center mt-8 lg:mt-20 gap-4'>
                    <li className={currMember === crewMembers[0] ? 'active-list' : ''} onClick={() => setCurrMember(crewMembers[0])}></li>
                    <li className={currMember === crewMembers[1] ? 'active-list' : ''} onClick={() => setCurrMember(crewMembers[1])}></li>
                    <li className={currMember === crewMembers[2] ? 'active-list' : ''} onClick={() => setCurrMember(crewMembers[2])}></li>
                    <li className={currMember === crewMembers[3] ? 'active-list' : ''} onClick={() => setCurrMember(crewMembers[3])}></li>
                </ul>
            </section>
            <img src={currMember.img} alt="Crew Member AVI" className='w-full md:h-auto md:w-1/2 xl:h-[38rem] xl:w-auto border-b-2 md:border-b-0 border-header-bg md:px-0 px-10'/>
        </section>
    </section>
  )
}

export default Crew