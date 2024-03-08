import { useState,useEffect } from "react"
import DataLog from "./DataLog";
import { gsap } from 'gsap'


const Home = ()=>{
    useEffect(()=>{
        gsap.fromTo('#homeChildDiv',{y:50,opacity:0},{y:0,opacity:1,duration:2,delay:0.7,ease:'power4.inOut'})
        gsap.fromTo('#homeHead',{y:100,opacity:0},{y:0,opacity:1,duration:2,ease:'expo.inOut'})
    },[])
    const [btnState,setBtnState] = useState("Submit");
    const [dataLogState,setDataLogState] = useState(false);
    const [btndataLogState,setBtndataLogState] = useState('Log data')
    // const poppedContent = document.getElementById('dataLog')
    const loggingData = ()=>{
        if(dataLogState){
            // poppedContent.scrollIntoView({behavior:"smooth",block:'end'})
            setDataLogState(false);
            setBtndataLogState('Log data')
        }
        else {setDataLogState(true)
        setBtndataLogState('Hide data')}
    }
    return(
        <>
        <div id="homeMainDiv" className='h-screen'>
        <header id="homeHead"><p className='font-bold text-lg sm:text-xl md:text-4xl lg:text-7xl text-wrap ml-2 md:ml-5 lg:ml-10 text-center'><span className="text-center">The data is secure.</span><br/> <span className="text-center">Your privacy is our utmost priority!</span></p></header>
            <div id="homeChildDiv" className="flex justify-center">
            <div className='py-10 flex flex-col'>
            {/* <form className='py-10 flex flex-col'> */}
                <div className="flex my-3 justify-between"><label className='font-bold text-sm md:text-lg lg:text-2xl xl:text-4xl mr-10' htmlFor="firstname">First name:</label><input className=' bg-transparent border-2 border-black px-1 font-thin sm:font-bold' type="text" id="firstname" /></div>
                <div className="flex my-3 justify-between"><label className='font-bold text-sm md:text-lg lg:text-2xl xl:text-4xl mr-10' htmlFor="lastname">Last name:</label><input className='border-2 border-black  bg-transparent px-1 font-thin sm:font-medium' type="text" id="lastname" /></div>
                <div className="flex my-3 justify-between"><label className='font-bold text-sm md:text-lg lg:text-2xl xl:text-4xl mr-10' htmlFor="DOB">Date of birth:</label><input className='border-2 border-black  bg-transparent px-1 font-thin sm:font-medium'  type="date" id="dob" /></div>
                <div id="submit" className="my-3"><button type="submit" onClick={()=>{setBtnState("Submitted")}} className="bg-slate-700 hover:bg-slate-900 p-2 rounded w-full font-bold lg:text-xl hover:bg-blue-700 text-white">{btnState}</button></div>
                <div className= 'my-3' ><button className="bg-slate-700 hover:bg-slate-900 p-2 rounded w-full font-bold lg:text-xl hover:bg-blue-700 text-white" onClick={()=>{
                    loggingData();
                    const poppedContent = document.getElementById('dataLog')
                    poppedContent.scrollIntoView({behavior:"smooth",block:'end'})
                }}>{btndataLogState}</button></div>
            {/* </form> */}
            </div>
            </div>
        <div id="dataLog">
            {dataLogState && <DataLog id='mainDataLog'/> }
        </div>
        </div>
        </>
    )
}
export default Home