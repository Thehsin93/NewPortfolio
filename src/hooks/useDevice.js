import {useState,useEffect} from "react"
const useDevice = ()=>{
    const[isMobile,setIsMobile] = useState(false);

useEffect(()=>{
    const userAgent = navigator.userAgent||window.opera;
    if(/android|ipad|iphone|ipod/.test(userAgent))
        setIsMobile(true);
    else
        setIsMobile(false);
},[]);
return isMobile;
};
export default useDevice;