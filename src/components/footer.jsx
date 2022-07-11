import React from 'react'
import logo from "../images/logo.png"
function Footer() {
  return (
    <>
    <div className='bg-indigo-800 md:flex justify-center item-center p-8 lg:p-14'>
    <div className='text-center  mr-8'>
        <img className='inline-block w-16 rounded' src={logo} alt="" />
        <p className='p-6 text-indigo-200 capitalize'>our core competencies are a creative combination of protection (term assurance and group life ), savings and investment products and over the years, african alliance has established a solid reputation for excellent customer service and prompt claims settlement.</p>
        <h2 className='text-2xl text-indigo-100 capitalize'>we are african alliance plc</h2>
    </div>
    <div className='text-center  p-8 capitalize text-indigo-200'>
       
       <h4 className='text-white font-bold'>quick links</h4 >
       <p>news</p>
       <p>customer compliants</p>
       <p>popcy</p>
       <p>branch locator</p>
       <p>our values</p>
       <p>claims</p>
       <p>compliants</p>
       <p>security trading</p>
       <p>popcy</p>
       <p>privacy policy</p>
       <p>whitsle blower</p>
       <p>BCP policy</p>
       
    </div>
    <div className='capitalize text-white flex flex-col'>
        <h4 className='font-bold mb-4'>subscribe today</h4>
        <p>sign up to receive african alliance plc newsletter today and never miss the latest industry news, AAI offers and more</p>
        <form >
            <label htmlFor="email">Email Address</label> 
            <br />
            <input className='rounded' type="text" id='email' />
            <br />
            <button className='bg-blue-600 p-3 mt-2 rounded-md' type='submit'> subscribe</button>
        </form>
        {/* i will add the i cons shortly as i am out of network to access react-icons */}
    </div>
    </div>
    
    </>
  )
}

export default Footer