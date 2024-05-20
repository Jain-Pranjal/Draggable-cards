import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";


const Card = () => {
  return (
    <div className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      <FaFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque alias nulla voluptates?</p>


      {/* footer */}
      <div className='footer absolute bottom-0   w-full left-0 '>

        <div className='flex items-center justify-between mb-5 py-3 px-8'>
            <h5 >0.4MB</h5>
            <span className='w-6 h-6 bg-zinc-500 rounded-full flex items-center justify-center'>
            <IoMdDownload  size=".9em" color='#fff'/>
            </span>
        </div>

        <div className='tag w-full py-4 bg-green-600 flex items-center justify-center '>
            <h3 className='text-sm font-semibold'>Download Now</h3>
        </div>
      </div>





    </div>
  )
}

export default Card



// icon 
// text
// foooter--> data + tag
// 