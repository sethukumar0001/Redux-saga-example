import { connect } from 'react-redux';
import { sendPost } from '../redux/actions/actionCreators';
import Posts from '../components/post';

const mapDispatchToProps = dispatch => {
  console.log("hiii")
  return {
    AddPost: post => {
      dispatch(sendPost(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Posts);