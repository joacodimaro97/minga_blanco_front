import { configureStore } from "@reduxjs/toolkit";
import chapters_reducer from "./reducers/chapter_bar"
import inputs_reducer from './reducers/inputs_filter.js'

const store = configureStore({
    reducer: {
        data: chapters_reducer,
        inputs: inputs_reducer
    }
  
export default store