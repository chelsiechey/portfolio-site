"use client";
import EduExpCardList from "@/components/EduExpCardList/EduExpCardList";

const Education = () => {
  const educationList = [
    {
      institution: "Western Governors University",
      title: "Bachelor of Science in Computer Science",
      description:
        "Earned a Bachelor of Science in Computer Science, where I developed a strong foundation in software development, data management, network security, and web development. Gained hands-on experience with languages and frameworks including Python, Java, C++, HTML, and CSS. Focused on building scalable applications, optimizing algorithms, and mastering data structures. Applied problem-solving skills in real-world projects to solve complex technical challenges.",
      startDate: "December 2019",
      endDate: "May 2022",
      imgSrc: "/wgu-seal.webp",
      imgAlt: "Western Governors University Logo",
    },
    {
      institution: "CompTIA",
      title: "CompTIA Project+ Certificate",
      description:
        "Achieved CompTIA Project+ certification, which provided a comprehensive understanding of project management methodologies, including Agile and Waterfall. Gained practical knowledge in managing project lifecycles, budgeting, and resource planning, strengthening my ability to lead and collaborate on cross-functional teams.",
      startDate: "November 2020",
      endDate: "November 2020",
      imgSrc: "/comp-tia-project.webp",
      imgAlt: "CompTIA Project+ Certified",
    },
    {
      institution: "DevPoint Labs",
      title: "Web Development Certificate",
      description:
        "Completed a Web Development Certificate program at DevPoint Labs, where I gained full-stack development expertise with technologies like Ruby, JavaScript, React, HTML, and CSS. Built and deployed applications using Git, Rails, and Heroku, developing a deep understanding of both frontend and backend workflows. Focused on creating responsive, user-friendly applications and collaborating on team-based projects to deliver high-quality results.",
      startDate: "August 2019",
      endDate: "October 2019",
      imgSrc: "/devpoint-labs.webp",
      imgAlt: "DevPoint Labs Logo",
    },
    {
      institution: "Utah State University",
      title: "Associate of Science in General Studies",
      description:
        "Completed an Associate of Science in General Studies, with a strong emphasis on mathematics, statistics, and economics. Gained proficiency in Multivariable Calculus, Linear Regression using R, and statistical analysis. Developed analytical skills that enhance my ability to approach technical problems with a data-driven mindset.",
      startDate: "August 2016",
      endDate: "May 2017",
      imgSrc: "/utah-state-university.webp",
      imgAlt: "Utah State University Logo",
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
