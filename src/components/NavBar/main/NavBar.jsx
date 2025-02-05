"use client"
import { useDrawer } from '@/context/DrawerContext'
import { setIsDrawerOpen } from '@/Redux/Slices/drawerSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const NavBar = () => {
  const dispatch = useDispatch()
  const  isDrawerOpen = useSelector((state) => state.Drawer.isDrawerOpen)
  console.log(isDrawerOpen)
  return (
    <div className='h-[10vh]  bg-white flex items-center max-sm:px-6 px-16 justify-between'>
    <p className='text-[#E93D82] text-4xl bg-black p-2 bg-opacity-15 underline rounded-xl'>Disciple</p>
<input
placeholder='Search'
className='border max-sm:hidden w-[30%] p-2 rounded-xl border-[#E93D82] outline-[#E93D82]'
/>
  <div className='flex space-x-4'>
  <button><Image alt='notifications' src={`/messages.svg`} height={20} width={20}/></button>
    <button><Image alt='notifications' src={`/notifications.svg`} height={20} width={20}/></button>
    <button onClick={()=>{
      dispatch(setIsDrawerOpen(!isDrawerOpen))}}><Image src={`/profile.svg`} alt='Profile' height={40} width={40}/></button>
  </div>
  </div>
  )
}

export default NavBar
