import React from 'react';
import Background from './img/header.jpg';
import './Header.css';

const myStyles = {
  backgroundImage : `url(${Background})`,
  height: '50vh',
  backgroundSize: 'cover'
}

class Header extends React.Component{
  render(){
    return(
      <header style={myStyles}>
        <h1>{this.props.title}</h1>
        <p>Hi, there! I am Marie Otaki, a Web developper based in Vancouver.</p>
        <a href="#button">{this.props.button}</a>
      </header>
    );
  }
};



export default Header;