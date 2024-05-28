import React from 'react'
import Header from './Header'
const Home = () => {
  return (
    <div className=''>
   
    <div className='flex flex-row'>
        <div className='w-[50%] px-[10%] pt-[60%] md:pt-[5%] flex flex-row'>
          <div>
            <a href="https://www.linkedin.com/in/thehsin-cj-644489140/" target="_blank"><img className="w-[20%]" src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-jaune.png"></img></a>
            <a href="https://github.com/Thehsin93" target="_blank"><img className="w-[20%] pt-[25%]" src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-jaune-300x300.png"></img></a>
          </div>
          <div>
            <h1 className='font-bold text-3xl'>Hi,I am</h1>
            <h1 className='font-bold text-3xl mt-[5%]'>Thehsin</h1>
            <h2 className='font-bold text-xl mt-[5%]'>Full Stack Developer</h2>
            <p className='pt-[1%]'>Experienced in architecting and developing modern web-based applications. Skilled in optimizing web application performance.</p>
       </div>
        </div>
        <div className='w-[50%] pt-[80%] md:pt-0'>
        <img src="https://cdn-icons-png.flaticon.com/512/2830/2830618.png" alt="sdimage" className='w-[80%] md:w-[60%] pl-[20%] pt-[10%]'></img>
        </div>
    </div>
    </div>
  )
};

export default Home