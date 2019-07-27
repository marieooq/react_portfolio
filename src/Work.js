import React from 'react';
import './App.css';
import './Work.css';
import Content_image1 from './img/host_family.png';
import { Link } from 'react-router-dom'

class Work extends React.Component{
  render() {
    const sections = {title1: '/work1', title2: '/work2', title3: '/work3', title4: '/work4'};

    return (
      <div className="container">
        <WorkContent myTitle="Title1" myURL={sections.title1}/>
        <WorkContent myTitle="Title2" myURL={sections.title2}/>
        <WorkContent myTitle="Title3" myURL={sections.title3}/>
        <WorkContent myTitle="Title4" myURL={sections.title4}/>
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
            < img className="content-img" src={Content_image1}></img>
          </Link>
        </div>
    );
  }
}

export default Work;
