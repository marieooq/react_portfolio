import React from 'react';
import Content from './Content';
import './ContentsContainer.css';

const ContentsContainer = props => {
  const contentLists = props.obj.map((obj, index) => {
    return (
      <Content
        imageSrc={obj.image}
        myTitle={obj.title}
        myStack={obj.stack}
        myGitHub={obj.gitHub}
        myDescription={obj.description}
        myURL={obj.url}
        key={index}
        project={obj.project}
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
