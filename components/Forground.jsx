"use client"
import React, { useRef } from 'react'
import Card from './Card'
import { useState } from 'react'
const Forground = () => {
    const ref=useRef(null)

    const data=[
        {desc:"lorem ipsum dolor sit amet",size:"3.4MB",close:false,tag:{isOpen:false,tagtitle:["Close","Download Now"]}},
        {desc:"lorem ipsum dolor sit amet",size:"6.4MB",close:true,tag:{isOpen:false,tagtitle:["Close","Download Now"]}},
        {desc:"lorem ipsum dolor sit amet",size:"44.4MB",close:true,tag:{isOpen:false,tagtitle:["Close","Download Now"]}},
        {desc:"lorem ipsum dolor sit amet",size:"1.1MB",close:true,tag:{isOpen:false,tagtitle:["Close","Download Now"]}},
        {desc:"lorem ipsum dolor sit amet",size:"44.4MB",close:false,tag:{isOpen:false,tagtitle:["Close","Download Now"]}},
        {desc:"lorem ipsum dolor sit amet",size:"23.4MB",close:true,tag:{isOpen:false,tagtitle:["Close","Download Now"]}},
    ]
  return (
      <div className="fixed z-[2]  top-0 left-0  w-full h-full flex gap-10 flex-wrap flex-shrink-0 p-5 " ref={ref}>
        {data.map((item,index)=><Card key={index} desc={item.desc} size={item.size} iconDisplay={item.close} tagtitle={item.tag.tagtitle} reference={ref}/>)  }
      </div>
  )
}

export default Forground

// the foreground contains the card 