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
    <div className='h-[10vh]  bg-white flex items-center px-6 justify-between'>
    <p className='text-[#E93D82] text-4xl bg-black p-2 bg-opacity-15 underline rounded-xl'>Disciple</p>
    <button onClick={()=>{
      dispatch(setIsDrawerOpen(!isDrawerOpen))}}><Image src={`/profile.svg`} alt='Profile' height={40} width={40}/></button>
  </div>
  )
}

export default NavBar
