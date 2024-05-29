import React,{useRef,useState} from 'react'
import Sections from './Sections';
import useTheme from '../hooks/useTheme';
const Header = () => {
  const [expand,setExpand] = useState(false);
  const [theme,toggleTheme] = useTheme();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const toggleExpand=()=>{
    setExpand(!expand)
  }

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
       {expand && ( <div className='flex flex-col fixed mt-[185%] p-[1%]  bg-gray-100 z-40'>
        <div className='flex flex-row justify-center pt-[1%] pl-[10%]'>
          <div className='flex flex-col'>
            <img className='w-[15%]' src="https://cdn-icons-png.flaticon.com/512/9314/9314393.png"></img>
        <span className="hover:text-yellow-500 md:w-[10%]" onClick={()=>scrollToSection(section1Ref)}>Home</span>
        </div>
        <div className='flex flex-col'>
        <img  className='w-[15%]' src="https://cdn-icons-png.flaticon.com/512/6324/6324434.png"></img>
        <span className="hover:text-yellow-500  md:w-[10%]" onClick={()=>scrollToSection(section2Ref)}>About</span>
        </div>
        <div className='flex flex-col'>
        <img className='w-[15%]' src="https://cdn-icons-png.flaticon.com/512/6543/6543950.png"></img>
        <span className="hover:text-yellow-500  md:w-[10%]" onClick={()=>scrollToSection(section3Ref)}>Skills</span>
        </div>
        </div>
        <div className='flex flex-row justify-between pt-[1%] pl-[10%]'>
          <div className='flex flex-col'>
          <img className='w-[15%]' src="https://cdn-icons-png.flaticon.com/512/11225/11225348.png"></img>
        <span className="hover:text-yellow-500  md:w-[10%]" onClick={()=>scrollToSection(section4Ref)}>Projects</span>
        </div>
        <div className='flex flex-col'>
        <img className='w-[15%]'  src="https://cdn-icons-png.flaticon.com/512/1063/1063376.png"></img>
        <span className="hover:text-yellow-500  md:w-[10%]" onClick={()=>scrollToSection(section5Ref)}>Career</span>
        </div>
        <div className='flex flex-col'>
        <img className='w-[15%]'  src="https://cdn-icons-png.flaticon.com/512/4161/4161137.png"></img>
        <span className="hover:text-yellow-500  md:w-[10%]" onClick={()=>scrollToSection(section6Ref)}>Contact</span>
        </div>
        </div>
        <div className='flex flex-row justify-items-end'>
          
          <img className='w-[5%] ml-[90%]' src="https://cdn-icons-png.flaticon.com/512/9061/9061501.png" onClick={toggleExpand}></img>
          </div>
        </div>

      
      )}
       
       <div className='flex flex-row md:hidden p-5  shadow-lg justify-between fixed mb-[5%] mt-[195%] bg-gray-50 z-30'>
    <div className='w-[70%] flex flex-row'>
          <span>Thehsin</span>
        
    </div>
   
   
    

    <div className='w-[30%] flex flex-row items-center justify-between'>
    {theme=='dark'?<img onClick={toggleTheme} className="w-[12%] md:w-[45%]" src="https://cdn-icons-png.flaticon.com/512/12181/12181279.png"></img>:<img onClick={toggleTheme} className='w-[12%] md:w-[55%]' src="	https://cdn-icons-png.flaticon.com/512/391/391097.png"></img>}
    <img  onClick={toggleExpand} className='w-[10%] md:w-[55%]' src="	https://cdn-icons-png.flaticon.com/512/2572/2572691.png"></img>
    </div>
    </div>
    <div className='hidden   md:flex flex-row py-[1%] fixed w-screen'>
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
        <span className="hover:text-yellow-500 w-[100%] md:w-[10%]" onClick={()=>scrollToSection(section5Ref)}>Roles</span>
        <span className="hover:text-yellow-500 w-[100%] md:w-[10%]" onClick={()=>scrollToSection(section6Ref)}>Contact</span>
        <span  onClick={toggleTheme} className='w-[100%] md:w-[10%]'>{theme=='dark'?<img className="w-[25%] md:w-[45%]" src="https://cdn-icons-png.flaticon.com/512/12181/12181279.png"></img>:<img className='w-[25%] md:w-[55%]' src="	https://cdn-icons-png.flaticon.com/512/391/391097.png"></img>}</span>
       </div>

    </div>
    <Sections ref={{section1Ref,section2Ref,section3Ref,section4Ref,section5Ref,section6Ref}} className="w-screen"></Sections>
    </div>
  )
};

export default Header