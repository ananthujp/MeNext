"use client"
import { imgList } from '@/components/Images';
import React from 'react'

function Title({params: {pages}}) {
    const n = Math.round(Math.random() * (imgList.length - 1 - 0) + 0);
    const imgSrc = imgList[n];
  return (
    <>
    <div className="relative text-center">
        <img
          src={imgSrc}
          className="w-full h-64 object-cover filter brightness-[40%]"
          alt=""
        />
        <h1 className=" text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          {pages[pages.length-1].split('%2B').length>1?pages[pages.length-1].split('%2B')[0]+" "+pages[pages.length-1].split('%2B')[1]:pages[pages.length-1].split('%2B')}
        </h1>
        
      </div>
      
      </>
  )
}

export default Title