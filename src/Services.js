import React from 'react';
import './Services.css';

class Services extends React.Component{
  render(){
    return (
      <div className="services">
        <h3>services</h3>
        <h2>What we offer</h2>

        <div className="row">
          <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDiscription={iconObj[0].discription} />
          <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDiscription={iconObj[1].discription} />
          <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDiscription={iconObj[2].discription} />
          <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} myDiscription={iconObj[3].discription} />
        </div>
      </div>
    );
  }
}

const iconObj = [
  {
    icon: <ion-icon name="phone-portrait"></ion-icon>,
    title: 'Responsive',
    discription: 'We create responsive design services.'
  },
  {
    icon: <ion-icon name="cube"></ion-icon>,
    title: 'Redesign',
    discription: 'Revise the design better.'
  },
  {
    icon: <ion-icon name="thumbs-up"></ion-icon>,
    title: 'Favorite',
    discription: 'Millions of users love get started our services.'
  },
  {
    icon: <ion-icon name="help"></ion-icon>,
    title: 'Question',
    discription: 'Welcome your feedback.'
  }
];

class Icons extends React.Component{
  render(){
      return (
        <div>
          <span>
            {this.props.myIcon}
          </span>
          <h4>{this.props.myTitle}</h4>
          <p>{this.props.myDiscription}</p>
        </div>
      );
  
    }
}
export default Services;