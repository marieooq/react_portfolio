import React from 'react';
import Header from './Header';
// import Style from './Layout.module.scss';

const Layout = ({ section, imgSrc, url, children }) => {
  return (
    <div>
      <Header section={section} imgSrc={imgSrc} url={url} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
