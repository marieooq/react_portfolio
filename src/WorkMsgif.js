import React from "react";
import "./App.css";
import Header from "./Header";
import WorkTemplate from "./WorkTemplate";
import HeaderImage from "./img/msgif_header.png";
import ContentImage from "./img/msgif_demo.gif";

const tags = ["HTML5", "CSS3", "JavaScript", "React.js", "Redux"];

const images = [ContentImage];

const tagList = tags.map(elm => {
  return <li>{elm}</li>;
});

const imageList = images.map(elm => {
  return <img src={elm} alt="contentImg" className="content-img" />;
});

const relatedWebsites = {
  "Visit the website": "https://msgif.net/"
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
  url: "https://msgif.net/",
  title: "Msgif",
  description:
    "Msgif is consists of two words, “message” and “gif”. As its name suggests this is a GIF generator that converts a message typed by user into a GIF animation. I use React.js and Redux to manage components. To capture the text area in which the message is typed I used a library, “html2canvas”. In order to convert the captured images  into Gif animation I used another library,”jsgif”. ",
  tags: { tagList },
  howItWorks:
    "Firstly you can choose the size of the text area and style of design. You can check if the style is what you expected by typing letters in the text area before pressing the record button. After pressing the record button you can type your original message and it will be recorded. After that, press the createGIF button. You can download the GIF file in a few seconds. Every time you type a letter, html2canvas capture the text area, and it is pushed into an array. After pressing the createGIF button, jsgif converts the images in the array into a GIF animation.",
  difficultPart:
    "There are several difficult parts for me. I’ve picked up three out of them.First part is Redux part. Although I didn’t use redux at first as there are a lot of components and multiple components uses the same state I decided to use redux in the end. That was my first time to use Redux so it was confusing to understand the concept of Redux.The rest of difficult part is related to UI design. One of them is adjusting the size of text area size. There are two options for the size of text area(for twitter and for other social medias) and also the size should be fit to the size of browser. In short, the size of text area should be changed according to type of the screen and the size of browser.Third point is also related to the text area. For the beginning there were two screen on this app. One is the basic text area that user can type letters. The other one is display the letter user has typed, but it gives impression that the user interface is not organized.",
  problemSolving:
    "I followed the  hands-on official Redux tutorial so that I can grasp the concept of Redux. I felt it was still hard to understand the relation to action and reducer so I asked my tutor to make the minimum model about it. Following the model  gradually I come to understand the concept.Using window.matchMedia and managing the state of screen type, I was able to adjust the size of text area.I also fixed the dual screen problem using HTML5 contentEditable attribute.Using that attribute enables to type letters into a normal div element and apply CSS to the element."
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
