import React from 'react';
import {connect} from 'react-redux';
import {getPost} from '../redux/actions/actionCreators';


class Display extends React.Component{
  componentDidMount(){
    // this.props.getPost();
  }

  person = (x, i) =>
  <div>
    <h1>
      {x.name.name}
    </h1>
  </div>;
  render(){
    // const {data =[]}= this.props.data
    // return data.length?<h1>{data.map(this.person)}</h1>:<h1>Loading....</h1>
    return(
      <div>Hello...</div>
    )
  }
}
 const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch1: () => {
      dispatch({getPost})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Display);