import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {FaTimes} from "react-icons/fa"
import logo from "../images/logo.png"
import {IoIosArrowDown} from "react-icons/io"
import NavHover from './navHover'
import About from './about'
import MenuHover1 from './menuHover1'
import MenuHover2 from './menuHover2'

import Career from './career'
const Navbar = () => {
    let [nav, setNav] = useState(false)
    let [hover, setHover] = useState(false)
    let [about, setAbout] = useState(false)
    let [menu1, setMenu1] = useState(false)
    let [menu2, setMenu2] = useState(false)
    let html = document.querySelector("html")
    html.addEventListener("click", ()=> setMenu1(true) )
  return (
    <>
    <div className='bg-gray-'>
        <div className='lg:flex items-end justify-end'>
        <div className='hidden md:flex flex-wrap  text-xs text-gray-500 justify-end items-end gap-1 capitalize pr-12 pb-12'>
            <li >calculate premium</li>
            <li >customer portal</li>
           
        </div>
        <div className='hidden md:flex flex-wrap  text-xs text-gray-500 justify-end items-end gap-1 capitalize pr-12 pb-12'>

            <li >pay premium</li>
            <li >download form</li>
        </div>
        </div>
        <div className='flex items-center justify-around'>   
        <img className='w-20' src={logo} alt="" />
        <ul className='hidden md:flex text-sm '>
            <li>Home</li>
            
           <div className='flex justify-center items-center mb-4'>
           <li onMouseOver={()=> setHover(!hover)}
            className="hover:bg-green-200 hover:border-b-4 border-black md:items-start justify-start"
            >product & services </li>
            <span><IoIosArrowDown/></span>
           </div>
            <div className='transition ease-out duration-1000'>{hover && <NavHover/>}</div>
           
           <div className='flex justify-center items-center mb-4'>
           <li
           className='hover:bg-green-200 hover:border-b-4 border-black'
            onMouseOver={()=> setAbout(!about)}
            >About AAI </li> 
            <span><IoIosArrowDown/></span>
           </div>
             {about && <About/>}
            <li> <a href="<Career/>">career</a></li>
            <li>blog</li>
            <li>contact us</li>
           
        </ul>
        <button className='md:hidden' onClick={()=> setNav(!nav)}>
            {nav ? <FaTimes className='text-3xl' /> : <GiHamburgerMenu className='text-3xl'/> }
        </button>
        <div className="hidden md:flex items-end justify-end flex-col text-xs pt-40 text-gray-500 pr-12 lg:pt-2">
        <p className='pb-2'>54, Awolowo Road, Ikoyi, Lagos</p>
        <p className='pb-2'>+234 806 630 9476, +234 703 229 4082
+234 813 085 8310</p>
<p className='text-bold text-black'>customer@africanallianceplc.com</p>
       </div>
        </div>
        <ul className={!nav ? "hidden" : "sm:border-b  transition-all h-full" }>
        <li className='border-b'>Home</li>
            <li onClick={(e)=> {
                e.stopPropagation()
                setMenu1(!menu1)
            }} className='border-b'>product & services <IoIosArrowDown/>
            {menu1 && <MenuHover1/>}
            </li>
            <li onClick={(e)=> {
                e.stopPropagation()
                setMenu2(!menu2)
            }} className='border-b'>About AAI <IoIosArrowDown/>
            {menu2 && <MenuHover2/>}
            </li>
            <li className='border-b'>careers</li>
            <li className='border-b'>blog</li>
            <li className='border-b'>contact us</li>
        </ul>
        
    </div>
   
    </>
  )
}

export default Navbar

