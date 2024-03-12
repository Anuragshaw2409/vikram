import React, { useState, useEffect, useRef } from 'react'

import ConfirmationModal from './ConfirmationModal';
import { useRecoilValue } from 'recoil';
import { Locationatom } from '../store/atoms/Locationatom';
import loading from "../assets/loading.gif"


function ImageViewer() {

  // const vidRef = useRef();
  const choosenLocation = useRecoilValue(Locationatom);

  const [reached, setReached] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [step, setStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(0);

  useEffect(()=>{
    setStep(1);
  },[reached])


  useEffect(()=>{
    fetch('http://localhost:3000/totalsteps',{
      headers:{
        "location":choosenLocation
      }
    })
    .then((response)=>response.json())
    .then((data)=> setTotalSteps(parseInt(data)))
  },[]);

  function onForward(){
    if(step<totalSteps)
    setStep((c)=>c+1);
    else
    setReached(true);
    
  }
  
  function onBackward(){
    if(step>1)
    setStep((c)=>c-1);


  }






  
  useEffect(() => {
    // Fetch image from backend
    setImageURL(loading);
    fetch('http://localhost:3000/location', {
      headers: {
        "location": choosenLocation,
        "step" : (step-1)
      }
    })
    .then(response => response.blob())
    .then(blob => {
      // Create object URL from blob
      const url = URL.createObjectURL(blob);
      setImageURL(url);
    })
    .catch(error => console.error('Error fetching image:', error));
  }, [step]);
  
  






  return (
    <>



      {reached && <ConfirmationModal setReached={setReached} />}
      <div className="container lg:w-[70%] lg:h-[70%] lg:bg-white absolute lg:left-[50%] lg:bottom-[5%] lg:-translate-x-[50%] rounded-2xl lg:m-0 rotate-90 lg:rotate-0 bottom-[50%] translate-y-1/2 lg:-translate-y-0 w-screen h-screenreen">


        <div className="imageContainer w-full h-full flex justify-center object-contain lg:scale-100 scale-[120%] rounded-3xl border-2 bg-white  overflow-clip">


          {/* {vidComponent} */}
          <img src={imageURL} alt="Image" />;
          

        </div>


        <div className="buttonContainer border-4 lg:border-black border-white h-20 w-20 rounded-full flex justify-center  item-center absolute top-[50%] -translate-y-1/2 lg:left-[2%] -translate-x-[170%] lg:-translate-x-0">
          <button className=' flex justify-center items-center relative' ><h1 className='text-7xl absolute bottom-[10%]  font-bold lg:text-black text-white' onClick={onBackward}>&lt; </h1></button>
        </div>
        <div className="buttonContainer border-4 lg:border-black border-white   h-20 w-20 rounded-full flex justify-center  item-center absolute top-[50%] -translate-y-1/2 right-[2%] translate-x-[170%] lg:translate-x-0 ">
          <button className=' flex justify-center items-center relative' ><h1 className='text-7xl absolute bottom-[10%]  font-bold lg:text-black text-white' onClick={onForward}> &gt;</h1></button>
        </div>



      </div>


    </>
  )
}

export default ImageViewer
