import React from 'react';
import './App.css';
import './WorkTemplate.css';

class WorkTemplate extends React.Component{
  render() {
    return (
      <div>
        <div className="mainImage">
          <img src={this.props.img}></img>
        </div>
        <div className="work_description">
          <h2 className="work_title">{this.props.title}</h2>
          <p className="work_detail">{this.props.description}</p>
          <div className="work_links"> 
            <a href={this.props.url} target="_blank">{this.props.url_title}</a>
          </div>
          <div className="work_skills">
            <ul className="tags">
              {this.props.tags}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkTemplate;
