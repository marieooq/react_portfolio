import React from 'react';
import Content_image1 from './img/react_note.png';
import Content_image2 from './img/host_family.png';
import './Contents.css';
import { Link } from 'react-router-dom'


class Contents extends React.Component{
  render(){
    const photos = [{Content_image1}, {Content_image2}];
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
      </div>

    );
  }
}

const contentsObj = [
  {
    title: 'React based To-Do List',
    description: 'This is a simple to Do List using React.js and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ',
    url: '/work1'
  },
  {
    title: 'Illustration',
    description: 'The illustration is drawn using illustrator. I drew it to express my gratitude.  I traced a picture of the family that host father keep it affectionately. Using the same tone of colors enables it looks organized. The yellow used in background color expresses the brightness they have.',
    url: '/work2'
  }, 
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