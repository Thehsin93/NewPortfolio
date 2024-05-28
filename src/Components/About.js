import React from 'react'
import useScrollup from "../hooks/useScrollup"

const About = ({refsection}) => {
    const Handleclick= ()=>{
        useScrollup(refsection);
      }
  return (
    <div className='flex flex-col pt-[50%] md:pt-[5%] pl-[15%]'>
        <h1 className='text-3xl font-bold'>About Me</h1>
        <div className='flex flex-row pt-[2%]'>
            <div className='w-[80%] md:w-[60%]'>
            <img src="https://media.licdn.com/dms/image/C5103AQFyb24HujOxhw/profile-displayphoto-shrink_100_100/0/1518849093924?e=1722470400&v=beta&t=CCTYXiuUs8uG0xDmpMzXRv8gvjxgsC7j6OLE_rBU2e0" alt="image" className='w-[100%]'></img>
            </div>
            <div className='flex flex-col'>
            <p className='pl-[8%] w-[70%]'>Well-qualified Full Stack Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of process with ease. Collaborative team player with excellent technical abilities offering 6 years of related experience. Btech Graduate in Computer Science And Engineering</p>
            <div className='flex flex-row justify-between w-[70%] pt-[5%]'>
            <div className='pl-[8%] '>
                <h1 className='font-bold text-center text-xl'>5+</h1>
                <p>Years experience</p>
            </div>
            <div>
                <h1 className='font-bold text-center text-xl'>10+</h1>
                <p>Completed projects</p>
            </div>
            <div>
                <h1 className='font-bold text-center text-xl'>4+</h1>
                <p>Companies worked</p>
            </div>
            </div>
        </div>       
        </div>
        
        <div className='items-end w-[5%] cursor-pointer mt-[2%] ml-[90%]' onClick={Handleclick}>
      <img className="" src="https://cdn-icons-png.flaticon.com/128/11480/11480866.png"></img>
    </div>
    </div>
  )
}

export default About