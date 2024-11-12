"use client";
import EduExpCardList from "@/components/EduExpCardList/EduExpCardList";

const Education = () => {
  const educationList = [
    {
      institution: "Western Governors University",
      title: "Bachelor of Science in Computer Science",
      description:
        "I earned my Bachelor of Science in Computer Science at Western Governors University, where I studied software development, data management, network security, and web development, gaining proficiency in languages like Python, Java, C++, HTML, and CSS.",
      startDate: "December 2019",
      endDate: "May 2022",
      imgSrc: "/wgu-seal.webp",
      imgAlt: "Western Governors University Logo",
    },
    {
      institution: "Utah State University",
      title: "Associate of Science in General Studies",
      description:
        "I completed my Associate of Science in General Studies at Utah State University, focusing on mathematics, statistics, and economics, with courses such as Multivariable Calculus and Linear Regression using R.",
      startDate: "August 2016",
      endDate: "May 2017",
      imgSrc: "/utah-state-university.webp",
      imgAlt: "Utah State University Logo",
    },
    {
      institution: "CompTIA",
      title: "CompTIA Project+ Certificate",
      description:
        "I earned my CompTIA Project+ certification, gaining essential project management skills covering the project life cycle, budget management, and various methodologies like Waterfall and Agile.",
      startDate: "November 2020",
      endDate: "November 2020",
      imgSrc: "/comp-tia-project.webp",
      imgAlt: "CompTIA Project+ Certified",
    },
    {
      institution: "DevPoint Labs",
      title: "Web Development Certificate",
      description:
        "At DevPoint Labs, I obtained a Web Development Certificate, where I learned full-stack development using Ruby, JavaScript, HTML, CSS, and tools like Git, React, Rails, and Heroku.",
      startDate: "August 2019",
      endDate: "October 2019",
      imgSrc: "/devpoint-labs.webp",
      imgAlt: "DevPoint Labs Logo",
    },
  ];

  return (
    <div>
      <h1>Education</h1>
      <EduExpCardList itemList={educationList} />
    </div>
  );
};

export default Education;
