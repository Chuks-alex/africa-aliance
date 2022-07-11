import React from 'react'

function New() {
  return (
    <div className='text-center md:flex justify-center items-center lg:bg-teal-200'>
        <div className='pt-12 pb-12 bg-indigo-300 text-white'>
        <h1 className='text-2xl capitalize p-2'>new to insurance?</h1>
        <p className='pb-14 capitalize'>find out the right products for you</p>
        <button className='bg-blue-600 p-3 capitalize rounded'>start reading</button>
        </div>
        <div className='pt-12 pb-12 bg-indigo-500 text-white'>
        <h1  className='text-2xl capitalize p-2'>how much insurance do you need?</h1>
        <p className='pb-14 capitalize'>find out now</p>
        <button className='bg-blue-700 p-3 capitalize rounded' >calculate premium</button>
        </div>
        <div className='pt-12 pb-12 bg-indigo-700 text-white'>
        <h1 className='text-2xl capitalize p-2'>have a question?</h1>
        <p className='pb-14 capitalize'>we are only a click away</p>
        <button  className='bg-blue-600 p-3 capitalize rounded'>send email</button>
        </div>
    </div>
  )
}

export default New