"use client"

import { Poppins } from "next/font/google";
import Image from "next/image";
import React, { useState } from 'react'
import IntroSectionAuth from "@/components/Auth/IntroSectionAuth";
import LoginForm from "./LoginForm";
const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});
const LoginPage = () => {
  return (
    <div  className='max-w-screen h-full  '> 
    {/* Parent Container */}
        <div style={{ backgroundImage: 'url(/loginPage.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className='flex h-full w-full '>

   <IntroSectionAuth title={`Welcome Back!`} quote={`Keep Pushing Towards a Stronger You!`} />

    
    {/* Signup form */}
    <LoginForm/>
   

        </div>
      
      
    </div>
  )
}

export default LoginPage




