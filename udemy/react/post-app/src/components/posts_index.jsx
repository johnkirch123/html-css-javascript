import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions/action_index";
import _ from "lodash";

class PostsIndex extends Component {
  constructor(props) {
    super(props);
    console.log("init constructor()");
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
    console.log(`componentDidMount(): ${this.state.counter}`);
    this.setState({ counter: this.state.counter++ });
  }

  renderPosts() {
    console.log(`renderPosts(): ${this.state.counter}`);
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    this.state.counter++;
    console.log("render(): ", this.state.counter);
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("init mapStateToProps()");
  const posts = { posts: state.posts };
  console.log("Post Object: ", posts);
  return posts;
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
