import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: [],
    reducers: {
        cacheResults: (state,action) => {
            state.push(action.payload)
        },
    }
})

export const {cacheResults , removeSearch} = searchSlice.actions;

export default searchSlice.reducer;