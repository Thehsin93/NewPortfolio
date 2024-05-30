import React ,{forwardRef} from 'react'

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Career from './Career';
import Projects from './Projects';
import Contact from './Contact';
const Sections = forwardRef((props,ref) => {
    const {section1Ref,section2Ref,section3Ref,section4Ref,section5Ref,section6Ref} = ref;
  return (
   
    <div>
        <section ref={section1Ref} className='h-screen pt-[10%]'>
            <Home/>
        </section>
        <section ref={section2Ref} className='h-screen pt-[15%] md:pt-[10%]'>
            <About refsection= {section1Ref}/>
        </section>
        <section ref={section3Ref} className='h-screen pt-[15%] md:pt-[10%]'>
            <Skills refsection= {section1Ref}/>
        </section>
        <section ref={section4Ref} className='h-screen pt-[15%] md:pt-[10%]'>
            <Projects refsection= {section1Ref}/>
        </section>
        <section ref={section5Ref} className='h-screen pt-[10%] md:pt-[5%]'>
            <Career refsection= {section1Ref}/>
        </section>
        <section ref={section6Ref} className='h-screen pt-[10%]'>
            <Contact refsection= {section1Ref} />
        </section>
    </div>
  )

});

export default Sections