import React from 'react';
import Content from './Content';
import { Link, useLocation } from 'react-router-dom';
import './ContentsContainer.css';
import SimpleSelect from './SimpleSelect';

const ContentsContainer = (props) => {
  let location = useLocation();

  const returnFilteredObject = (filteringWord, projectArray) => {
    if (filteringWord === 'all') {
      return projectArray;
    } else {
      const filteredObj = projectArray.filter(
        (val) => val.project === filteringWord
      );
      return filteredObj;
    }
  };

  const filteredObj = returnFilteredObject(props.project, props.obj);

  const contentLists = filteredObj.map((obj, index) => {
    return <Content contentObj={obj} key={index} />;
  });
  return (
    <div className="contents_wrapper">
      <div className="contents-inner">
        <SimpleSelect
          project={props.project}
          handleChange={props.handleChange}
        />
        {contentLists}
        {location.pathname === '/' ? (
          <div className="view_more">
            <Link to="/works">View more works</Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ContentsContainer;
