import React, { useState, useEffect, useContext } from 'react';
import Launch from '../assets/technology/image-launch-vehicle-landscape.jpg';
import LaunchPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import Spaceport from '../assets/technology/image-spaceport-landscape.jpg';
import SpaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import Spacecapsule from '../assets/technology/image-space-capsule-landscape.jpg';
import SpacecapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';
import { ContextPage } from '../Context/ContextPage';

const techData = [
  {
    heading: 'LAUNCH VEHICLE',
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    landscapeImg: Launch,
    portraitImg: LaunchPortrait
  },
  {
    heading: 'SPACEPORT',
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    landscapeImg: Spaceport,
    portraitImg: SpaceportPortrait
  },
  {
    heading: 'SPACE CAPSULE',
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    landscapeImg: Spacecapsule,
    portraitImg: SpacecapsulePortrait
  }
]


function Technology() {
  const [tech, setTech] = useState(techData[0]);
  const { setPageBg } = useContext(ContextPage);
  const [screen, setScreen] = useState(1)

  useEffect(() => {
    setPageBg('Technology')

    if (tech === techData[0]) {
      setScreen(1)
    } else if (tech === techData[1]){
      setScreen(2)
    } else if (tech === techData[2]) {
      setScreen(3)
    }
  }, [setPageBg, setScreen, tech])
  
  return (
    <section className='w-full'>
      <h1 className='pl-2 md:pl-10 lg:pl-[3rem] xl:pl-[10rem] text-2xl lg:text-3xl flex items-center gap-4 animated-class opacity-0'><span className='font-bold text-white opacity-50'>03</span><span className='tracking-widest text-white'>SPACE LAUNCH 101</span></h1>
      <section className='w-full flex flex-col-reverse lg:flex-row mt-5 items-center gap-4 justify-between pl-0 lg:pl-[3rem] xl:pl-[5rem] 2xl:pl-[10rem] animated-class opacity-0'>
        <section className='w-full lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-start gap-8 xl:gap-12 justify-center lg:justify-between'>
          <section className='tech-number flex lg:flex-col lg:mt-0 mt-4'>
            <p onClick={() => setTech(techData[0])} className={screen === 1 ? 'active' : ''}>1</p>
            <p onClick={() => setTech(techData[1])} className={screen === 2 ? 'active' : ''}>2</p>
            <p onClick={() => setTech(techData[2])} className={screen === 3 ? 'active' : ''}>3</p>
          </section>
          <section className='mb-10 lg:mb-0 w-full lg:w-auto lg:px-0 px-4'>
            <p className='text-new-purple text-base tracking-widest lg:text-left text-center'>THE TERMINOLOGY...</p>
            <h1 className='mt-3 text-3xl 2xl:text-5xl font-serif text-white lg:text-left text-center'>{tech.heading}</h1>
            <p className='font-mono text-new-purple mt-5 w-full 2xl:w-2/3 lg:text-left text-center'>{tech.text}</p>
          </section>
        </section>
        <img src={tech.portraitImg} alt="Technology" className='hidden lg:block xl:w-auto w-1/2 animated-down opacity-0' />
        <img src={tech.landscapeImg} alt="Technology" className='lg:hidden w-full animated-down opacity-0' />
      </section>
    </section>
  )
}

export default Technology