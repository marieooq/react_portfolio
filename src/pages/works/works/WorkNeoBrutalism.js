import React from "react";
import Layout from "../../../components/Layout/Layout";
import CompanyWorkTemplate from "../../../components/WorkTemplate/CompanyWorkTemplate";
import NeoBrutalismHeader from "../../../img/neo_brutalism_header.png";
import NeoBrutalismImage1 from "../../../img/neo_brutalism_ui_demo.gif";
import NeoBrutalismImage2 from "../../../img/neo_brutalism_ui_storybook_demo.gif";
import NeoBrutalismImage3 from "../../../img/neo_brutalism_ui_achievement.png";

//////////////////////////////////////
// set values according to a project
//////////////////////////////////////
const workObj = {
  url: "https://neo-brutalism-ui-library.vercel.app/",
  title: "Neo-Brutalism UI",
  description:
    "Neo-Brutalism UI is a collection of React and Tailwind CSS-based components that embody a design approach characterized by bold, high-contrast elements and vibrant colors. It offers a unique and eye-catching aesthetic for webpages.",
  headline: "What I worked on",
};

const tags = ["React", "TypeScript", "Tailwindcss", "Storybook"];

const images = [NeoBrutalismImage3, NeoBrutalismImage1, NeoBrutalismImage2];

const achievements = [
  "Built colorful, bold, and eye-catching components based on React and Tailwind CSS.",
  "Created a user-friendly app. It's easy to use! Just copy and paste the code.",
  "Introduced Storybook to facilitate the reuse of components by users.",
  "Add: As of December 2023, the GitHub star count has reached 100!",
];

const relatedWebsites = {
  "Neo-Brutalism UI website": "https://neo-brutalism-ui-library.vercel.app/",
  GitHub: "https://github.com/marieooq/neo-brutalism-ui-library",
};
//////////////////////////////////////
//////////////////////////////////////

const tagList = tags.map((elm, index) => {
  return <li key={index}>{elm}</li>;
});

const imageList = images.map((elm, index) => {
  return <img src={elm} alt="contentImg" className="content-img" key={index} />;
});

const achievementList = achievements.map((elm, index) => {
  return <li key={index}>{elm}</li>;
});

const relatedWebsitesLists = Object.keys(relatedWebsites).map(
  (keyName, index) => {
    return (
      <li key={index}>
        <a
          href={relatedWebsites[keyName]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {keyName}
        </a>
      </li>
    );
  }
);

const WorkNeoBrutalism = () => (
  <Layout section="work" imgSrc={NeoBrutalismHeader} url={workObj.url}>
    <CompanyWorkTemplate
      title={workObj.title}
      subTitle={workObj.subTitle}
      tags={tagList}
      description={workObj.description}
      headline={workObj.headline}
      achievementDescription={achievementList}
      contentImage={imageList}
      relatedWebsitesLists={relatedWebsitesLists}
    />
  </Layout>
);

export default WorkNeoBrutalism;
