import React, { useState,useEffect, useRef } from 'react'
// import image from "../assets/Directions/BHostel/1.jpg"
// import DireVid from "../assets/Bhostel.mp4"
import ConfirmationModal from './ConfirmationModal';
import { useRecoilValue } from 'recoil';
import { Locationatom } from '../store/atoms/Locationatom';

function ImageViewer() {
const vidRef = useRef();
const choosenLanguage = useRecoilValue(Locationatom);
const [reached, setReached]=useState(false);

useEffect(()=>{
  vidRef.current.currentTime=0;
},[reached]);

function nextStep(){
  if(vidRef.current.currentTime<vidRef.current.duration)
  {console.log(vidRef.current.currentTime);
    vidRef.current.currentTime +=6;}
  else
  setReached(true);
  
  
}
function prevStep(){
  vidRef.current.currentTime -=6;

}


  return (
    <>
    {reached && <ConfirmationModal setReached={setReached}/>}
      <div className="container w-[70%] h-[70%] bg-white absolute left-[50%] bottom-[5%] -translate-x-[50%] rounded-2xl m-0">

        {/* Image viewing logic here */}
        <div className="imageContainer w-full h-full flex justify-center object-contain">

        {/* <img src={image} alt="" className=' overflow-hidden rotate-90 '/>
         */}
         <video ref={vidRef} src={`/src/assets/Directions/${choosenLanguage}.mp4`}   muted={true}></video>
        </div>


        <div className="buttonContainer border-4 border-black  h-20 w-20 rounded-full flex justify-center  item-center absolute top-[50%] -translate-y-1/2 left-[2%] ">
        <button className=' flex justify-center items-center relative' onClick={prevStep}><h1 className='text-7xl absolute bottom-[10%]  font-bold'>&lt; </h1></button>
        </div>
        <div className="buttonContainer border-4 border-black  h-20 w-20 rounded-full flex justify-center  item-center absolute top-[50%] -translate-y-1/2 right-[2%]">
        <button className=' flex justify-center items-center relative' onClick={nextStep}><h1  className='text-7xl absolute bottom-[10%]  font-bold'> &gt;</h1></button>
        </div>



      </div>
      
    </>
  )
}

export default ImageViewer
