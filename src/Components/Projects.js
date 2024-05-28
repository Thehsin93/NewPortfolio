import React,{useRef,useState} from 'react'
import useScrollup from "../hooks/useScrollup"
import useDevice from '../hooks/useDevice'

const Projects = ({refsection}) => {
  const isMobile = useDevice();
  const Handleclick= ()=>{
    useScrollup(refsection);
  }
 const [index,setIndex]= useState(0);
 const containerRef = useRef(null);
 const section1Ref = useRef(null);
 const section2Ref = useRef(null);
 const section3Ref = useRef(null);



 
 const scrollToSection = (direction)=>{
 
  let start=null;
  const step = 10;
  const duration = isMobile?410:810;
  const distance = direction ==='right'?step:-step;
  let steps = Math.floor(duration/step);

  if(containerRef.current){
    const sectionWidth = containerRef.current.scrollWidth/3;
    const scrollStep=()=>{
    containerRef.current.scrollBy({
      left:distance,
      behavour:'auto'
    })
    if(--steps>0)
      start = requestAnimationFrame(scrollStep);
  }
    start = requestAnimationFrame(scrollStep);
  }
 }
 const scrollToSectionR = (sectionRef)=>{
 

  if(containerRef.current){
    const sectionWidth = containerRef.current.scrollWidth/3;
    containerRef.current.scrollBy({
      left:(sectionWidth),
      behavour:'auto'
    })
  }
 }
  return (
    <div className='pt-[50%] md:pt-0'>
      <h1 className='font-bold text-center text-xl'>Personal Projects(3)</h1>
    <div className='flex flex-row pt-[5%] px-[10%]'>
      <div className='w-[10%] pt-[10%]'>
        <button onClick={()=>scrollToSection()} className=''><img className="w-4 md:w-10" src="https://cdn-icons-png.flaticon.com/512/4822/4822322.png"></img></button>
      </div>
      <div className='w-[80%] flex flex-row overflow-x-hidden' ref={containerRef}>
        <div ref={section1Ref} className='min-w-[100%]'>
        <div className='w-100% flex md:flex-row flex-col'>
      
        <div className='flex flex-col'>
        <h1 className='text-lg font-bold pb-[2%] text-center'>Food Delivery App</h1>
        <p className='w-[85%] md:pl-0 md:w-[100%]'>1.Sample demo app built with react with below features</p>
        <p>1. Listing of restaurants fetched from Swiggy API</p>
       
        <p>2. Search field for searching restaurants by name</p>
        <p>3. Navigation to restaurants by clicking on the restaurant cards</p>
        <p>4. React Routing to navigate across menu options</p>
        <p className='hidden md:block'>5. Adding and Removing cart using Redux</p>
        <p className='hidden md:block'>6.Styling using Tailwind CSS</p>
        <p className='hidden md:block'>7. Built using React Hooks and React Components</p>
        <p className=''><a href="https://main--foodorderingcj.netlify.app/" target="_blank" className='underline'>https://main--foodorderingcj.netlify.app/</a></p>
        
        </div>
    <div className='items-center shadow-lg bg-gray-300 rounded-lg ml-[0%] md:ml-[5%]  mt-[2%] md:mt-0'>
    <iframe className="w-[100%] h-full"
           
           src={"https://www.youtube.com/embed/vcwsBgrUIS4?&autoplay=1&mute=1"}
           title="YouTube video player"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowFullScreen
         ></iframe>
    </div>

    
</div>
        </div>
        <div ref={section2Ref} className='min-w-[100%]'>
        <div className='w-100% flex md:flex-row flex-col pl-[4%]'>
      
      <div className='flex flex-col'>
      <h1 className='text-lg font-bold pb-[2%] text-center'>Netflix Clone App</h1>
      <p className='w-[85%]  md:pl-0 md:w-[100%]'>1. Sample demo app built cloning Netflix UI</p>
        <p>2. Authentication using Firebase API</p>
       
        <p>3. Display of Movie Trailer in background cloning netflix UI</p>
        <p>4. Display of movie cards</p>
        <p>5. React Routing to navigate to GPT screen</p>
        <p>6. Search field for movie suggestions from Open AI</p>
        <p>7. Multi language support</p>
        <p>8. State Management using Redux</p>
        <p><a href="https://main--netflixgptcj.netlify.app/" target="_blank" className='underline'>https://main--netflixgptcj.netlify.app/</a></p>
      
      </div>
  <div className='items-center shadow-lg bg-gray-300 rounded-lg ml-[0%] md:ml-[5%]  mt-[2%] md:mt-0'>
  <iframe className="w-[100%] h-full"
         
         src={"https://www.youtube.com/embed/zf6M6pR9QA8?&autoplay=1&mute=1"}
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen
       ></iframe>
  </div>

  
</div>
</div>
<div ref={section3Ref} className='min-w-[100%]'>
<div className='w-100% flex md:flex-row flex-col pl-[4%]'>
      
      <div className='flex flex-col'>
      <h1 className='text-lg font-bold pb-[2%] text-center'>Youtube Clone App</h1>
      <p className='w-[85%]  md:pl-0 md:w-[100%]'>1. Sample demo app built cloning Youtube UI</p>
        <p>2. Listing of Movie Cards with youtube API</p>
       
        <p>3. Toggling hamburger as in Youtube</p>
        <p>4. Debouncing Search</p>
        <p>5. React Routing for navigations</p>
        <p>6. Hirearchial Comments Section</p>
        <p>7. Live Chat with caching and state management using redux</p>
        <p>8. State Management using Redux</p>
        <p><a href="https://myreactyoutube.netlify.app" target="_blank" className='underline'>https://myreactyoutube.netlify.app</a></p>
      
      </div>
  <div className='items-center shadow-lg bg-gray-300 rounded-lg ml-[8%]'>
  <iframe className="w-[100%] h-full"
         
         src={"https://www.youtube.com/embed/e5R91k4EEAA?&autoplay=1&mute=1"}
         title="YouTube video player"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         allowFullScreen
       ></iframe>
  </div>

  
</div>
</div>

      </div>
      <div className='w-[10%] pt-[10%] pl-[5%]'>
      <button onClick={()=>scrollToSection("right")} className=''><img src="https://cdn-icons-png.flaticon.com/512/4822/4822313.png" className='w-5 md:w-10'></img></button>
      </div>
    
    </div>
    <div className='items-end w-[5%] cursor-pointer mt-[2%] ml-[90%]' onClick={Handleclick}>
      <img className="" src="https://cdn-icons-png.flaticon.com/128/11480/11480866.png"></img>
    </div>
    </div>
  )
}

export default Projects