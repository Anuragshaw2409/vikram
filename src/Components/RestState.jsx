import React from 'react'
import vikram from '../assets/image-vikram.png'
import { useEffect, useState } from 'react'
import greet from '../assets/audio/Welcome.mp3'
import { useNavigate } from 'react-router-dom';

function RestState() {
  const navigate = useNavigate();
  const [saidVikram, setSaidVikram] = useState(null);
  const[text, setText]=useState(["Hi, this is your JBIT guide","To assist","Click"]);
  useEffect(()=>{
    if(saidVikram){
      setText(["Hi, Welcome to JBIT","नमस्ते, जेबीआईटी में आपका स्वागत है",null])
  
    }

  },[saidVikram]);
  
  
 
  
  
  return (
    <>

      {saidVikram && <audio src={greet} autoPlay onEnded={()=>{ navigate('/langpage'); }} ></audio>}
        <div className='bg-gray-200 bg-opacity-40 h-auto w-auto absolute  flex-col justify-center text-center lg:top-1/4 p-4 rounded-2xl lg:right-[5%] m-3 '>
        <h1 className='text-white text-4xl font-bold '>{text[0]}</h1>
        <br />
        <h3 className='text-white text-4xl font-bold  '>{text[1]},</h3>
        <br />
        <h3 className='p-1  text-white text-4xl font-bold   '>{text[2]}</h3>

        <button className='bg-white rounded-3xl w-[70%] h-16  shadow-md shadow-black' onClick={()=>setSaidVikram(1)}><h1 className='text-3xl font-bold bg-gradient-to-r from-custom-blue to-custom-pink bg-clip-text text-transparent'>Hi Vikram</h1></button>
      </div>
      
      <img src={vikram} alt="" className='lg:w-1/3 absolute bottom-0  left-1/2 -translate-x-1/2 w-full' />
    </>
  )
}

export default RestState
