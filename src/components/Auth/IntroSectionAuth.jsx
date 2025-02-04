import React from 'react'
import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ['400', '600'],
    subsets: ['latin'],
    display: 'swap',
  });
const IntroSectionAuth = ({title,quote}) => {
  return (
    <div className='min-w-[60%] h-full max-md:hidden   flex flex-col items-start justify-between p-20   '>
    <div className={`${poppins.className} text-[#E93D82] text-8xl  p-5 underline  rounded-xl`}>{title}</div>

<div className=" text-white font-bold flex items-end">

<p className={`${poppins.className} p-1 text-4xl`}>{quote}</p>
</div>

    </div>
  )
}

export default IntroSectionAuth
