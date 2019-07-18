import React from 'react';
import Content_image1 from './img/host_family.png';
import Content_image2 from './img/host_family.png';
import Content_image3 from './img/host_family.png';
import './Contents.css';
import Work1 from './Work1';
import Work2 from './Work2';
import Work3 from './Work3';
import { Link } from 'react-router-dom'


class Contents extends React.Component{
  render(){
    const photos = [{Content_image1}, {Content_image2},  {Content_image3}];
    return(
      <div className="contents_wrapper">
        <div className="contents">
          <div className="contents_image">
            <img src= {Content_image1}/>
          </div>
          <div className="contents_description">
            <Description myTitle={contentsObj[0].title} myDescription={contentsObj[0].description} myURL={contentsObj[0].url}/>
          </div>
        </div>

        <div className="contents">
          <div className="contents_image">
            <img src= {Content_image2}/>
          </div>
          <div className="contents_description">
            <Description myTitle={contentsObj[1].title} myDescription={contentsObj[1].description} myURL={contentsObj[1].url}/>
        </div>
        </div>

        <div className="contents">
          <div className="contents_image">
            <img src= {Content_image3}/>
          </div>
          <div className="contents_description">
            <Description myTitle={contentsObj[2].title} myDescription={contentsObj[2].description} myURL={contentsObj[2].url}/>
          </div>
        </div>
      </div>

    );
  }
}

const contentsObj = [
  {
    title: 'Title1',
    description: 'Exploride is a head-up display for cars, which allows users to access music, maps, calls and texts through its transparent display, as well as gesture and hands-free voice controls.',
    url: '/work1'
  },
  {
    title: 'Title2',
    description: 'Exploride is a head-up display for cars, which allows users to access music, maps, calls and texts through its transparent display, as well as gesture and hands-free voice controls.',
    url: '/work2'
  }, 
  {
    title: 'Title3',
    description: 'Exploride is a head-up display for cars, which allows users to access music, maps, calls and texts through its transparent display, as well as gesture and hands-free voice controls.',
    url: '/work3'
  } 
];

class Description extends React.Component{
  render(){
      return (
        <div>
          <h3>{this.props.myTitle}</h3>
          <p>{this.props.myDescription}</p>
          <Link to={this.props.myURL}>Find Out More</Link>
        </div>
        
      );
  
    }
}



export default Contents;