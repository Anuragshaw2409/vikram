// import React, { useState, useEffect, useRef } from 'react'

// import ConfirmationModal from './ConfirmationModal';
// import { useRecoilValue } from 'recoil';
// import { Locationatom } from '../store/atoms/Locationatom';
// import loading from "../assets/loading.gif"


// function ImageViewer() {

//   // const vidRef = useRef();
//   const choosenLocation = useRecoilValue(Locationatom);

//   const [reached, setReached] = useState(false);
//   const [imageURL, setImageURL] = useState('');
//   const [step, setStep] = useState(1);
//   const [totalSteps, setTotalSteps] = useState(0);

//   useEffect(()=>{
//     setStep(1);
//   },[reached])


//   useEffect(()=>{
//     fetch('http://localhost:3000/totalsteps',{
//       headers:{
//         "location":choosenLocation
//       }
//     })
//     .then((response)=>response.json())
//     .then((data)=> setTotalSteps(parseInt(data)))
//   },[]);

//   function onForward(){
//     if(step<totalSteps)
//     setStep((c)=>c+1);
//     else
//     setReached(true);
    
//   }
  
//   function onBackward(){
//     if(step>1)
//     setStep((c)=>c-1);


//   }






  
//   useEffect(() => {
//     // Fetch image from backend
//     setImageURL(loading);
//     fetch('http://localhost:3000/location', {
//       headers: {
//         "location": choosenLocation,
//         "step" : (step-1)
//       }
//     })
//     .then(response => response.blob())
//     .then(blob => {
//       // Create object URL from blob
//       const url = URL.createObjectURL(blob);
//       setImageURL(url);
//     })
//     .catch(error => console.error('Error fetching image:', error));
//   }, [step]);
  
  






//   return (
//     <>



//       {reached && <ConfirmationModal setReached={setReached} />}
//       <div className="container lg:w-[70%] lg:h-[70%] lg:bg-white absolute lg:left-[50%] lg:bottom-[5%] lg:-translate-x-[50%] rounded-2xl lg:m-0 rotate-90 lg:rotate-0 bottom-[50%] translate-y-1/2 lg:-translate-y-0 w-screen h-screenreen">


//         <div className="imageContainer w-full h-full flex justify-center object-contain lg:scale-100 scale-[120%] rounded-3xl border-2 bg-white  overflow-clip">


//           {/* {vidComponent} */}
//           <img src={imageURL} alt="Image" />;
          

//         </div>


//         <div className="buttonContainer border-4 lg:border-black border-white h-20 w-20 rounded-full flex justify-center  item-center absolute top-[50%] -translate-y-1/2 lg:left-[2%] -translate-x-[170%] lg:-translate-x-0">
//           <button className=' flex justify-center items-center relative' ><h1 className='text-7xl absolute bottom-[10%]  font-bold lg:text-black text-white' onClick={onBackward}>&lt; </h1></button>
//         </div>
//         <div className="buttonContainer border-4 lg:border-black border-white   h-20 w-20 rounded-full flex justify-center  item-center absolute top-[50%] -translate-y-1/2 right-[2%] translate-x-[170%] lg:translate-x-0 ">
//           <button className=' flex justify-center items-center relative' ><h1 className='text-7xl absolute bottom-[10%]  font-bold lg:text-black text-white' onClick={onForward}> &gt;</h1></button>
//         </div>



//       </div>


//     </>
//   )
// }

// export default ImageViewer

// ..........................................................................................................................................







