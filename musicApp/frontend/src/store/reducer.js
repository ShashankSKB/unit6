import { ADD_CHOICE, GET_ALBUMS } from "./actionTypes"

const initState={
    loading:true,
    albums:[],
    currentAlbum:null,
    

}


export const reducer= (state=initState,actions)=>{


        switch(actions.type)
        {
            case GET_ALBUMS:{
                return {
                    ...state,
                    albums:[...actions.payload]
                }
            }

            case ADD_CHOICE:{
                return {
                    ...state,
                    currentAlbum:actions.payload
                }
            }


            default:
                return state

            
            
        }
}



