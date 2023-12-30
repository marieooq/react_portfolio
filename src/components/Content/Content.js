import React from "react";
import "./Content.scss";
import { Link } from "react-router-dom";

const Content = ({ contentObj }) => {
  const generateProjectLabel = (project) => {
    return <span className="project-label">{`#${project}`}</span>;
  };

  const generateGitHubLabel = (githubLink) => {
    return (
      <a
        href={githubLink}
        alt="github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i> GitHub
      </a>
    );
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
      {contentObj.featured ? (
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
          <Link to={contentObj.url}>
            {contentObj.title}
            {generateProjectLabel(contentObj.project)}
          </Link>
        </h3>

        <div className="contents_stack_wrapper">
          <ul className="contents_stack">{stackLink}</ul>
          {contentObj.gitHub && generateGitHubLabel(contentObj.gitHub)}
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
