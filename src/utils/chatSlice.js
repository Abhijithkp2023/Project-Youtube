import { createSlice } from "@reduxjs/toolkit";
import {LIVE_CHAT_COUNT} from "../utils/constants"

const chatSlice = createSlice({
    name: "chat" ,
    initialState: {
        messages: [],
    },
    reducers: {
        addMessages:(state, action) => {
            state.messages.push(action.payload);
            if(state.messages.length > LIVE_CHAT_COUNT ){
                state.messages.shift();
            }
        }
    }
})

export const { addMessages} = chatSlice.actions;

export default chatSlice.reducer;