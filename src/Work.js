import React from 'react';
import './App.css';
import './Work.css';
import Content_image1 from './img/host_family.png';
import Content_image2 from './img/react_note.png';
import { Link } from 'react-router-dom'

class Work extends React.Component{
  render() {
    const sections = {title1: '/work1', title2: '/work2'};

    return (
      <div className="container">
        <WorkContent myTitle="React based To-Do List" myURL={sections.title1} myImg={Content_image1}/>
        <WorkContent myTitle="Illustration" myURL={sections.title2} myImg={Content_image2}/>
      </div>
    );
  }
}

class WorkContent extends React.Component{
  render(){
    return(
        <div className="content">
          <p className="content-title">{this.props.myTitle}</p>
          <Link to={this.props.myURL}>
            < img className="content-img" src={this.props.myImg}></img>
          </Link>
        </div>
    );
  }
}

export default Work;
