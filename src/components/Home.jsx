const Home = ()=>{
    return(
        <>
        <div id="homeMainDiv" className='h-screen'>
            <div id="homeChildDiv" className="flex justify-center">
            <div>
            <form className='py-10 flex flex-col'>
                <label className='font-bold text-sm md:text-lg lg:text-2xl xl:text-4xl mx-4' htmlFor="firstname">First name:</label><input className=' bg-transparent border-2 border-black px-1 font-thin sm:font-bold' type="text" id="firstname" />
                <label className='font-bold text-sm md:text-lg lg:text-2xl xl:text-4xl mx-4' htmlFor="lastname">Last name:</label><input className='border-2 border-black  bg-transparent px-1 font-thin sm:font-medium' type="text" id="lastname" />
                <label className='font-bold text-sm md:text-lg lg:text-2xl xl:text-4xl mx-4' htmlFor="DOB">Date of birth:</label><input className='border-2 border-black  bg-transparent px-1 font-thin sm:font-medium'  type="date" id="dark huys sjun" />
            </form>
            </div>
            </div>
        </div>
        </>
    )
}
export default Home