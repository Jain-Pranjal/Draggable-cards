import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"



const Card = (props) => {
  return (
    <motion.div drag dragConstraints={props.reference} whileDrag={{scale:1.2}} dragElastic={0.2} dragSnapToOrigin={true}
    className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      <FaFileAlt />
      <p className='text-sm leading-tight mt-5 font-semibold'>{props.desc}</p>


      {/* footer */}
      <div className='footer absolute bottom-0   w-full left-0 '>

        <div className='flex items-center justify-between mb-5 py-3 px-8'>
            <h5 >{props.size}</h5>
            <span className='w-6 h-6 bg-zinc-500 rounded-full flex items-center justify-center'>
            {props.iconDisplay ?<IoMdDownload  size=".9em" color='#fff'/>:<IoCloseSharp />}
            </span>
        </div>
      

        <div className={`tag cursor-pointer w-full py-4 ${props.iconDisplay===true?"bg-green-600":"bg-red-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold '>{props.iconDisplay?props.tagtitle[1]:props.tagtitle[0]}</h3>
        </div>
      </div>





    </motion.div>
  )
}

export default Card



// icon 
// text
// foooter--> data + tag
// 

