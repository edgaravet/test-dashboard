import {HIDE_MODAL, LOGOUT, SHOW_MODAL, UPDATE_USER_INFO} from "../types";


const initialState = {
    showModal:false,
    user:''
}

export const appReducer = (state = initialState,action) => {
    switch (action.type) {
        case SHOW_MODAL:

            return {
                ...state,
                showModal: true
            }


        case HIDE_MODAL:{
            return {
                ...state,
                showModal:false
            }
        }

        case UPDATE_USER_INFO:{
            return {
                ...state,
                user:action.payload
            }
        }


        case LOGOUT:{
            return {
                ...state,
                user:''
            }
        }

        default:{
            return state
        }
    }
}