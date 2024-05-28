const useMovieTrailer = (sectionRef)=>{
  
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
    
  };

export default useMovieTrailer