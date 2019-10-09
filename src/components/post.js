import React,{Component} from 'react';
import {store} from '../redux/store/store'

class Post extends Component {
constructor(props){
  super(props);
        this.state = {
            title: '',
            body: ''
          };
          // this.handleSubmit = this.handleSubmit.bind(this)   
        }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

handleSubmit=(e)=>{
    e.preventDefault();
    // if (this.state.title.trim() && this.state.body.trim()) {
      console.log(this.state)
      this.props.onAddPost(this.state);
      this.handleReset();

      console.log(store.getState())
    // }
  };

  handleReset = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    return (
      <div><center>
          <br></br>
          <form onSubmit={ this.handleSubmit.bind(this) }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Title"
              className="form-control"
              name="title"
              onChange={ this.handleInputChange }
              value={ this.state.title }
            />
          </div>
          <br></br>
          <div className="form-group">
            <textarea
              cols="19"
              rows="3"
              placeholder="Body"
              className="form-control"
              name="body"
              onChange={ this.handleInputChange }
              value={ this.state.body }>
            </textarea>
          </div>
          <br></br>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Post</button><br></br>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
        </center>
      </div>
    );
  }
}

export default Post;