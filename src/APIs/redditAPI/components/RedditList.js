import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import styled from "styled-components";

const PostsList = styled.ul`
  opacity: ${props =>
    props.isFetching && props.posts.length >= 0 ? ".5" : "1"};
`;

const RedditList = props => {
  return props.isFetching && props.posts.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <PostsList isFetching={props.isFetching} posts={props.posts}>
      {props.posts.map((post, index) => {
        return (
          <li key={index}>
            <a href={post.data.url}>{post.data.title}</a>
          </li>
        );
      })}
    </PostsList>
  );
};

RedditList.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { selectedTopic, postsByTopic } = state;
  const { isFetching, posts } = postsByTopic[selectedTopic] || {
    isFetching: true,
    posts: []
  };

  return {
    isFetching,
    posts
  };
};

export default connect(mapStateToProps)(RedditList);
