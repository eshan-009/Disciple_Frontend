
"use client"
import { setIsDrawerOpen } from '@/Redux/Slices/drawerSlice';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Create the context
const DrawerContext = createContext();

// DrawerProvider Component
export const DrawerProvider = ({ children }) => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch()
const  isDrawerOpen = useSelector((state) => state.Drawer.isDrawerOpen)
  const toggleDrawer = () => {
    dispatch(setIsDrawerOpen(!isDrawerOpen));
  };
  return (
    <DrawerContext.Provider value={{isDrawerOpen ,toggleDrawer}}>
      {children}
    </DrawerContext.Provider>
  );
};

// Custom Hook to use Drawer context
export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};
