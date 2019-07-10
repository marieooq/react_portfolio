import React from 'react';
import './Services.css';

class Services extends React.Component{
  render(){
    return (
      <div className="services">
        <h3>services</h3>
        <h2>What we offer</h2>

        <div className="row">
          <div>
            <span>
              <ion-icon name="phone-portrait"></ion-icon>
            </span>
            <h4>Responsive</h4>
            <p>We create responsive design services.</p>
          </div>
          <div>
            <span>
              <ion-icon name="cube"></ion-icon>
            </span>
            <h4>Redesign</h4>
            <p>Revise the design better.</p>
          </div>
          <div>
            <span>
              <ion-icon name="thumbs-up"></ion-icon>
            </span>
            <h4>Favorite</h4>
            <p>Millions of users <ion-icon name="heart"></ion-icon> get started our services.</p>
          </div>
          <div>
            <span>
              <ion-icon name="help"></ion-icon>
            </span>
            <h4>Question</h4>
            <p>Welcome your feedback.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;