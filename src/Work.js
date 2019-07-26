import React from 'react';
import './App.css';
import './Work.css';
import Content_image1 from './img/work1.jpg';
import { Link } from 'react-router-dom'

class Work extends React.Component{
  render() {
    const sections = {title1: '/work1', title2: '/work2', title3: '/work3', title4: '/work4'};
    
    const navLinks = Object.keys(sections).map(keyName => {
      return (
        <li><Link to={sections[keyName]}>{keyName}</Link></li>
      )
    }); 

    return (
      <div className="container">
        <WorkContent myTitle="Title1" myURL="#"/>
        <WorkContent myTitle="Title2" myURL="#"/>
        <WorkContent myTitle="Title3" myURL="#"/>
        <WorkContent myTitle="Title4" myURL="#"/>
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
