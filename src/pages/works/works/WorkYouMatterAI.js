import React from "react";
import Layout from "../../../components/Layout/Layout";
import CompanyWorkTemplate from "../../../components/WorkTemplate/CompanyWorkTemplate";
import YouMatterAIHeader from "../../../img/youmatter_header.png";
import YouMatterDemo from "../../../img/youmatter_demo.mp4";

//////////////////////////////////////
// set values according to a project
//////////////////////////////////////
const workObj = {
  url: "https://youmatter.ai/",
  title: "youmatter AI",
  description:
    "youmatter AI is a virtual therapy chatbot that allows you to express and organize your feelings through chatting, built using  Next.js, TypeScript, Tailwindcss, Supabase, and OpenAI API.",
  headline: "Features",
};

const tags = ["Next.js", "TypeScript", "Tailwindcss", "Supabase"];

const video = YouMatterDemo;

const achievements = [
  "It provides therapy sessions by having text conversations. It's super easy!",
  "The therapist is well-versed in CBT, being incredibly patient, calm, and gentle. Plus, it never gets offended because it’s AI.",
  "Users can talk to the AI anytime they want! No more expensive bookings!",
];

const relatedWebsites = {
  "youmatter AI": "https://youmatter.ai/",
};
//////////////////////////////////////
//////////////////////////////////////

const tagList = tags.map((elm, index) => {
  return <li key={index}>{elm}</li>;
});

// const imageList = images.map((elm, index) => {
//   return <img src={elm} alt="contentImg" className="content-img" key={index} />;
// });

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
  <Layout section="work" imgSrc={YouMatterAIHeader} url={workObj.url}>
    <CompanyWorkTemplate
      title={workObj.title}
      subTitle={workObj.subTitle}
      tags={tagList}
      description={workObj.description}
      headline={workObj.headline}
      achievementDescription={achievementList}
      video={video}
      relatedWebsitesLists={relatedWebsitesLists}
    />
  </Layout>
);

export default WorkNeoBrutalism;
