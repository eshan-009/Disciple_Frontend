'use client'; // Ensures this is a client-side component

import React, { useEffect, useRef, useState } from 'react';
import { useDrawer } from '@/context/DrawerContext';

const Drawer = () => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();
  const drawerRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
    
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        toggleDrawer(); 
      }
    };

    if (isDrawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDrawerOpen, toggleDrawer]);



  return (
    <div>
{isDrawerOpen && <div className=' bg-[#ea7aa71e]  fixed h-full w-full z-50'></div>}
      {isDrawerOpen && (
        <div
          ref={drawerRef} // Assign the ref to the drawer container
          className={`fixed right-0 top-0  w-[25vw] h-full bg-white  border  text-white p-4 z-50`}
        >
          <h2 className="text-xl text-[#E93D82]">Drawer Content</h2>
          <p className='text-[#E93D82]'>My DashBoard</p>
          <p className='text-[#E93D82]'>History</p>
          <p className='text-[#E93D82]'>More content goes here</p>

   
        </div>
      ) }
    </div>
  );
};

export default Drawer;
