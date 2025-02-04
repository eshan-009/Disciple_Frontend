

const { createSlice } = require("@reduxjs/toolkit");

export const DrawerSlice = createSlice({
    name : "Drawer",
    initialState : {isDrawerOpen : false},
    reducers : {
        setIsDrawerOpen : (state,action)=>{
            state.isDrawerOpen = action.payload
        }
    }
})

export const {setIsDrawerOpen} = DrawerSlice.actions
export default DrawerSlice.reducer