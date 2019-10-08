import {sendPost} from '../redux/actions/actionCreators';
import Post from '../components/post';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch=>{
    return{
        AddPost:post=>{
            console.log(post)
            dispatch(sendPost(post))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps

)(Post);