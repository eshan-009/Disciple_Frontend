import React from 'react'
import { Poppins } from "next/font/google";
const poppins = Poppins({
    weight: ['400', '600'],
    subsets: ['latin'],
    display: 'swap',
  });
const IntroSectionAuth = () => {
  return (
    <div className='min-w-[60%] h-[100vh] max-md:hidden   flex flex-col items-start justify-between p-20   '>
    <div className={`${poppins.className} text-[#E93D82] text-8xl  p-5 bg-opacity-45 rounded-xl underline bg-white`}>Disciple</div>

<div className=" text-white font-bold flex items-end">

<p className={`${poppins.className} p-1 text-4xl`}>Start Your Journey to a Stronger You</p>
</div>

    </div>
  )
}

export default IntroSectionAuth
