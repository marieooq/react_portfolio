import React from 'react';
import Background from './img/header.jpg';
import './Header.css';
// import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom'


class Header extends React.Component{
  render(){
    return(
      <header>
      <div className="main-img">
        <img src={Background} alt="main-image"></img>
      </div>
      <div className="introduction">
        <div className="introduction-inner">
          <p>Hi, there! I am Marie, a Web developper based in Vancouver.</p>
          <span>Welcome to my website!<br></br></span>
          <Link to='/about'>{this.props.button}</Link>
        </div>
      </div>
    </header>
    );
  }
};



export default Header;