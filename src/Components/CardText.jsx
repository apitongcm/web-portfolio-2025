import React from 'react'

function CardText() {
  return (
   <>

    <div className='mb-6 px-4 sm:px-8 md:px-16 text-center sm:text-left'>
        <h2 className="text-3xl sm:text-3xl md:text-4xl mt-8 sm:mt-12 font-bold text-gray-800 mb-4 leading-tight max-[1021px]:text-gray-300">Hi I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500'>Carl</span></h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xl mx-auto sm:mx-0 max-[1021px]:text-gray-300 ">I am a QA-focused engineer with experience
               validating safety-critical automotive systems and modern web applications. 
               I specialize in ensuring software reliability through structured testing, automation, and system-level analysis.
            </p>
    </div>

   </>
  )
}

export default CardText