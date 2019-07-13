import React, { Component } from "react";
import "../css/Error404.css";

class Error404 extends Component {
  render() {
    return (
      <React.Fragment>
        {/* https://codepen.io/ricardpriet/pen/qVZxNo */}
        <section className="error-container">
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
          <span className="zero">
            <span className="screen-reader-text">0</span>
          </span>
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
        </section>
        <p className="zoom-area">
          <b>Page Not Found</b>
        </p>
        <div className="link-container">
          <a href="/" className="more-link">
            Back Home
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Error404;
