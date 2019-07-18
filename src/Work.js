import React from 'react';
import './App.css';
import './Work.css';
import Content_image1 from './img/work1.jpg';


const myStyles = {
  backgroundImage : `url(${Content_image1})`,
  height: '100vh',
  backgroundSize: 'cover'
}

class Work extends React.Component{
  render() {
    return (
      <div>
        <div className="mainImage" style={myStyles}></div>
        <div className="work_description">
          <h2 className="work_title">Title1</h2>
          <p className="work_detail">
          Floweraura.com is an online flower & cakes store that delivers flowers, cakes and many other great gifts all over India and I got the opportunity to re-design their Desktop and Mobile website.
          Powered by a strong affiliate network and channel stores, Floweraura is ready to offer its gifts in more than 180 cities across India.
          Floweraura.com is an online flower & cakes store that delivers flowers, cakes and many other great gifts all over India and I got the opportunity to re-design their Desktop and Mobile website.
          Powered by a strong affiliate network and channel stores, Floweraura is ready to offer its gifts in more than 180 cities across India.
          </p>
          <div className="work_skills">
            <ul className="tags">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
