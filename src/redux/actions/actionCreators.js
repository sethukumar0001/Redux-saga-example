import {ADD_POST} from './constants';

export const sendPost =(post)=>({
    type:ADD_POST,
    payload:post
})