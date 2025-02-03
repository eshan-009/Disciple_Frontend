"use client"
import FormButton from "@/lib/ui/FormButton";
import InputField from "@/lib/ui/InputField";
import OptionTabs from "@/lib/ui/OptionTabs";
import { Flex, Text, Button, TextField, Checkbox, SegmentedControl } from "@radix-ui/themes";
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
    <div  className='max-w-screen max-h-[100vh]  '> 
    {/* Parent Container */}
        <div style={{ backgroundImage: 'url(/loginPage.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} className='flex h-full w-full '>

   <IntroSectionAuth />

    
    {/* Signup form */}
    <LoginForm/>
   

        </div>
      
      
    </div>
  )
}

export default LoginPage




