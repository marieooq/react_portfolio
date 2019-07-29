import React from 'react';
import Background from './img/header.jpg';
import './Header.css';

const myStyles = {
  backgroundImage : `url(${Background})`,
  height: '100vh',
  backgroundSize: 'cover'
}

class Header extends React.Component{
  render(){
    return(
      <header>
      <div className="main-img"style={myStyles}></div>
      <div className="introduction">
        <div className="introduction-inner">
          <p>Hi, there!<br></br>
          I am Marie Otaki, a Web developper based in Vancouver.</p>
          <span>Welcome to my website!<br></br></span>
          <a href="#button">{this.props.button}</a>
        </div>
      </div>
      </header>
    );
  }
};



export default Header;