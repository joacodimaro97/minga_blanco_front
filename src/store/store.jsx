import { configureStore } from "@reduxjs/toolkit";
import chapters_reducer from "./reducers/chapter_bar"
import inputs_reducer from './reducers/inputs_filter.js'
import save_author from "./reducers/save_author"
import author_mangas from './reducers/author_mangas'

const store = configureStore({
    reducer: {
        data: chapters_reducer,
        inputs: inputs_reducer,
        save_author: save_author,
        author_mangas: author_mangas
    }
})

export default store