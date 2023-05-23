import { createReducer } from "@reduxjs/toolkit";
import actions from '../actions/author_mangas.js'
const { author_mangas, delete_manga, update_manga } = actions

let initialState = {
  author_mangas: []
}

const reducer = createReducer(
    initialState,
    (builder) => builder
      .addCase(
        author_mangas.fulfilled,
        (state,action) => {
          let newState = {
            ...state,
            author_mangas: action.payload.author_mangas
          }
          return newState
        }
      )
      .addCase(
        delete_manga.fulfilled,
        (state,action) => {
          let newState = {
            ...state,
            author_mangas: state.author_mangas.filter(manga => manga._id !== action.payload.id_to_delete)
          }
          return newState
        }
      )
      .addCase(
        update_manga.fulfilled,
        (state,action) => {
          let newState = {
            ...state,
            author_mangas: state.author_mangas.map(i => {
              if(i._id === action.payload.data._id){
                return action.payload.data
              } else {
                return i
              }
            })
          }
          return newState
        }
      )
)

export default reducer