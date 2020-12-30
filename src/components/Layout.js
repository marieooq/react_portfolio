import React from 'react';
import Header from './Header';
// import Style from './Layout.module.scss';

const Layout = ({ section, imgSrc, children }) => {
  return (
    <div>
      <Header section={section} imgSrc={imgSrc} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
