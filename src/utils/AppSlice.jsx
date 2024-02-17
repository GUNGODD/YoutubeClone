import { createSlice } from '@reduxjs/toolkit';

const initialState = createSlice({
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

export const { toggleSidebar } = initialState.actions;
export default initialState.reducers