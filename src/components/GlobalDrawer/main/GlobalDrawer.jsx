// components/ClientDrawer.js
'use client'; // Mark this as a client-side component

import Drawer from '@/components/Drawer/main/Drawer';
import { DrawerProvider } from '@/context/DrawerContext';
import React from 'react';



const GlobalDrawer = () => {
  return (
    <DrawerProvider>
       <Drawer />
    </DrawerProvider>
  );
};

export default GlobalDrawer;
