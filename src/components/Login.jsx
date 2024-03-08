import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Login = ()=>{
    useEffect(()=>{
    gsap.fromTo('#childdivLogin',{y:-400,opacity:0},{y:0,opacity:1,duration:1.8,ease:'power3.out'})
    },[])
    const navigate = useNavigate();
    const eventHandler = (e)=>{
        e.preventDefault();
        navigate('/home');
    }
    return(
        <>
       <div id='maindivLogin' className='h-screen flex justify-center items-center'>
       <div id='childdivLogin' className='bg-black w-full md:py-4 lg:my-7 sm:w-1/2 bg-opacity-80 min-h-1/4 min-width-100'>
       <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:px-3 sm:py-2 pt-4 text-white font-bold text-center'>Login/Signup</p>
            <form className='m-4 px-2'>
                <div>
                <div className='m-2 flex justify-center'><input className='rounded leading-tight w-3/4 bg-black bg-opacity-40 text-gray-400 px-1 xl:px-2  py-3 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl' id='Username' type="text" placeholder='Username' required /></div>
                <div className='m-2 flex justify-center'><input id='pw' type='password' className='rounded w-3/4 bg-black leading-tight bg-opacity-40 text-gray-100 px-1 xl:px-2  py-3 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl' placeholder='Password' required /></div>
                <div className='pt-2 m-2 flex justify-center'><button className='bg-blue-500 text-white rounded w-3/4 py-1 lg:px-4 lg:py-2 hover:bg-blue-600 ' onClick={eventHandler} ><p className='text-sm lg:text-xl'>Sign In</p></button></div>
                </div>
            </form>
            <div className='pb-2 flex flex-col items-center'>
                <p className='text-gray-400 xl:text-lg lg:text-md text-sm '>Don't have an account? <a className='text-blue-700 hover:underline' href="/signup">Signup</a></p>
                <p id='formQuery' className='text-gray-400 text-10 md:px-1 md:pt-3 float-center'>Contact us for any queries - <span className='text-blue-700 hover:underline hover:cursorpointer' href='/'>macrocosmos@helpdesk.in</span></p>
            </div>
        </div>
       </div>
        </>
    )
}
export default Login