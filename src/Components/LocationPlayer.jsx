import React from 'react'
import { useRecoilValue } from 'recoil'
import { Locationatom } from '../store/atoms/Locationatom'
import vikram from '../assets/image-vikram.png'
import ImageViewer from './ImageViewer'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import { choosenLanguage } from '../store/atoms/Language'

function LocationPlayer() {
  const navigate = useNavigate();
  const lang = useRecoilValue(choosenLanguage);

  const choosenLocation = useRecoilValue(Locationatom)
  console.log(choosenLocation)
  return (
        <>  
    <div className="container bg-gradient-to-r from-custom-blue to-custom-pink h-screen w-screen relative p-0 m-0 ">
        <Header/>

      <ImageViewer />
      <img src={vikram} alt="" className='lg:w-1/5 absolute lg:bottom-[5%]  lg:left-[15%]  lg:rotate-0 rounded-bl-xl bottom-[2%] w-[50%] rotate-90'  />
      
        <div className='font-bold text-xl rotate-90 absolute bottom-[50%] right-[0%] translate-x-[20%] z-10 bg-slate-100 px-4 py-2 bg-opacity-70 rounded-2xl z-20'>{lang=='En'? "Use buttons to navigate":"नेविगेट करने के लिए बटनों का उपयोग करें"}</div>
        
      <div className="homeContainer h-20 w-20 border-2 border-white rounded-full hover:cursor-pointer  absolute right-[2%] top-[2%]">
        <i className="fa-solid fa-house text-5xl text-white p-3" onClick={() => navigate('/')}></i>
      </div>
      </div>

    </>
  )
}

export default LocationPlayer
