import React from 'react';
import Header from '../Header/Header';

const Layout = ({ section, imgSrc, url, children }) => {
  return (
    <div>
      <Header section={section} imgSrc={imgSrc} url={url} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
