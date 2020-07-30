import React, { Component } from 'react';
import axios from 'axios';
import AddPost from './AddPost';

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      loading: true,
    };
    this.loadPost = this.loadPost.bind(this);
  }
  componentDidMount() {
    this.loadPost();
  }

  loadPost() {
    //cambia el estado del loading
    this.setState({ loading: true });

    axios.get('https://jsonplaceholder.typicode.com/posts').then((reponse) => {
      this.setState({
        posts: reponse.data,
        loading: false,
      });
    });
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          <h1>Posts Lists</h1>
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="loading"
          />
        </div>
      );
    }
    const postlist = this.state.posts.map((ele, i) => {
      return (
        <div key={ele.title}>
          <h1>{ele.title}</h1>
          <p>{ele.body}</p>
        </div>
      );
    });
    return (
      <div>
        <AddPost />
        <h1>Posts Lists</h1>
        <button onClick={this.loadPosts}>Reload Posts</button>
        {postlist}
      </div>
    );
  }
}

export default PostList;
