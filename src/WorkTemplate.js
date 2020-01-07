import React from "react";
import "./App.css";
import "./WorkTemplate.css";

class WorkTemplate extends React.Component {
  render() {
    return (
      <div className="work-template">
        <div className="work-inner">
          <h1 className="work_title">{this.props.title}</h1>
          <p className="work-subTitle">{this.props.subTitle}</p>

          <p className="work-description">{this.props.description}</p>
          <div className="work_links">
            <a href={this.props.url} target="_blank" rel="noopener noreferrer">
              {this.props.url_title}
            </a>
          </div>
          <div className="work_skills">
            <ul className="tags">{this.props.tags}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkTemplate;
