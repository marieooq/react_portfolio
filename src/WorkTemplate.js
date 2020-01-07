import React from "react";
import "./App.css";
import "./WorkTemplate.scss";

class WorkTemplate extends React.Component {
  render() {
    return (
      <div className="work-template">
        <div className="work-inner">
          <h1 className="work_title">{this.props.title}</h1>
          <p className="work-subTitle">{this.props.subTitle}</p>
          <p className="work-description">{this.props.description}</p>

          <div className="work_skills">
            <ul className="tags">{this.props.tags}</ul>
          </div>

          <h2 className="headline">How it works</h2>
          <p className="headline-content">{this.props.howItWorksDescription}</p>

          <h2 className="headline">The most deifficult part</h2>
          <p className="headline-content">
            {this.props.difficultPartDescription}
          </p>

          <h2 className="headline">How to solve the problems</h2>
          <p className="headline-content">
            {this.props.problemSolvingDescription}
          </p>

          <h2 className="headline">Links</h2>
          <ul className="work_links">{this.props.relatedWebsitesLists}</ul>
        </div>
      </div>
    );
  }
}

export default WorkTemplate;
