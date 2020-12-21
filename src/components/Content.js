import React from 'react';
import './Content.scss';
import { Link, useLocation } from 'react-router-dom';

const Content = ({ contentObj }) => {
  let location = useLocation();

  const generateGitHubLabel = (project) => {
    if (project === 'personal') {
      return (
        <a
          href={contentObj.gitHub}
          alt="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
      );
    }
  };

  const stackLink = contentObj.stack.map((val, index) => {
    if (index < contentObj.stack.length - 1) {
      return <li key={index}>{`${val} /`}</li>;
    } else {
      return <li key={index}>{`${val}`}</li>;
    }
  });
  return (
    <div className="contents">
      {contentObj.featured && location.pathname === '/' ? (
        <div className="contents_image">
          <span className="feature_lalbel">Featured</span>
          <Link to={contentObj.url}>
            <img src={contentObj.image} alt="thumbnail" />
          </Link>
        </div>
      ) : (
        <div className="contents_image">
          <Link to={contentObj.url}>
            <img src={contentObj.image} alt="thumbnail" />
          </Link>
        </div>
      )}

      <div className="contents_description">
        <h3>
          <Link to={contentObj.url}>{contentObj.title}</Link>
        </h3>
        <div className="contents_stack_wrapper">
          <ul className="contents_stack">{stackLink}</ul>
          {generateGitHubLabel(contentObj.project)}
        </div>
        <p>{contentObj.description}</p>
        <Link to={contentObj.url} className="contents-detail">
          Find Out More
        </Link>
      </div>
    </div>
  );
};

export default Content;
