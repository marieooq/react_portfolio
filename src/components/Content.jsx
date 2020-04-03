import React from 'react';
import './Content.scss';
import { Link } from 'react-router-dom';

const arr = ['React', 'Redux', 'Sass'];
const stackLink = arr.map((val, index) => {
  return <li key={index}>{val}</li>;
});

class Content extends React.Component {
  render() {
    return (
      <div className="contents">
        <div className="contents_image">
          <Link to={this.props.myURL}>
            <img src={this.props.imageSrc} alt="thumbnail" />
          </Link>
        </div>
        <div className="contents_description">
          <h3>
            <Link to={this.props.myURL}>{this.props.myTitle}</Link>
          </h3>
          <ul className="contents_stack">{stackLink}</ul>
          <p>{this.props.myDescription}</p>
          <Link to={this.props.myURL} className="contents-detail">
            Find Out More
          </Link>
        </div>
      </div>
    );
  }
}

export default Content;
