import React,{useState,useRef} from 'react'
import  data from '../Utils/constants';
import ItemList1 from './ItemList1';
import ItemList2 from './ItemList2';
import ItemList3 from './ItemList3';
import ItemList4 from './ItemList4';
import ItemList5 from './ItemList5';
import useScrollup from "../hooks/useScrollup"


const Career = ({refsection}) => {
    const Handleclick= ()=>{
        useScrollup(refsection);
      }
    const arrowLink = "https://th.bing.com/th?id=OIP.4yicplh21FyPmI-_VOb3kwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2";
    const [clickstate,setclickstate] = useState(0);
    const currentstate1 = useRef(false);
    const currentstate2 = useRef(false);
    const currentstate3 = useRef(false);
    const currentstate4 = useRef(false);
    const currentstate5 = useRef(false);

    const handleclick=(i)=>{
       
        if(i==1){
            currentstate1.current = !currentstate1.current;
            currentstate2.current = false;
            currentstate3.current = false;
            currentstate4.current = false;
            currentstate5.current = false;
        }

        else if(i==2){
            currentstate2.current = !currentstate2.current;
            currentstate1.current = false;
            currentstate3.current = false;
            currentstate4.current = false;
            currentstate5.current = false;
        }
        else if(i==3){
            currentstate3.current = !currentstate3.current;
            currentstate1.current = false;
            currentstate2.current = false;
            currentstate4.current = false;
            currentstate5.current = false;
        }
        else if(i==4){
            currentstate4.current = !currentstate4.current;
            currentstate1.current = false;
            currentstate3.current = false;
            currentstate2.current = false;
            currentstate5.current = false;
        }
        else if(i==5){
            currentstate5.current = !currentstate5.current;
            currentstate1.current = false;
            currentstate3.current = false;
            currentstate4.current = false;
            currentstate2.current = false;
        }
        console.log(currentstate1.current);
        console.log(currentstate2.current);
        console.log(currentstate3.current);
        console.log(currentstate4.current);
        console.log(currentstate5.current);
        console.log("done");
        if(clickstate==i)
            setclickstate(0);
        else
            setclickstate(i);
    }
  return (
    <div className='flex flex-col  mt-[1%] pt-[60%] md:pt-[6%]  rounded-3xl'>
       <h1 className='text-center font-bold pb-[2%] text-2xl'>Employment History</h1>
    <div className="w-10/12 mx-auto mb-2  shadow-lg p-2  bg-white dark:bg-gray-100 cursor-pointer">
        <div className="flex justify-between" onClick={()=>handleclick(1)} >
        <span className="text-sm italic underline text-yellow-500">
            Department Of Health (Jan 2023- Jan 2024)
        </span>
        <img className="w-6 h-6 md:w-5"src={arrowLink}></img>
        </div>
        
        
        <div className='bg-beige-100 rounded-lg'>
        {(clickstate==1 || currentstate1.current==true) && <ItemList1></ItemList1>}
    </div>
        

    </div>
    <div className="w-10/12 mx-auto my-2 shadow-lg p-2  bg-white dark:bg-gray-100 cursor-pointer">
        <div className="flex justify-between" onClick={()=>handleclick(2)}>
        <span className="text-sm italic underline text-yellow-500">
            Unity Infotech (Oct 2021 - Jan 2023)
        </span>
        <img className="w-6 h-6 md:w-5"src={arrowLink}></img>
        </div>
        
        
        <div className='bg-beige-100 rounded-lg'>
        {(clickstate==2 || currentstate2.current==true) && <ItemList2 ></ItemList2>}
    </div>
        

    </div>
    <div className="w-10/12 mx-auto my-2 shadow-lg p-2  bg-white dark:bg-gray-100 cursor-pointer">
        <div className="flex justify-between" onClick={()=>handleclick(3)}>
        <span className="text-sm italic underline text-yellow-500">
           Cinque Technologies (Mar 2019 - Aug 2020)
        </span>
        <img className="w-6 h-6 md:w-5"src={arrowLink}></img>
        </div>
        
        
        <div className='bg-beige-100 rounded-lg '>
        {(clickstate==3 || currentstate3.current==true) && <ItemList3></ItemList3>}
    </div>
        

    </div>
    <div className="w-10/12 mx-auto my-2  shadow-lg p-2  bg-white dark:bg-gray-100 cursor-pointer">
        <div className="flex justify-between" onClick={()=>handleclick(4)}>
        <span className="text-sm italic underline text-yellow-500">
           Saar Information Technology (Mar 2018 - Mar 2019)
        </span>
        <img className="w-6 h-6 md:w-5"src={arrowLink}></img>
        </div>
        
        
        <div className='bg-beige-100 rounded-lg'>
        {(clickstate==4 || currentstate4.current==true) && <ItemList4></ItemList4>}
    </div>
        

    </div>
    <div className="w-10/12 mx-auto mt-2 mb-6  shadow-lg p-2  bg-white dark:bg-gray-100 cursor-pointer">
        <div className="flex justify-between" onClick={()=>handleclick(5)}>
        <span className="text-sm italic underline text-yellow-500">
           Tata Elxsi (Nov 2016 - Jan 2018)
        </span>
        <img className="w-6 h-6 md:w-5"src={arrowLink}></img>
        </div>
        
        
        <div className=''>
        {(clickstate==5 || currentstate5.current==true) && <ItemList5></ItemList5>}
    </div>
        

    </div>
    <div className='items-end w-[5%] cursor-pointer mt-[50%] md:mt-[2%] ml-[90%]' onClick={Handleclick}>
      <img className="" src="https://cdn-icons-png.flaticon.com/128/11480/11480866.png"></img>
    </div>
    </div>
  )
}


export default Career