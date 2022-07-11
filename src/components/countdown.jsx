import React from 'react'
import {TbCurrencyNaira} from "react-icons/tb"
function Countdown() {
  return (
    <div className='flex flex-col text-center p-24 md:flex-row gap-6 justify-center item-center'>
        <div>
        <h6 className='font-bold'>trusted by</h6>
        <h1 className='text-7xl font-thin p-4'>50000+</h1>
        <p>customers</p>
        </div>
        <div>
        <h6 className='font-semibold pt-2 pb-4'>over</h6>
        <h2 className='text-7xl font-thin p-4'>60</h2>
        <p className='capitalize p-2'>years wealth of experience</p>
        </div>
       <div>
       <h4 className='font-bold'>paid over</h4>
        <h2 className='text-7xl font-thin p-4'>9bn</h2>
        <p className='capitalize'>in claims settled in 2019</p>
       </div>
    </div>
  )
}

export default Countdown