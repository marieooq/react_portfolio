import React from 'react';
import './App.css';
import WorkTemplate from './WorkTemplate';
import Content_image2 from './img/host_family.png';

const tags = ['illustrator'];

const tagList = tags.map((elm) =>{
  return <li>{elm}</li>;
});

class Work2 extends React.Component{
  render() {
    return (
      <div>
          <WorkTemplate img={Content_image2} title="Illustration" description="The illustration is drawn using illustrator. I drew it to express my gratitude. 
 I traced a picture of the family that host father keep it affectionately. Using the same tone of colors enables it looks organized. The yellow used in background color expresses the brightness they have." 
          tags={tagList}/>

      </div>
    );
  }
}

export default Work2;
