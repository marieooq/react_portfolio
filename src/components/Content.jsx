import React from 'react';
import './Content.scss';
import { Link } from 'react-router-dom';

class Content extends React.Component {
  render() {
    const stackLink = this.props.myStack.map((val, index) => {
      return <li key={index}>{`${val} /`}</li>;
    });
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
          <div className="contents_stack_wrapper">
            <ul className="contents_stack">{stackLink}</ul>
            <a
              href={this.props.myGitHub}
              alt="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
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
