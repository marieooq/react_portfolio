import React from 'react';
import './WorkTemplate.scss';

const CompanyWorkTemplate = props => {
  const cnvertHtml = () => {
    let div = document.createElement('div');
    div.innerHTML = props.difficultPartDescription;
    return div;
  };

  cnvertHtml();

  return (
    <div className="work-template">
      <div className="work-inner">
        <h1 className="work_title">{props.title}</h1>
        <p className="work-description">{props.description}</p>

        <div className="work_skills">
          <ul className="tags">{props.tags}</ul>
        </div>

        <h2 className="headline">{props.headline}</h2>

        <p className="headline-content">
            {props.achievementDescription}
        </p>

        <div className="content-images">{props.contentImage}</div>

       
        <h2 className="headline">Links</h2>
        <ul className="work_links">{props.relatedWebsitesLists}</ul>
      </div>
    </div>
  );
};

export default CompanyWorkTemplate;
