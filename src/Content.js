import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";

class Content extends React.Component {
  render() {
    return (
      <div className="contents">
        <div className="contents_image">
          <img src={this.props.imageSrc} alt="thumbnail" />
        </div>
        <div className="contents_description">
          <h3>{this.props.myTitle}</h3>
          <p>{this.props.myDescription}</p>
          <Link to={this.props.myURL}>Find Out More</Link>
        </div>
      </div>
    );
  }
}

export default Content;
