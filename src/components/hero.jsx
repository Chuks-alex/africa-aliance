import React, { useEffect, useState } from 'react'
import hero1 from "../images/hero1.png"
import hero2 from "../images/hero2.jpg"
import hero3 from "../images/hero3.jpg"
import hero4 from "../images/hero4.jpg"
import hero5 from "../images/hero5.jpg"
import hero6 from "../images/hero6.jpg"
import hero7 from "../images/hero7.jpg"
import wedding from "../images/wedding.jpg"

let img = [hero1, hero2, hero3, hero4 ,hero5, hero6, hero7, wedding]

function Hero() {
  let [currentIndex, setCurrentIndex] = useState(0)
  useEffect(()=>{
    let timeInterval = setInterval(()=>{
      if(currentIndex === img.length - 1){
        setCurrentIndex(0)
      }
      else{
        setCurrentIndex(currentIndex + 1)
      }

    },3000)

    return ()=> clearInterval(timeInterval)
  }, [currentIndex])
  return(
    <div>
<div className='flex flex-col p-4 capitalize gap-4 bg-blue-400'>
  <h2 className='text-center p-4 w-full bg-blue-900 text-blue-100'>a protected FUTURE for everyone, with the most experienced life insurance company in Nigeria</h2>
  <h1 className='text-lg text-white font-semibold'>i am _____________years old, and i want to</h1>

  <select name="category" id="category" className='capitalize bg-blue-400 text-white font-semibold'>
    <option >what would you like to get</option>
    <option value="category">invest against my children's education and family needs</option>
    <option value="category">provide for my spouse and children long afteri am gone</option>
    <option value="category">secure my children's future education</option>
    <option value="category">grow my investments while insuring life </option>
    <option value="category">provide for my siblings and family in the future</option>
    <option value="category">save for my children's future</option>
    <option value="category">retire to a life of comfort</option>
    <option value="category">complete my house loan with ease</option>
  </select>
  <button className='p-2 text-white font-semibold  bg-blue-300 capitalize' type='submit'>get started</button>
</div>

<div className=''>
 <img src={img[currentIndex]} alt="" />
</div>
    </div>
  )
}

export default Hero

