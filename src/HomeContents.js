import React from 'react';
// import Content from "./Content";
import ContentsContainer from './ContentsContainer';
import MessageGif_image from './img/messagif.gif';
import Photomap_image from './img/photomap.png';
import VanstudentBlog_image from './img/vanstudents_blog.png';
import ReactNote_image from './img/react_note.png';
// import Illustration_image from './img/host_family.png';
import './ContentsContainer.css';

class HomeContents extends React.Component {
  render() {
    const contentsObj = [
      {
        image: MessageGif_image,
        title: 'Msgif',
        description: (
          <>
            A gif generator that converts your message into a GIF animation.
            Once you type your message and press a button your message turns
            into a GIF animation.
            <br />
            <br />
            I’ve launched it on{' '}
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
        image: Photomap_image,
        title: 'Photomap via twitter',
        description:
          'This app enables to locate the photos of my twitter timeline on the world map. It uses twitter API to get data like image, location and published time.',
        url: '/works/photomap'
      },
      {
        image: VanstudentBlog_image,
        title: 'React based blog',
        description:
          'A blog introducing life in Vancouver to Japanese visitors. It is using React and Contentful API. ',
        url: '/works/react-blog'
      },
      {
        image: ReactNote_image,
        title: 'React based To-Do List',
        description:
          'This is a simple to Do List using React and Firebase, which enables users to add notes and remove those. Since it uses Firebase the data will be preserved if they refresh it. It’s very intuitive design and easy to manipulate. ',
        url: '/works/react-note'
      }
    ];

    return <ContentsContainer obj={contentsObj} />;
  }
}

export default HomeContents;
