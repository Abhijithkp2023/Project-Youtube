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
        removeResults: (state ,action) => {
            state.searchResults.length = 0;
        }

    }
});
export const { toggleMenu , closeMenu , addToResults , removeResults } = appSlice.actions;
export default appSlice.reducer;