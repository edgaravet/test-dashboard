import {HIDE_MODAL, LOGOUT, SHOW_MODAL, UPDATE_USER_INFO} from "./types";
import {getUserInfoUrl} from "../config";

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

export function getUserData() {

    return async dispatch => {
        const userId = Math.floor(Math.random() * 6);
        const response = await fetch(getUserInfoUrl)
        const json = await response.json();

       dispatch({
           type:UPDATE_USER_INFO,
           payload:json.data[userId]
       })
    }
}

export function logOut(){
    return{
        type:LOGOUT
    }
}








