import { createAsyncThunk } from "@reduxjs/toolkit";
import apiUrl from "../../../api";
import axios from "axios";


const author_mangas = createAsyncThunk('author_mangas', async(obj)=>{
  try {
    // let res = await axios(apiUrl+`mangas/me/${obj.id[0]?._id}`, headers)
    let token = localStorage.getItem('token')
    let headers = { headers: {"Authorization":`Bearer ${token}`}}
    let res = await axios(apiUrl+`mangas?/me/title=${obj.title}&category_id=${obj.category_id}&page=${obj.page_num}&author_id=`, headers)
      return {
        author_mangas: res.data.response
      }
  } catch (error) {
    console.log(error)
    return {
      author_mangas: []
    }
  }
})

const delete_manga = createAsyncThunk('delete_manga', async({manga_id})=>{
  try {
    let token = localStorage.getItem('token')
    let headers = {headers:{"Authorization":`Bearer ${token}`}}
    let res = await axios.delete(apiUrl + `mangas/${manga_id}`, headers)
    return {
      id_to_delete : manga_id
    }
  } catch (error) {
      return {
        mangas: []
      }
  }
})

const update_manga = createAsyncThunk('update_manga',async({ manga_id, dataUpd }) => {
  try {
    let token = localStorage.getItem('token')
    let headers = {headers:{"Authorization":`Bearer ${token}`}}
    let res = await axios.put(apiUrl+`mangas/${manga_id}`, dataUpd, headers)
    console.log(res)
    return {
      data: res.data.response
    }
  } catch (error) {
    return {
      mangas: []
    }
  }
})

const actions = { author_mangas, delete_manga, update_manga }
export default actions