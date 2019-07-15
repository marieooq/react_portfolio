import React from 'react';
import Content_image from './img/host_family.png';
import './Contents.css';

class Contents extends React.Component{
  render(){
    return(
      <div className="contents">
        <div className="contents_image">
          <img src= {Content_image}/>
        </div>
        <div className="contents_description">
          <h3>Title</h3>
          <p>Exploride is a head-up display for cars, which allows users to access music, maps, calls and texts through its transparent display, as well as gesture and hands-free voice controls.</p>
          <a href="#">Find Out More</a>
        </div>
      </div>
    );
  }
};



export default Contents;