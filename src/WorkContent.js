import React from 'react';
import './App.css';
import './WorkContent.css';
import Content_image1 from './img/work1.jpg';



class WorkContent extends React.Component{
  render() {
    return (
      <div>
        <div className="container">
          <div className="content">
            <p className="content-title">props.title</p>
            <a href="#">
              < img className="content-img" src={Content_image1}></img>
            </a>
          </div>
          <div className="content">
            <p className="content-title">Title2</p>
            <a href="#">
              < img className="content-img" src={Content_image1}></img>
            </a>
          </div>
          <div className="content">
            <p className="content-title">Title3</p>
            <a href="#">
              < img className="content-img" src={Content_image1}></img>
            </a>
          </div>
          <div className="content">
            <p className="content-title">Title4</p>
            <a href="#">
              < img className="content-img" src={Content_image1}></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkContent;
