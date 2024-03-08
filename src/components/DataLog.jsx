import { useState } from "react"

const DataLog = () => {
    //check backend data to determine this state.
    const [dataExists,setDataExists]  = useState(false)
    return(
        <>
        <div id="mainDataDiv" className="bg-black text-white w-full flex justify-center items-center">
        <div id="dataContent">
           {dataExists?<div>Data exists</div>:<p className = "text-white lg:text-4xl" style={{letterSpacing:'2px'}}>404: Data not found!</p>}
        </div>
        </div>
        </>
    )
}
export default DataLog