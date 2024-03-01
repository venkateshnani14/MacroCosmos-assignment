import { gsap } from 'gsap'
import { useEffect } from 'react'
const Login = ()=>{
    useEffect(()=>{
    gsap.fromTo('#childdivLogin',{y:-400,opacity:0},{y:0,opacity:1,duration:1.8,ease:'power3.out'})
    },[])
    return(
        <>
       <div id='maindivLogin' className='h-screen flex justify-center items-center'>
       <div id='childdivLogin' className='m-0 bg-black bg-opacity-80 h-3/4 my-4 pt-2 '>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:px-3 lg:py-2 text-white font-bold'>Login/Signup</p>
            <form className='m-4 px-2'>
                <div>
                <div className='m-2'><input className='rounded leading-tight bg-black bg-opacity-40 text-white px-1 xl:px-2  py-3 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl' id='Username' type="text" placeholder='Username' /></div>
                <div className='m-2'><input id='pw' type='password' className='rounded bg-black leading-tight bg-opacity-40 text-white px-1 xl:px-2  py-3 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl' placeholder='Password' /></div>
                <div className='pt-2'><button className='bg-blue-500 text-white rounded px-2 py-1 lg:px-4 lg:py-2 hover:bg-blue-600 ' type='submit'><p className='text-sm lg:text-md'>Sign In</p></button></div>
                </div>
            </form>
            <div>
                <p className='text-white xl:text-lg lg:text-md text-sm '>Don't have an account? <a className='text-blue-700 underline' href="/signup">Signup</a></p>
            </div>
        </div>
       </div>
        </>
    )
}
export default Login