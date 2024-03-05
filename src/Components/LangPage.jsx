import React, { useState, useEffect } from 'react'
import vikram from '../assets/image-vikram.png'
import {  useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom';
import { choosenLanguage } from '../store/atoms/Language';
import ChooseLang from "../assets/audio/ChooseLangMerged.mp3"
import annyang from 'annyang';




function LangPage() {
    const [spoken, setSpoken]=useState(0);
    const navigate = useNavigate();

  
    const setLanguage = useSetRecoilState(choosenLanguage);

    function handleHindiButton() {
        setLanguage('Hindi');
       
        navigate('/locationpage');
    }
    function handleEnglishButton() {
        
        setLanguage('En');
        
        navigate('/locationpage');
    }
    

    useEffect(() => {
    
    
        if (annyang) {
          let commands = {
    
            '*text': (text) => {
              console.log(text);
              let greetings = text.toLowerCase().includes("english");
              if (greetings) {
                console.log("english detected");
                handleEnglishButton();
                
                
              }
               greetings = text.toLowerCase().includes("hindi");
              if (greetings) {
                console.log("hindi detected");
                handleHindiButton();
                
                
              }
              
            }
            
          };
          
          annyang.addCommands(commands);
          annyang.start({autoRestart: true, continuous: false});
          console.log("Started");
          
          return ()=>{
            annyang.pause();
            annyang.removeCommands();
            console.log("Paused Moving to next page");
          }
        }
        
}, [spoken]);




    return (
        <>
            <audio src={ChooseLang} autoPlay onEnded={()=>{setSpoken(1);}}></audio>

            <div className="buttonContainer absolute left-[5%] bottom-[20%]">
                <button className='text-4xl text-blue-700 font-bold bg-gray-200 shadow-black shadow-xl w-[250%] py-5 rounded-3xl my-3' onClick={handleHindiButton}>हिंदी</button>
                <br />
                <button className='text-4xl text-blue-700 font-bold bg-gray-200 shadow-black shadow-xl w-[250%] py-5 rounded-3xl my-3'onClick={handleEnglishButton}>English</button>

            </div>
            <div className='bg-gray-200 bg-opacity-40 h-auto w-auto absolute  flex-col justify-center text-center top-1/4 p-4 rounded-2xl right-[5%]'>
                <h1 className='text-white text-4xl font-bold '>Choose your preferred language</h1>
                <br />

                <h3 className='p-1 bg-gradient-to-r from-purple-600 to-custom-blue text-transparent text-4xl font-bold bg-clip-text  '>अपनी पसंदीदा भाषा चुनें</h3>

            </div>
            <img src={vikram} alt="" className='w-1/3 absolute bottom-0 p-0 left-1/2 -translate-x-1/2' />
            <div className="homeContainer h-20 w-20 border-2 border-white rounded-full hover:cursor-pointer  absolute right-[2%] top-[2%]">
            <i className="fa-solid fa-house text-5xl text-white p-3" onClick={()=>navigate('/')}></i>
            
            </div>
        </>
    )
}

export default LangPage;
