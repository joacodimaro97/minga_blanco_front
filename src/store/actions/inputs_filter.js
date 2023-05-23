import { createAction } from "@reduxjs/toolkit";

const inputs_filter = createAction(
        'inputs_filter',
        (obj)=>{
             return {
                payload: {
                        title: obj.title,
                        categories :obj.categories 
                        } 
                } 
        }
)

const actions = { inputs_filter }

export default actions

//"actions" Se exporta como objeto por si en algun momento hay mas de una accion poder reutilizarla en toda la aplicacion