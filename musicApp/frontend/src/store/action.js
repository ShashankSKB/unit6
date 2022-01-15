import { ADD_CHOICE, GET_ALBUMS } from "./actionTypes"

export const getAlbums=(payload)=>{

    return {
        type:GET_ALBUMS,
        payload:payload
    }
}

export const addChoice=(payload)=>{

    return {
        type:ADD_CHOICE,
        payload:payload
    }
}