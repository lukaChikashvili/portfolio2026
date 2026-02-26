import React from 'react'

const HomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(to right, #000 0px, #000 1px, transparent 1px, transparent 200px)' }}>
      </div>
    <div className="flex flex-col items-center text-center gap-4 -mt-36">
      <h1 className="title">
        Luka Chikashvili
      </h1>

      <h2 className='text-5xl slogan '>
        Developer as an <span className='underline underline-offset-6 '>Innie</span>, Polyglot as an <span>Outie</span>
      </h2>
    </div>
  </div>
  )
}

export default HomePage
