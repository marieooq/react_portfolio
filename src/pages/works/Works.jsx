import React from 'react';
import Header from '../../components/Header';
import worksImage from '../../img/works.png';
import './Works.css';
import ContentsContainer from '../../components/ContentsContainer';
import WorksList from '../../setting/WorksList'

class Works extends React.Component {
  render() {
    return (
      <div className="works-wrapper">
        <Header section="about" imgSrc={worksImage} />
        <ContentsContainer obj={WorksList} />
      </div>
    );
  }
}

export default Works;
