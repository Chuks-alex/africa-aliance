import React from 'react'
import hero2 from "../images/hero2.jpg"
import hero3 from "../images/hero3.jpg"
import hero4 from "../images/hero4.jpg"
import hero5 from "../images/hero5.jpg"
import hero6 from "../images/hero6.jpg"
import hero7 from "../images/hero7.jpg"

function Products() {
  let backgroundimageStyles = {
    backgroundImage: `url("${hero2}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  let aliance = {
    backgroundImage: `url("${hero3}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  let background2 = {
    backgroundImage: `url('${hero4}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  let background3 = {
    backgroundImage: `url('${hero5}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  let background4 = {
    backgroundImage: `url('${hero6}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  let background5 = {
    backgroundImage: `url('${hero7}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  return (
    <div className="bg-teal-100" >
        <h1 className='text-4xl text-teal-600 rounded-3xl mb-12 text-center'>Our Products & Services</h1>
      <div className="md:flex flex-row flex-wrap">
      <div className='ml-4 mr-4 ' style={backgroundimageStyles} >
        <div className='p-12 bg-gradient-to-r from-black text-center'>
        <h2  className='text-3xl text-white pb-2'>Investment Plus</h2>
        <p className='text-white text-lg'>Earn interest on savings towards
a business or a special project</p>
        </div>
        </div>
        <div className='ml-4 mr-4' style={aliance}>
            <div  className='p-12 bg-gradient-to-r from-black text-center'>
            <h2 className='text-3xl text-white pb-2'>Children Education</h2>
            <p className='text-lg text-white'>Invest to fund your children’s
future education tuition and lifestyle</p>
            </div>
        </div>
        <div className='ml-4 mr-4' style={background2}>
            <div  className='p-12 bg-gradient-to-r from-black text-center'>
            <h1 className='text-3xl text-white pb-2'>Mortgage Protection</h1>
            <p className='text-white text-lg'>Protect your family from creditors
when taking a mortgage</p>
            </div>
        </div>
        <div className='ml-4 mr-4' style={background3}>
       <div  className='p-12 bg-gradient-to-r from-black text-center'>
       <h2 className='text-3xl text-white pb-2'>Money Appreciation</h2>
        <p className='text-white text-lg'>Grow your investments while
insuring your life at the same time</p>
       </div>
        </div>

<div className='ml-4 mr-4' style={background4}>
    <div className='p-16 bg-gradient-to-r from-black text-center'>
    <h2 className='text-white text-3xl pb-2'>Takaful</h2>
    <p className='text-white text-lg'>Scriptural perspective on protection and risk</p>
    </div>
</div>
<div className='ml-4 mr-4' style={background5}>
    <div  className='p-20 bg-gradient-to-r from-black text-center'>
    <h2 className='text-3xl text-white pb-2'>
Smart Kid Plan</h2>
<p className='text-white text-lg'>Secure your children’s education</p>
    </div>
</div>
      </div>
    </div>
  )
}

export default Products