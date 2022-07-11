import React from 'react'
import admin1 from "../images/admin1.jpg"
import admin2 from "../images/admin2.jpg"

function Blog() {
  return (
    <div className='bg-blue-100 md:flex justify-center items-center'>
      
        <div className="">
           <div className='p-20 border-r-2 border-red'>
           <div className='flex '>
            <h1 className="text-red-400 text-2xl">latest news</h1>
                <div className=''><img className='w-40 max-h-full' src={admin2} alt="" /></div>
                
                <div className="ml-12">
                    <h1 className='text-blue-400 uppercase'>latest release
                    failure to file african alliance insurance plc's audited financial statements for the year ended 31st december 2021, q1 2022 unaudited financial statements.</h1>
                    <p>july 8, 2022</p>
                    <p>no comments</p>
                   
                </div>
                
            </div>
           <div className='flex'>
           <div className='w-20 h-16  mt-8'><img src={admin1} alt="" /></div>
                <div className='ml-12  mt-6 md:mt-8'>
                    <h1 className='text-blue-400 uppercase'>african alliance at the 48th aio conference in nairobi.</h1>
                    <p>july 8, 2022</p>
                    <p>no comments</p>
                   
                </div>
           </div>
                <div className='flex ml-  mt-6 '>
                <div className='w-20 h-16 border-black border mr-6'></div>
                <div>
                    <h1 className='text-blue-400 uppercase'>un polac honours ojemudia.</h1>
                    <p>may 12, 2022</p>
                    <p>no comments</p>
                   
                </div>
                </div>
           <div>
            </div>
                <h1 className='text-red-600 text-3xl text-center capitalize m-12'>recent blog posts </h1>

                <div className="second">
                    <div className='flex '>
                <div className='w-44 h-16  mr-6'><img className='h-16 w-40' src={admin2} alt="" /></div>
                <div className='ml-12  mt-6'>
                    <h1 className='text-blue-400 uppercase'>latest release
                    failure to file african alliance insurance plc's audited financial statements for the year ended 31st december 2021, q1 2022 unaudited financial statements.</h1>
                    <p>july 8, 2022</p>
                    <p>no comments</p>
                   
                </div>
                
            </div>
           <div className='flex'>
           <div className='w-20 h-16  mr-6'><img src={admin1} alt="" /></div>
                <div>
                    <h1 className='text-blue-400 uppercase'>african alliance at the 48th aio conference in nairobi.</h1>
                    <p>july 8, 2022</p>
                    <p>no comments</p>
                   
                </div>
           </div>
                <div className='flex'>
                <div className='w-20 h-16 border-black border mr-6'></div>
                <div>
                    <h1 className='text-blue-400 uppercase'>un polac honours ojemudia.</h1>
                    <p>may 12, 2022</p>
                    <p>no comments</p>
                   
                </div>
                </div>
                </div>
           </div>
        </div> 
    </div>
  )
}

export default Blog