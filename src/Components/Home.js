import React from 'react'
import Header from './Header'
import useTheme from '../hooks/useTheme';
const Home = () => {
  const [theme,toggleTheme] = useTheme();
  return (
    <div className=''>
   
    <div className='flex flex-col md:flex-row'>
        <div className='w-[100%] md:w-[60%] pl-[10%] pr-[8%] pt-[10%] md:pt-[3.5%] flex flex-row'>
          <div className='pt-[35%] md:pt-[20%]'>
            <a href="https://www.linkedin.com/in/thehsin-cj-644489140/" target="_blank"><img className="w-[20%]" src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-jaune.png"></img></a>
            <a href="https://github.com/Thehsin93" target="_blank"><img className="w-[20%] pt-[25%]" src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-jaune-300x300.png"></img></a>
          </div>
          <div>
            <h1 className='font-bold text-3xl'>Hi,I am</h1>
            <h1 className='font-bold text-3xl mt-[5%]'>Thehsin</h1>
            <h2 className='font-bold text-2xl mt-[5%]'>Full Stack Developer</h2>
            <p className='pt-[1%] text-2xl'>Experienced in architecting and developing modern web-based applications. Skilled in optimizing web application performance.</p>
       </div>
        </div>
        <div className='w-[100%] md:w-[50%] pt-[5%] md:pt-0 pl-[10%] md:pl-0'>
        <img src="https://cdn-icons-png.flaticon.com/512/2830/2830618.png" alt="sdimage" className='w-[80%] md:w-[60%] pl-[10%] pt-[10%]'></img>
        </div>
       
    </div>
    </div>
  )
};

export default Home