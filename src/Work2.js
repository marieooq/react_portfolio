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
          <WorkTemplate img={Content_image2} title="Illustration" description="Floweraura.com is an online flower & cakes store that delivers flowers, cakes and many other great gifts all over India and I got the opportunity to re-design their Desktop and Mobile website.
          Powered by a strong affiliate network and channel stores, Floweraura is ready to offer its gifts in more than 180 cities across India.
          Floweraura.com is an online flower & cakes store that delivers flowers, cakes and many other great gifts all over India and I got the opportunity to re-design their Desktop and Mobile website.
          Powered by a strong affiliate network and channel stores, Floweraura is ready to offer its gifts in more than 180 cities across India." 
          tags={tagList}/>

      </div>
    );
  }
}

export default Work2;
