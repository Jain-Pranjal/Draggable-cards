import React from 'react'

const Back = () => {
  return (
    <>
    {/* now this comp will lie below of the foreground div  */}
     <div className='w-full h-screen fixed z-[1]'>
        <div className=" absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold " >Documents</div>
        <h1 className="absolute text-zinc-900 font-semibold text-[13vw]  leading-none tracking-tight top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">Docs.</h1>
    </div>
    </>
  )
}

export default Back
