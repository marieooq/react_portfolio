import React from 'react';
import './Social.css';

class Social extends React.Component{
  render(){
    return (
      <div className="social">
        <div className="row">
          <Icons myIcon={iconObj[0].icon} myUrl={iconObj[0].url}/>
          <Icons myIcon={iconObj[1].icon} myUrl={iconObj[1].url}/>
          <Icons myIcon={iconObj[2].icon} myUrl={iconObj[2].url}/>
          <Icons myIcon={iconObj[3].icon} myUrl={iconObj[3].url}/>
        </div>
      </div>
    );
  }
}

const iconObj = [
  {
    icon: <ion-icon className="icon" name="logo-linkedin"></ion-icon>,
    url: "https://www.linkedin.com/in/marie-otaki-a67773186/"
  },
  {
    icon: <ion-icon className="icon" name="logo-github"></ion-icon>,
    url: "https://github.com/marieooq"
  },
  {
    icon: <ion-icon className="icon" name="logo-twitter"></ion-icon>,
    url: "https://twitter.com/MarieWoq"
  },
  {
    icon: <ion-icon className="icon" name="logo-instagram"></ion-icon>,
    url: "https://www.instagram.com/marie_woq/"
  }
  
];

class Icons extends React.Component{
  render(){
      return (
        <div>
           <a href={this.props.myUrl} target="_blank"><span>{this.props.myIcon}</span></a>
        </div>
      );
  
    }
}
export default Social;