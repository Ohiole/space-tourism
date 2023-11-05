import React from 'react'

function Home() {
  return (
    <main className='flex flex-col justify-end w-full h-3/4'>
        <section className='flex w-full justify-evenly items-center'>
            <section className='basis-1/2'>
                <h3 className='text-new-purple text-2xl tracking-widest'>SO, YOU WANT TO TRAVEL TO</h3>
                <h1 className='text-9xl text-white mt-8 font-serif'>SPACE</h1>
                <p className='text-base text-new-purple mt-8 w-96 text-justify font-mono'>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </section>
            <section className='group'>
                <section className='h-96 w-96 rounded-full flex items-center justify-center bg-transparent group-hover:bg-header-bg transition-all ease-in-out duration-300'>
                    <button className='w-64 h-64 rounded-full bg-white font-serif flex items-center justify-center outline-none border-none text-3xl'>EXPLORE</button>
                </section>
            </section>
        </section>
    </main>
  )
}

export default Home