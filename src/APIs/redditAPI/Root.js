import React, { Component } from "react";

import TopicSelector from "./components/TopicSelector";
import Timestamp from "./components/Timestamp";
import RedditList from "./components/RedditList";

class Root extends Component {
  constructor(props) {
    super(props);

    this.refreshArticles = this.refreshArticles.bind(this);
  }

  refreshArticles() {
    this.fetchPosts(this.state.selectedTopic);
  }

  render() {
    return (
      <div>
        <TopicSelector />
        <Timestamp />
        <RedditList />
      </div>
    );
  }
}

export default Root;
