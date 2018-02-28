import React, { Component } from "react";
import PropTypes from "prop-types";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import styled from "styled-components";
import { distanceInWords } from "date-fns";

import { invalidateTopic, fetchPostsIfNeeded } from "../actions/actionCreators";

class Timestamp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: Date.now()
    };

    this.timerId = null;
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerId = this.tick();
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleClick() {
    this.props.refreshArticles(this.props.selectedTopic);
    this.props.fetchPostsIfNeeded(this.props.selectedTopic);
  }

  tick() {
    window.setInterval(() => {
      this.setState((prevState, props) => {
        return {
          time: Date.now()
        };
      });
    }, 2000);
  }

  render() {
    const LastUpdated = styled.div`
      display: inline-block;
      margin: 5px 0;
    `;

    const Refresh = styled.div`
      display: inline-block;
      margin: 5px 20px;
      cursor: pointer;
      color: blue;
      text-decoration: underline;
    `;

    let difference = distanceInWords(
      this.state.time,
      this.props.timestampFetched,
      {
        includeSeconds: true,
        addSuffix: true
      }
    );

    return (
      <div>
        <LastUpdated>
          Last Updated: {this.props.timestampFetched ? difference : "0 seconds"}
        </LastUpdated>
        <Refresh onClick={this.handleClick}>Refresh</Refresh>
      </div>
    );
  }
}

Timestamp.propTypes = {
  timestampFetched: PropTypes.number,
  refreshArticles: PropTypes.func.isRequired,
  fetchPostsIfNeeded: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      refreshArticles: invalidateTopic,
      fetchPostsIfNeeded
    },
    dispatch
  );
};

const mapStateToProps = (state, ownProps) => {
  const { selectedTopic, postsByTopic } = state;
  const { timestampFetched } = postsByTopic[selectedTopic] || {};

  return {
    selectedTopic,
    timestampFetched
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timestamp);
