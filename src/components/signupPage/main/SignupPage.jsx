"use client"
import FormButton from "@/lib/ui/FormButton";
import InputField from "@/lib/ui/InputField";
import OptionTabs from "@/lib/ui/OptionTabs";
import { Poppins } from "next/font/google";
import Image from "next/image";
import React, { useState } from 'react'
import SignupForm from "./SignupForm";
import IntroSectionAuth from "@/components/Auth/IntroSectionAuth";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
});
const SignupPage = () => {



  return (
    <div  className=' h-full w-full  text-black'> 
    {/* Parent Container */}

        <div style={{ backgroundImage: 'url(/signup.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className='flex h-full w-full '>
   <IntroSectionAuth quote={`Start Your Journey to a Stronger You`} title={`Welcome!`}/>

    
    {/* Signup form */}
    <SignupForm/>
   

        </div>
      
      
    </div>
  )
}

export default SignupPage




