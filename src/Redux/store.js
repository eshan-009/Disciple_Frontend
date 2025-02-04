import { configureStore } from '@reduxjs/toolkit'
import DrawerReducer from './Slices/drawerSlice'

export const store = configureStore({
  reducer: {
    Drawer : DrawerReducer
  },
})