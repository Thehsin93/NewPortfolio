import React,{useRef} from 'react'
import Sections from './Sections';
import useTheme from '../hooks/useTheme';
const Header = () => {
  const [theme,toggleTheme] = useTheme();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

const scrollToSection = (sectionRef)=>{
  const element = sectionRef.current;
  if(element){
    const startposition = window.scrollY;
    const tragetPosition = element.getBoundingClientRect().top+window.scrollY;
    const distance = tragetPosition-startposition;
    const duration = 1000;
    let start = null;
    const step = (timestamp)=>{
      if(!start) start = timestamp;
      const progress = timestamp-start;
      const percent = Math.min(progress/duration,1);
      window.scrollTo(0,startposition+distance*percent);
      if(progress<duration){
        window.requestAnimationFrame(step);
      }

    };
    window.requestAnimationFrame(step);
  }
  
}

  return (
    <div className='flex flex-col'>
    <div className='flex flex-col md:flex-row py-[1%] fixed w-screen'>
        <div className='w-[100%] md:w-[60%]'>
        <span className='pl-[40%] md:pl-[10%] text-xl font-bold'>
            Thehsin
        </span>
        </div>
       <div className='w-[40%]  flex flex-col md:flex-row justify-between cursor-pointer pl-[2%] md:pl-0'>
        <span className="hover:text-yellow-500 w-[100%] md:w-[10%]" onClick={()=>scrollToSection(section1Ref)}>Home</span>
        <span className="hover:text-yellow-500 w-[100%] md:w-[10%]" onClick={()=>scrollToSection(section2Ref)}>About</span>
        <span className="hover:text-yellow-500 w-[100%] md:w-[10%]" onClick={()=>scrollToSection(section3Ref)}>Skills</span>
        <span className="hover:text-yellow-500 w-[100%] md:w-[10%]" onClick={()=>scrollToSection(section4Ref)}>Projects</span>
        <span className="hover:text-yellow-500 w-[100%] md:w-[10%]" onClick={()=>scrollToSection(section5Ref)}>Career</span>
        <span className="hover:text-yellow-500 w-[100%] md:w-[10%]" onClick={()=>scrollToSection(section6Ref)}>Contact</span>
        <span  onClick={toggleTheme} className='w-[100%] md:w-[10%]'>{theme=='dark'?<img className="w-[25%] md:w-[45%]" src="https://cdn-icons-png.flaticon.com/512/12181/12181279.png"></img>:<img className='w-[25%] md:w-[55%]' src="	https://cdn-icons-png.flaticon.com/512/391/391097.png"></img>}</span>
       </div>

    </div>
    <Sections ref={{section1Ref,section2Ref,section3Ref,section4Ref,section5Ref,section6Ref}} className="w-screen"></Sections>
    </div>
  )
};

export default Header