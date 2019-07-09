import React from 'react';
import Background from './img/header.jpg';
import './Header.css';

const myStyles = {
  backgroundImage : `url(${Background})`,
  height: '80vh',
  backgroundSize: 'cover'
}

class Header extends React.Component{
  render(){
    return(
      <header style={myStyles}>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
};



export default Header;