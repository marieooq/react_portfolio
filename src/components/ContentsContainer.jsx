import React from 'react';
import Content from './Content';
import './ContentsContainer.css';

const ContentsContainer = props => {
  const contentLists = props.obj.map((obj, index) => {
    return (
      <Content 
        contentObj = {obj}
        key = {index}
      />
    );
  });
  return (
    <div className="contents_wrapper">
      <div className="contents-inner">{contentLists}</div>
    </div>
  );
};

export default ContentsContainer;
