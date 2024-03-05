import React, { useEffect } from 'react'
import vikram from '../assets/image-vikram.png'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { choosenLanguage } from '../store/atoms/Language';
import { Locationatom } from '../store/atoms/Locationatom';
import LocationButton from './LocationButton';
import { useNavigate } from 'react-router-dom';
import annyang from 'annyang';
import LocationHindi from "../assets/audio/AskLocationHindi.mp3"
import LocationEnglish from "../assets/audio/AskLocationEnglish.m4a"



function Location() {
    let audioComponent =null;

    const setLocation = useSetRecoilState(Locationatom);

    const navigate = useNavigate();
    let keys = 0;
    const language = useRecoilValue(choosenLanguage);
    if(language =='En'){
        audioComponent = <audio src={LocationEnglish} autoPlay/>
    }
    else
    audioComponent =<audio src={LocationHindi} autoPlay/>

    console.log(language);
    let buttonText;
    let locations;
    if (language === 'En') {
        locations = ["Electrical Department", "Computer science Department", "Mechanical Department", "Civil Department", "Electronics Department", "AIML Department", "MBA Department", "Library", "Director", "Admission Cell", "Placement Cell", "IQAC Cell", "Registrar", "HR Office", "C.V. Raman Center", "Incubation Center", "Seminar Hall 1", "Seminar Hall 2", "Seminar Hall 3", "IoT Lab", "Volleyball Ground", "Basketball Court", "Cricket Ground", "Football Ground", "Badminton Court", "Gym", "Boys Hostel", "Girls Hostel", "Cafeteria", "Conference Hall", "Examination Cell", "STP Plant", "Bio gas plant", "Vermicompost plant", "Faculty apartment", "Workshop", "Vivekanand Hall"];
        buttonText = "Where do you want to go?"
    }
    else {
        locations = ["इलेक्ट्रिकल डिपार्टमेंट", "कंप्यूटर साइंस डिपार्टमेंट", "मैकेनिकल डिपार्टमेंट", "सिविल डिपार्टमेंट", "इलेक्ट्रॉनिक डिपार्टमेंट", "ए आई एम एल डिपार्टमेंट", "एम बी ए डिपार्टमेंट", "लाइब्रेरी", "डायरेक्टर", "एडमिशन सेल", "प्लेसमेंट सेल", "आई क्यू ए सी सेल", "रजिस्ट्रार", "एच आर ऑफिस", "सी वी रमन सेंटर", "इनक्यूबेशन सेंटर", " सेमिनार हॉल 1", "सेमिनार हॉल 2", "सेमिनार हॉल 3", "आई ओ टी लैब", "वॉलीबॉल ग्राउंड", "बास्केटबॉल कोर्ट", "क्रिकेट ग्राउंड", "फुटबॉल ग्राउंड", "बैडमिंटन कोर्ट", "जिम", "बॉयज हॉस्टल", "गर्ल्स हॉस्टल", "कैफेटेरिया", "कांफ्रेंस हॉल", "एग्जामिनेशन सेल", "एस टी पी प्लांट", "बायो गैस प्लांट", "वर्मीकम्पोस्ट प्लांट", "फैकल्टी अपार्टमेंट", "वर्कशॉप", "विवेकानंद हॉल"];
        buttonText = "आप कहाँ जाना चाहते हैं ?";
    }

    const matching = ["electrical", "computer", "mechanical", "civil", "electronics", "aiml", "MBA", "library", "director", "admission", "placement", "iqac", "registrar", "HR", "Raman", "incubation", "one", "2", "3", "iot", "volleyball", "basketball", "cricket", "football", "badminton", "gym", "boys", "girls", "cafeteria", "conference", "examination", "stp", "biogas", "vermicompost", "faculty", "workshop", "vivekanand"];

    useEffect(() => {
        if (annyang) {
            annyang.setLanguage("en-IN");
            annyang.addCallback('result', function (phrases) {

                phrases.forEach((phrase) => {

                    for (let i = 0; i < matching.length; i++) {
                        if (phrase.includes(matching[i])) {
                            setLocation(i);
                            annyang.abort();
                            navigate('/player');
                        }
                    }

                })
            });

            annyang.start({ autoRestart: true, continuous: false });
            console.log("Started");

        }

        return () => {
            annyang.removeCommands();
            annyang.pause();
        }
    }, []);

    return (
        <>
            {audioComponent}
            <div className="locationContainer flex flex-row absolute right-[4%] flex-wrap  w-[60%] top-[7%]">

                {locations.map((location, index) => <LocationButton location={location} indexes={index} key={++keys} />)}
            </div>


            {/* buttons rendering here */}

            <div className="container ">

                <div className="text w-[15%] bg-slate-200 inline-block text-wrap text-center p-8 absolute rounded-3xl bottom-[40%] left-[17%]"><h1 className='text-3xl font-bold'>{buttonText}</h1></div>
                <img src={vikram} alt="" className='w-[25%] absolute bottom-0 p-0 left-[2%] ' />
            </div>


            <div className="homeContainer h-20 w-20 border-2 border-white rounded-full hover:cursor-pointer  absolute right-[2%] top-[2%]">
                <i className="fa-solid fa-house text-5xl text-white p-3" onClick={() => navigate('/')}></i>
            </div>
        </>
    )
}

export default Location;