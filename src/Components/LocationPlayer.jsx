import React from 'react'
import { useRecoilValue } from 'recoil'
import { Locationatom } from '../store/atoms/Locationatom'
import vikram from '../assets/image-vikram.png'
import ImageViewer from './ImageViewer'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

function LocationPlayer() {
  const navigate = useNavigate();
  const choosenLocation = useRecoilValue(Locationatom)
  console.log(choosenLocation)
  return (
        <>  
    <div className="container bg-gradient-to-r from-custom-blue to-custom-pink h-screen w-screen relative p-0 m-0 ">
        <Header/>

      <ImageViewer />
      <img src={vikram} alt="" className='lg:w-1/5 absolute lg:bottom-[5%]  lg:left-[15%]  lg:rotate-0 rounded-bl-xl bottom-[2%] w-[50%] rotate-90'  />
      <div className="homeContainer h-20 w-20 border-2 border-white rounded-full hover:cursor-pointer  absolute right-[2%] top-[2%]">
        <i className="fa-solid fa-house text-5xl text-white p-3" onClick={() => navigate('/')}></i>
      </div>
      </div>

    </>
  )
}

export default LocationPlayer
