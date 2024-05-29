import React from 'react'
import useScrollup from "../hooks/useScrollup"
const Skills = ({refsection}) => {
    const Handleclick= ()=>{
        useScrollup(refsection);
      }
  return (
    <div className='flex flex-col pt-[10%] md:pt-0 pl-[10%]'>
        
        <div className='w-[6/12] mx-auto pl-[5%] pr-[5%]'>
        <div className=''>
            <div className='flex flex-row justify-center'>
            <img className='w-[10%]' src="https://cdn-icons-png.flaticon.com/512/12105/12105236.png"></img>
            <h1 className='text-lg font-bold text-center py-[5%] pl-[2%]'>My Skillset</h1>
            </div>
            <div className='flex pt-[5%] md:p-0'>
           
            <li className='list-none p-[0.5%] w-[50%]'>
            <h1 className='font-bold text-sm '>Programming Languages</h1>
             <p className='text-sm '>ReactJS, C#, NodeJS, Javascript, Tailwind CSS, HTML, CSS, Java, Python</p>
                
            </li>
            <div>
                <span className='qualification__rounder'>

                </span>
                <span className='qualification__line'>

                </span>
            </div>
            <li className='list-none py-[0.5%] px-[2%] w-[50%] '>
            <h1 className='font-bold text-sm '>Frameworks & Libraries </h1>
             <p className='text-sm '>Asp.Net Core, Asp.Net MVC,Express, Redux, React Routing, WebPack, Parcel,Babel, Entity framework, SignalR, Context APIS, 
                React hooks, Mongoose</p>
            </li>
            </div>
            <div className='flex'>
            <li className='list-none p-[0.5%]  w-[50%]'>
                <h1 className='font-bold text-sm '>Database</h1>
             <p className='text-sm '>MSSQL, Redis, MongoDB</p>
            </li>
            <div>
                <span className='qualification__rounder'>

                </span>
                <span className='qualification__line'>

                </span>
            </div>
            <li className='list-none py-[0.5%] px-[2%] w-[50%]'>
                <h1 className='font-bold text-sm '>Testing</h1>
             <p className='text-sm '>Jest, SoapUi, Postman</p>
            </li>
            </div>
            <div className='flex'>
            <li className='list-none p-[0.5%] w-[50%]'>
                <h1 className='font-bold text-sm '>Tools</h1>
             <p className='text-sm '>Visual Studio, Visual Studio Code, Intellij, Pycharm</p>
            </li>
            <div>
                <span className='qualification__rounder'>

                </span>
                <span className='qualification__line'>

                </span>
            </div>
            <li className='list-none py-[0.5%] px-[2%] w-[50%]'>
                <h1 className='font-bold text-sm '>Version control </h1>
             <p className='text-sm '>Git, TFS, Azure devops </p>
            </li>
            </div>
            <div>
            <div className='pl-[48%] md:pl-[49.5%]'>
                <span className='qualification__rounder'>

                </span>
                
            </div>
            <li className='list-none -my-[2%]  px-[0.5%] w-[50%]'>
                <h1 className='font-bold text-sm'>Others</h1>
             <p className='text-sm '>xml, Json, WCF web services, Rest & Soap APis, JWT Tokens, OAuth,Single Signon</p>
            </li>
          
         
            </div>
            </div>
</div>
<div className='items-end w-[5%] cursor-pointer mb-[10%] md:mb-[0%] md:mt-[2%] ml-[90%]' onClick={Handleclick}>
      <img className="" src="https://cdn-icons-png.flaticon.com/128/11480/11480866.png"></img>
    </div>
        </div>
  )
}

export default Skills