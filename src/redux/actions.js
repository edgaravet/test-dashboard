import {HIDE_MODAL, SHOW_MODAL} from "./types";


export function showModal() {
    return{
        type:SHOW_MODAL,

    }
}


export function hideModal() {
    return{
        type:HIDE_MODAL
    }
}








