'use client'; // Ensures this is a client-side component
import { AnimatePresence, motion } from 'framer-motion'; // Ensure correct imports
import React, { useEffect, useRef } from 'react';
import { useDrawer } from '@/context/DrawerContext';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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
    <div className="flex">
      {/* Overlay with animation */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            key="overlay"
            className="bg-black opacity-35 fixed h-full w-full z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Drawer container with sliding animation */}
  
   {
        <motion.div
       ref={drawerRef}
       className={`bg-white border max-sm:absolute h-full text-white p-4 z-50`}
       initial={{ width: '5rem' }}
       animate={{ width: isDrawerOpen ? '20rem' : '5rem' }}
       transition={{ type: 'spring', stiffness: 300, damping: 25 }}
     >
       {/* Menu icon when the drawer is closed */}
       {!isDrawerOpen && (
         <div className="flex justify-center">
           <Image
             onClick={toggleDrawer}
             className="cursor-pointer"
             alt="Menu"
             src="/menu.svg"
             height={25}
             width={25}
           />
         </div>
       )}

       {/* Close icon when the drawer is open */}
       {isDrawerOpen && (
         <div className="flex justify-end">
           <Image
             onClick={toggleDrawer}
             className="cursor-pointer"
             alt="Close"
             src="/crossIcon.svg"
             height={25}
             width={25}
           />
         </div>
       )}

       {/* Drawer content */}
{isDrawerOpen && <h2 className="cursor-pointer rounded-lg p-2 hover:bg-[#e93d823f] text-xl font-bold text-[#E93D82] ">DashBoard</h2>}

{isDrawerOpen && ["Workout Plan","Diet Plan","Exercise Library","Chat with Instructor","Subscription & Payments"]
.map((item,index)=>(<div key={index} className=" cursor-pointer rounded-lg p-2 hover:bg-[#e93d823f] text-xl text-gray-500 ">{item}</div>))}

       {/* {isDrawerOpen && <h2 className="text-xl text-[#E93D82]">DashBoard</h2>}
       {isDrawerOpen && <p className="text-[#E93D82]">My DashBoard</p>}
       {isDrawerOpen && <p className="text-[#E93D82]">History</p>}
       {isDrawerOpen && <p className="text-[#E93D82]">More content goes here</p>} */}
     </motion.div>
   }
    </div>
  );
};

export default Drawer;
