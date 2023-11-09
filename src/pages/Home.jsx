import React from 'react'

function Home() {
  return (
    <main className='flex flex-col w-full mt-10 lg:mt-0 lg:absolute lg:bottom-10'>
        <section className='flex flex-col h-full lg:h-auto lg:flex-row w-full lg:justify-evenly items-center'>
            <section className='basis-1/2 flex flex-col lg:items-start items-center animated-class opacity-0'>
                <h3 className='text-new-purple text-xl md:text-2xl tracking-widest'>SO, YOU WANT TO TRAVEL TO</h3>
                <h1 className='text-7xl md:text-9xl text-white mt-8 font-serif'>SPACE</h1>
                <p className='text-base text-new-purple mt-8 w-full px-4 md:px-0 md:w-96 text-center lg:text-justify font-mono'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p> 
            </section>
            <section className='group mt-4 lg:mt-0 animated-down opacity-0'>
                <section className='h-64 w-64 lg:h-96 lg:w-96 rounded-full flex items-center justify-center bg-transparent group-hover:bg-header-bg transition-all ease-in-out duration-300'>
                    <button className='h-48 w-48 lg:w-64 lg:h-64 rounded-full bg-white font-serif flex items-center justify-center outline-none border-none text-3xl'>EXPLORE</button>
                </section>
            </section>
        </section>
    </main>
  )
}

export default Home