import React, { useState,useEffect, useRef } from 'react'
// import image from "../assets/Directions/BHostel/1.jpg"
// import DireVid from "../assets/Bhostel.mp4"
import ConfirmationModal from './ConfirmationModal';
import { useRecoilValue } from 'recoil';
import { Locationatom } from '../store/atoms/Locationatom';
import vid0 from "../assets/Directions/0.mp4"
import vid1 from "../assets/Directions/1.mp4"
import vid2 from "../assets/Directions/2.mp4"
import vid3 from "../assets/Directions/3.mp4"
import vid4 from "../assets/Directions/4.mp4"
import vid5 from "../assets/Directions/5.mp4"
import vid6 from "../assets/Directions/6.mp4"
import vid7 from "../assets/Directions/7.mp4"
import vid8 from "../assets/Directions/8.mp4"
import vid9 from "../assets/Directions/9.mp4"
import vid10 from "../assets/Directions/10.mp4"
import vid11 from "../assets/Directions/11.mp4"
import vid12 from "../assets/Directions/12.mp4"
import vid13 from "../assets/Directions/13.mp4"
import vid14 from "../assets/Directions/14.mp4"
import vid16 from "../assets/Directions/16.mp4"
import vid17 from "../assets/Directions/17.mp4"
import vid18 from "../assets/Directions/18.mp4"
import vid19 from "../assets/Directions/19.mp4"
import vid20 from "../assets/Directions/20.mp4"
import vid21 from "../assets/Directions/21.mp4"
import vid22 from "../assets/Directions/22.mp4"
import vid23 from "../assets/Directions/23.mp4"
import vid24 from "../assets/Directions/24.mp4"
import vid25 from "../assets/Directions/25.mp4"
import vid26 from "../assets/Directions/26.mp4"
import vid27 from "../assets/Directions/27.mp4"
import vid28 from "../assets/Directions/28.mp4"
import vid29 from "../assets/Directions/29.mp4"
import vid30 from "../assets/Directions/30.mp4"
import vid31 from "../assets/Directions/31.mp4"
import vid32 from "../assets/Directions/32.mp4"
import vid33 from "../assets/Directions/33.mp4"
import vid34 from "../assets/Directions/34.mp4"
import vid35 from "../assets/Directions/35.mp4"
import vid36 from "../assets/Directions/36.mp4"

