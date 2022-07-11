import React from 'react'

function Premium() {
  return (
    <div className='p-12 text-center md:flex gap-8 capitalize'>
        <p className='text-3xl m-'>paying your <span className='font-semibold'>premium</span> has never been this easy!</p>
        <button className='bg-red-700 p-2 text-white font-semibold rounded'>pay premium now</button>
    </div>
  )
}

export default Premium