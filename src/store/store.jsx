import { configureStore } from "@reduxjs/toolkit";
import chapters_reducer from "./reducers/chapter_bar"

const store = configureStore({
    reducer: {
        data: chapters_reducer
    }
        
    
})

export default store