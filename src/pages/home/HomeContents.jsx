import React from 'react';
// import Content from "./Content";
import ContentsContainer from '../../components/ContentsContainer';
import MessageGif_image from '../../img/messagif.gif';
import GreenSpoon_image from '../../img/green_spoon.png';
import StockPrice_image from '../../img/stock_price_list.png';
import CrudBlog_image from '../../img/crud_blog.png';
import Photomap_image from '../../img/photomap.png';
import VanstudentBlog_image from '../../img/vanstudents_blog.png';
import ReactNote_image from '../../img/react_note.png';
// import Illustration_image from './img/host_family.png';
// import './ContentsContainer.css';

class HomeContents extends React.Component {
  render() {
    const contentsObj = [
      {
        image: GreenSpoon_image,
        title: 'Web Development at COS Educational Consulting Inc.',
        stack: ['JavaScript', 'HTML', 'CSS', 'Figma', 'Adobe Illustrator'],
        gitHub: 'https://hoikupedia.com/',
        description: (
         'COS Educational Consulting, Inc. is a study abroad agent, which provides recruitment and immigration services to local partners. I designed and coded new webpages using HTML, CSS, JavaScript, WordPress, Figma, and Adobe Illustrator for an owned media for people who want to nanny in Vancouver.'
        ),
        url: '/works/cos'
      },
      {
        image: GreenSpoon_image,
        title: 'AYA Cancer Mobile App',
        stack: ['React Native'],
        gitHub: 'https://aya-cancer.com/',
        description: (
         'Built a Slack-like community service for people under the age of 39 with cancer (AYA: Adolescent and Young Adult) using Mattermost, an OSS. I was responsible for building a mobile app using React-native.'
        ),
        url: '/works/aya-cancer'
      },
      {
        image: GreenSpoon_image,
        title: 'Green Spoon',
        stack: ['PHP Laravel', 'HTML', 'CSS'],
        gitHub: 'https://github.com/marieooq/react-msgif',
        description: (
         'Greenspoon Inc. is a Japanese startup company that offers high-quality fresh smoothies via e-commerce. I built a payment emailing system using PHP Laravel, HTML, and CSS'
        ),
        url: '/works/green-spoon'
      },
      {
        image: MessageGif_image,
        title: 'Msgif',
        stack: ['React', 'Redux', 'Sass'],
        gitHub: 'https://github.com/marieooq/react-msgif',
        description: (
          <>
            A gif generator that converts your message into a GIF animation.
            Once you type your message and press a button your message turns
            into a GIF animation. <br />I launched it on{' '}
            <a
              href="https://www.producthunt.com/posts/msgif"
              target="_blank"
              rel="noopener noreferrer"
            >
              ProductHunt
            </a>{' '}
            . It got 303 votes as of February 15th, 2020.
          </>
        ),
        url: '/works/msgif'
      },
      {
        image: StockPrice_image,
        title: 'Stock Price List',
        stack: ['React', 'TypeScript', 'Ant Design'],
        gitHub: 'https://github.com/marieooq/stock-price-list',
        description:
          'A simple SPA application that enables to display the stock symbol, the latest price and the desctiption. Once you type in the symbol and hit the enter or press the search button, these information show up.',
        url: '/works/stock-price'
      },
      {
        image: CrudBlog_image,
        title: 'CRUD Blog Application',
        stack: ['React', 'Node.js', 'MongoDB'],
        gitHub: 'https://github.com/marieooq/final-node-blog',
        description:
          'A CRUD blog application using React, Node.js, and MongoDB. It enables users to create, read, update, and delete the post of the blog.',
        url: '/works/crud-blog'
      },
      {
        image: Photomap_image,
        title: 'Photomap via twitter',
        stack: ['React', 'Node.js', 'Firebase'],
        gitHub: 'https://github.com/marieooq/react-photomap-public',
        description:
          'This app enables to locate the photos of my twitter timeline on the world map. It uses twitter API to get data like image, location and published time.',
        url: '/works/photomap'
      },
      {
        image: VanstudentBlog_image,
        title: 'React based blog',
        stack: ['React', 'Contentful API'],
        gitHub: 'https://github.com/marieooq/react_contentful_blog_public',
        description:
          'A blog introducing life in Vancouver to Japanese visitors. It is using React and Contentful API. ',
        url: '/works/react-blog'
      },
      {
        image: ReactNote_image,
        title: 'React based To-Do List',
        stack: ['React', 'Firebase'],
        gitHub: 'https://github.com/marieooq/react-firebase-notes-app-public',
        description:
          'This is a simple to Do List using React and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ',
        url: '/works/react-note'
      }
    ];

    return <ContentsContainer obj={contentsObj} />;
  }
}

export default HomeContents;
