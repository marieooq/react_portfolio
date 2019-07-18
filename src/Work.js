import React from 'react';
import './App.css';
import './Work.css';
import Content_image1 from './img/host_family.png';
import Content_image2 from './img/host_family.png';
import Content_image3 from './img/host_family.png';


class Work extends React.Component{
  render() {
    return (
      <div>
        <img src={Content_image1}/>
      </div>
    );
  }
}

export default Work;
