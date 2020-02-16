import React from 'react';
import './App.css';
import Header from './Header';
import WorkTemplate from './WorkTemplate';
import HeaderImage from './img/msgif_header.png';
import ContentImage from './img/msgif_demo.gif';

const tags = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Redux'];

const images = [ContentImage];

const tagList = tags.map(elm => {
  return <li>{elm}</li>;
});

const imageList = images.map(elm => {
  return <img src={elm} alt="contentImg" className="content-img" />;
});

const relatedWebsites = {
  'Visit the website': 'https://msgif.net/',
  GitHub: 'https://github.com/marieooq/react-msgif',
  'Product Hunt': 'https://www.producthunt.com/posts/msgif'
};

const relatedWebsitesLists = Object.keys(relatedWebsites).map(keyName => {
  return (
    <li>
      <a
        href={relatedWebsites[keyName]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {keyName}
      </a>
    </li>
  );
});

const workObj = {
  img: { HeaderImage },
  url: 'https://msgif.net/',
  title: 'Msgif',
  description: (
    <p>
      {' '}
      Msgif is consists of two words, “message” and “gif”. As its name suggests
      this is a GIF generator that converts a message typed by user into a GIF
      animation. I use React.js and Redux to manage components. To capture the
      text area in which the message is typed I used a library, “html2canvas”.
      In order to convert the captured images into Gif animation I used another
      library,”jsgif”.
      <br />
      <br />
      I’ve launched it on{' '}
      <a href="https://www.producthunt.com/posts/msgif" target="_blank">
        ProductHunt
      </a>{' '}
      on February 7th, 2020. It ranked 9th and got 185 votes as of the day. The
      number of votes grew up to 303 as of February 15th, 2020. More than 1000
      people visited my website in one day and it was so thrilling to me!
    </p>
  ),
  tags: { tagList },
  howItWorks: (
    <p>
      Firstly you can choose the size of the text area and style of design. You
      can check if the style is what you expected by typing letters in the text
      area before pressing the record button. After pressing the record button
      you can type your original message and it will be recorded. After that,
      press the createGIF button. You can download the GIF file in a few
      seconds. <br />
      <br />
      Every time you type a letter, html2canvas capture the text area, and it is
      pushed into an array. After pressing the createGIF button, jsgif converts
      the images in the array into a GIF animation.
    </p>
  ),
  difficultPart: (
    <p>
      There are several difficult parts for me. I’ll pick up three out of them.
      <br />
      <br />
      The first part is the Redux. Although I haven't used redux before as there
      are a lot of components and multiple components use the same state, I
      decided to use Redux in the end. That was my first time to use Redux so I
      was confused that I couldn't understand the concept of Redux soon.
      <br />
      <br />
      The rest of the difficult part is related to UI design. One of them is
      adjusting the size of the text area. There are two options for the size of
      the text area (for twitter and other social media) and also the size
      should be fit to the browser. In short, the size of the text area should
      be changed according to the type of the screen and the browser.
      <br />
      <br />
      The third point also related to the text area. There used to be two
      screens on this app. One was the basic one in which users typed letters.
      The other was that displayed the letters the user has typed. It gave us
      the impression that the interface was not organized.
    </p>
  ),
  problemSolving: (
    <p>
      I followed the hands-on official Redux tutorial so that I could grasp the
      concept of Redux. I felt it was still hard to understand the relation to
      action and reducer so I asked my tutor to make the minimum model about it.
      I come to understand the concept by following the model.
      <br />
      <br />I was able to adjust the size of the text area managing the
      window.matchMedia and the state of screen type.
      <br />
      <br />I also fixed the dual-screen problem using HTML5 contentEditable
      attribute. That attribute enables users to type letters into a normal div
      element and to be applied CSS to the element.
    </p>
  )
};

class WorkMsgif extends React.Component {
  render() {
    return (
      <div>
        <Header section="work_ph" imgSrc={HeaderImage} url={workObj.url} />
        <WorkTemplate
          title={workObj.title}
          subTitle={workObj.subTitle}
          tags={tagList}
          description={workObj.description}
          howItWorksDescription={workObj.howItWorks}
          contentImage={imageList}
          difficultPartDescription={workObj.difficultPart}
          problemSolvingDescription={workObj.problemSolving}
          relatedWebsitesLists={relatedWebsitesLists}
        />
      </div>
    );
  }
}

export default WorkMsgif;
