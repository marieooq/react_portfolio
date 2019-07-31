import React from 'react';
import './App.css';
import './WorkTemplate.css';
import Content_image1 from './img/work1.jpg';

const tags = ['HTML', 'CSS', 'JavaScript', 'React'];

const tagList = tags.map((elm) =>{
  return <li>{elm}</li>;
});


class WorkTemplate extends React.Component{
  render() {
    return (
      <div>
        <div className="mainImage">
          <img src={Content_image1}></img>
        </div>
        <div className="work_description">
          <h2 className="work_title">{this.props.title}</h2>
          <p className="work_detail">{this.props.description}</p>
          <div className="work_skills">
            <ul className="tags">
              {tagList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkTemplate;
