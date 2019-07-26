import React from 'react';
import './App.css';
import './Work.css';
import Content_image1 from './img/work1.jpg';



class Work extends React.Component{
  render() {
    return (
      <div>
        <div className="container">
          <div className="content">
            <p className="content-title">Title1</p>
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

export default Work;
