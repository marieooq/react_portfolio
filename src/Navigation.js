import React from 'react';
import './App.css';
import './Navigation.css';
import { Link } from 'react-router-dom'

class Navigation extends React.Component{
  render() {
    const sections = ['Home', 'Work', 'About', 'Contact'];
    const navLinks = sections.map(section => {
      return (
        <li><Link to={'/'+section}>{section}</Link></li>
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
