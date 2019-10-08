import {ADD_POST} from '../actions/constants';

export default function postReducer  (state=[],action){
    console.log(action)
    switch(action.type){
      
        case ADD_POST:
            return [...state,action.payload];
            default:
                return state
    }
}