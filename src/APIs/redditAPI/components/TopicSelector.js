import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectTopic, fetchPostsIfNeeded } from "../actions/actionCreators";

class TopicSelector extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    selectTopic: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.options = ["dankmemes"];

    this.state = {
      selected: this.options[0]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.selectTopic(this.state.selected);
    this.getPosts();
  }

  handleChange(e) {
    let selectedValue = e.target.value;

    this.setState(
      (prevState, props) => {
        return {
          selected: selectedValue
        };
      },
      () => {
        this.props.selectTopic(this.state.selected);
        this.getPosts();
      }
    );
  }

  getPosts() {
    this.props.fetchPosts(this.state.selected);
  }

  render() {
    return (
      <div>
        <h1>{this.state.selected}</h1>
        <select onChange={this.handleChange} value={this.state.selected}>
          {this.options.map((topic, index) => (
            <option value={topic} key={index}>
              {topic}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedTopic: state.selectedTopic
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      selectTopic,
      fetchPosts: fetchPostsIfNeeded
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicSelector);
