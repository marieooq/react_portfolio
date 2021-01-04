import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Layout = ({ section, imgSrc, url, children }) => {
  return (
    <div>
      <Navigation />
      <Header section={section} imgSrc={imgSrc} url={url} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
