import { configureStore } from "@reduxjs/toolkit";
import save_author from "../store/reducers/save_author"

const store = configureStore({
    reducer: {
        save_author: save_author,
    },
    
})

export default store