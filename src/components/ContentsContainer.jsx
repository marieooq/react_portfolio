import React from 'react';
import Content from './Content';
import { Link, useLocation } from 'react-router-dom';
import './ContentsContainer.css';

const ContentsContainer = (props) => {
  let location = useLocation();
  const contentLists = props.obj.map((obj, index) => {
    return <Content contentObj={obj} key={index} />;
  });
  return (
    <div className="contents_wrapper">
      <div className="contents-inner">
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
