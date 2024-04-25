import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice ({
    name: "app",
    initialState : {
        isMenuOpen : false,
        searchResults:[],
    },
    reducers : {
        toggleMenu : (state,action) => {
            state.isMenuOpen = !state.isMenuOpen; 
        },
        closeMenu : ((state, action) => {
            state.isMenuOpen = false;
        }),
        addToResults: (state ,action) => {
            state.searchResults.push(action.payload);
        },

    }
});
export const { toggleMenu , closeMenu , addToResults } = appSlice.actions;
export default appSlice.reducer;