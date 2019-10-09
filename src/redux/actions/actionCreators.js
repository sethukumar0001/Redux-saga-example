import {ADD_POST,GET_DATA} from './constants';

export const sendPost =(post)=>({
    type:ADD_POST,
    payload:post
})

export const getPost = ()=>({
type:GET_DATA
})