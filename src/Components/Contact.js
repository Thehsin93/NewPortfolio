import React from 'react'
import useScrollup from '../hooks/useScrollup'
const   Contact  =({refsection})=>{
  
  const Handleclick= ()=>{
    useScrollup(refsection);
  }
  return (
    <div className='pt-[40%] md:pt-0'>
    <div>
      <h1 className='font-bold text-3xl text-center'>Contact Me</h1>
    </div>
    <div className='mx-auto w-6/12 flex flex-col'>
    <div className='flex flex-row mt-[20%] md:mt-[8%] items-center'>
        <img src="https://cdn-icons-png.flaticon.com/512/873/873360.png" className='w-[5%]'></img>
        <div className='flex flex-col pl-[5%]'>
        <span className='text-xl font-bold'>Email</span>
        <span className='text-gray-500'>thehsincj@gmail.com</span>
        </div>
      </div>
      <div className='flex flex-row mt-[5%] items-center'>
      <img src="https://cdn-icons-png.flaticon.com/128/727/727606.png" className='w-[5%]'></img>
      <div className='flex flex-col pl-[5%]'>
        <span className='text-xl font-bold'>Location</span>
        <span className='text-gray-500'>Dubai, UAE</span>
        </div>
      </div>
      <div className='flex flex-row mt-[5%] items-center'>
      <img className='w-[5%]' src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-jaune.png"></img>
      <div className='flex flex-col pl-[5%]'>
      <span className='text-xl font-bold'>LinkedIn</span>
      <a className='text-gray-500' target="_blank" href="https://www.linkedin.com/in/thehsin-cj-644489140">www.linkedin.com/in/thehsin-cj-644489140</a>
      </div>
      </div>
      
    </div>
    <div className='items-end w-[5%] cursor-pointer mt-[60%] md:mt-[2%] ml-[90%]' onClick={Handleclick}>
      <img className="" src="https://cdn-icons-png.flaticon.com/128/11480/11480866.png"></img>
    </div>
    <div className='hidden md:flex bg-yellow-500 p-[2%] mt-[15%] md:mt-[2.35%]'>

      </div>
    </div>
  )
}

export default Contact