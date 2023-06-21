import React from 'react'
import avatar from "../assets/logo.png";

function Landing({name}) {
  return (
    <div className='w-full h-full flex flex-col place-items-center rounded-3xl space-y-20 p-16 bg-white'>
         <img src={avatar} alt="avatar" className="rounded-full w-12 h-12"></img>
        <h2>
            <p className='font-sans italic text-2xl mb-3'>Welcome to Demo, <span className='font-bold'>{name}</span>.</p>
            <p className='font-sans text-xl mt-8'>This is a demonstration  
            <span className='font-bold text-sky-900'>Platform.</span></p>
        </h2>
    </div>
  )
}

export default Landing