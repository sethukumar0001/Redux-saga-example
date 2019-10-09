import {call,put,takeEvery,takeLatest} from 'redux-saga';
import {GET_DATA} from '../redux/actions/constants';
import {getPost} from '../redux/actions/actionCreators';
import {fetch} from './fetch'

function* getData(action){
    try{
        const data= yield call(fetch);
        yield put(getPost(data))
    }catch(e){
        console.log(e);
    }
}

export default function* mySaga(){
    yield takeLatest(GET_DATA,getData)
}