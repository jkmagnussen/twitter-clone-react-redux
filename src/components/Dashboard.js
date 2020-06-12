import React from "react";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3 className="center">Your Timeline</h3>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
