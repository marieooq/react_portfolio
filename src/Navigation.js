import React from 'react';
import './App.css';
import './Navigation.css';
import { Link } from 'react-router-dom'

class Navigation extends React.Component{
  render() {
    const sections = {Home: '/', Work: '/work', About: '/about'};
    
    const navLinks = Object.keys(sections).map(keyName => {
      return (
        <li><Link to={sections[keyName]}>{keyName}</Link></li>
      )
    }); 
    return (
      <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>
        <ul>
          {navLinks}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
