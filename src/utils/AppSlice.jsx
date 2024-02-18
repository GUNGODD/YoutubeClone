import { createSlice } from '@reduxjs/toolkit';

const AppSlice  = createSlice({
      name: "app",
      intitialState: {
            open: true,

      },
      reducers: {
            toggleSidebar: (state) => {
                  state.open = !state.open;
            }

      }
}); 

export const { toggleSidebar } = AppSlice.actions;
export default AppSlice.reducers