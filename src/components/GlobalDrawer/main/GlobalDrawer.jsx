// components/ClientDrawer.js
'use client'; // Mark this as a client-side component

import Drawer from '@/components/Drawer/main/Drawer';
import { DrawerProvider } from '@/context/DrawerContext';
import { usePathname } from 'next/navigation';

import React from 'react';



const GlobalDrawer = () => {
    const     pathname = usePathname()
  return (
    <DrawerProvider>
 {     !(pathname.includes("/signup") || pathname.includes("/login")) &&   <Drawer />}
    </DrawerProvider>
  );
};

export default GlobalDrawer;
