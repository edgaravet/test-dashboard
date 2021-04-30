import {HIDE_MODAL, SHOW_MODAL} from "../types";


const initialState = {
    showModal:false
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

        default:{
            return state
        }
    }
}