function ImageViewer() {

  const vidRef = useRef();
  const choosenLocation = useRecoilValue(Locationatom);
  const [reached, setReached]=useState(false);
  let vidComponent=null;
  if(choosenLocation===0)vidComponent = <video ref ={vidRef} src={vid0} muted={true} preload='auto'/>
  if(choosenLocation===1)vidComponent = <video ref ={vidRef} src={vid1} muted={true} preload='auto'/>
  if(choosenLocation===2)vidComponent = <video ref ={vidRef} src={vid2} muted={true} preload='auto'/>
  if(choosenLocation===3)vidComponent = <video ref ={vidRef} src={vid3} muted={true} preload='auto'/>
  if(choosenLocation===4)vidComponent = <video ref ={vidRef} src={vid4} muted={true} preload='auto'/> 
  if(choosenLocation===5)vidComponent = <video ref ={vidRef} src={vid5} muted={true} preload='auto'/>
  if(choosenLocation===6)vidComponent = <video ref ={vidRef} src={vid6} muted={true} preload='auto'/>
  if(choosenLocation===7)vidComponent = <video ref ={vidRef} src={vid7} muted={true} preload='auto'/>
  if(choosenLocation===8)vidComponent = <video ref ={vidRef} src={vid8} muted={true} preload='auto'/>
  if(choosenLocation===9)vidComponent = <video ref ={vidRef} src={vid9} muted={true} preload='auto'/>
  if(choosenLocation===10)vidComponent = <video ref ={vidRef} src={vid10} muted={true} preload='auto'/>
  if(choosenLocation===11)vidComponent = <video ref ={vidRef} src={vid11} muted={true} preload='auto'/>
  if(choosenLocation===12)vidComponent = <video ref ={vidRef} src={vid12} muted={true} preload='auto'/>
  if(choosenLocation===13)vidComponent = <video ref ={vidRef} src={vid13} muted={true} preload='auto'/>
  if(choosenLocation===14)vidComponent = <video ref ={vidRef} src={vid14} muted={true} preload='auto'/>
  if(choosenLocation===16)vidComponent = <video ref ={vidRef} src={vid16} muted={true} preload='auto'/>
  if(choosenLocation===17)vidComponent = <video ref ={vidRef} src={vid17} muted={true} preload='auto'/>
  if(choosenLocation===18)vidComponent = <video ref ={vidRef} src={vid18} muted={true} preload='auto'/>
  if(choosenLocation===19)vidComponent = <video ref ={vidRef} src={vid19} muted={true} preload='auto'/>
  if(choosenLocation===20)vidComponent = <video ref ={vidRef} src={vid20} muted={true} preload='auto'/>
  if(choosenLocation===21)vidComponent = <video ref ={vidRef} src={vid21} muted={true} preload='auto'/>
  if(choosenLocation===22)vidComponent = <video ref ={vidRef} src={vid22} muted={true} preload='auto'/>
  if(choosenLocation===23)vidComponent = <video ref ={vidRef} src={vid23} muted={true} preload='auto'/>
  if(choosenLocation===24)vidComponent = <video ref ={vidRef} src={vid24} muted={true} preload='auto'/>
  if(choosenLocation===25)vidComponent = <video ref ={vidRef} src={vid25} muted={true} preload='auto'/>
  if(choosenLocation===26)vidComponent = <video ref ={vidRef} src={vid26} muted={true} preload='auto'/>
  if(choosenLocation===27)vidComponent = <video ref ={vidRef} src={vid27} muted={true} preload='auto'/>
  if(choosenLocation===28)vidComponent = <video ref ={vidRef} src={vid28} muted={true} preload='auto'/>
  if(choosenLocation===29)vidComponent = <video ref ={vidRef} src={vid29} muted={true} preload='auto'/>
  if(choosenLocation===30)vidComponent = <video ref ={vidRef} src={vid30} muted={true} preload='auto'/>
  if(choosenLocation===31)vidComponent = <video ref ={vidRef} src={vid31} muted={true} preload='auto'/>
  if(choosenLocation===32)vidComponent = <video ref ={vidRef} src={vid32} muted={true} preload='auto'/>
  if(choosenLocation===33)vidComponent = <video ref ={vidRef} src={vid33} muted={true} preload='auto'/>
  if(choosenLocation===34)vidComponent = <video ref ={vidRef} src={vid34} muted={true} preload='auto'/>
  if(choosenLocation===35)vidComponent = <video ref ={vidRef} src={vid35} muted={true} preload='auto'/>
  if(choosenLocation===36)vidComponent = <video ref ={vidRef} src={vid36} muted={true} preload='auto'/>
 
  

useEffect(()=>{
  vidRef.current.currentTime=1;
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
      <div className="container lg:w-[70%] lg:h-[70%] lg:bg-white absolute lg:left-[50%] lg:bottom-[5%] lg:-translate-x-[50%] rounded-2xl lg:m-0 rotate-90 lg:rotate-0 bottom-[50%] translate-y-1/2 lg:-translate-y-0 w-screen h-screenreen">

        {/* Image viewing logic here */}
        <div className="imageContainer w-full h-full flex justify-center object-contain lg:scale-100 scale-[120%] rounded-3xl border-2 bg-white  overflow-clip">
        {/* <img src={image} alt="" className=' overflow-hidden rotate-90 '/>
         */}
         {vidComponent}
        </div>


        <div className="buttonContainer border-4 lg:border-black border-white h-20 w-20 rounded-full flex justify-center  item-center absolute top-[50%] -translate-y-1/2 lg:left-[2%] -translate-x-[170%] lg:-translate-x-0">
          <button className=' flex justify-center items-center relative' ><h1 className='text-7xl absolute bottom-[10%]  font-bold lg:text-black text-white' onClick={prevStep}>&lt; </h1></button>
        </div>
        <div className="buttonContainer border-4 lg:border-black border-white   h-20 w-20 rounded-full flex justify-center  item-center absolute top-[50%] -translate-y-1/2 right-[2%] translate-x-[170%] lg:translate-x-0 ">
          <button className=' flex justify-center items-center relative' ><h1 className='text-7xl absolute bottom-[10%]  font-bold lg:text-black text-white' onClick={nextStep}> &gt;</h1></button>
        </div>



      </div>
      
    </>
  )
}

export default ImageViewer
