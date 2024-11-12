"use client";
import EduExpCardList from "@/components/EduExpCardList/EduExpCardList";

const Experience = () => {
  const experienceList = [
    {
      institution: "OnChain Studios",
      title: "Senior Frontend Engineer",
      description: (
        <>
          <span>
            Responsible for building responsive web applications using React and
            Next.js, with a strong focus on delivering high performance and
            seamless user experiences.
          </span>
          <span>
            Developed custom data-fetching libraries to integrate efficiently
            with backend services, utilizing the Fetch API and React Query for
            optimized server state handling and streamlined data management.
          </span>
          <span>
            Created and managed React Contexts to handle user state across
            multiple components, ensuring consistent data flow and state
            persistence throughout the application.
          </span>
          <span>
            Implemented Higher-Order Components (HOCs) to protect routes and
            enforce access control, enhancing the security and usability of the
            application.
          </span>
          <span>
            Built reusable, modular components that supported scalable
            development, ensuring maintainable and consistent codebases across
            projects.
          </span>
          <span>
            Collaborated closely with backend and design teams to align on
            technical and visual requirements, delivering components that met
            both functional and design standards.
          </span>
        </>
      ),
      startDate: "August 2022",
      endDate: "Present",
      skillList: [
        "React",
        "Next.js",
        "Typescript",
        "MSW",
        "RESTful APIs",
        "GraphQL",
        "React Testing Library",
        "Storybook",
      ],
      imgSrc: "/onchain.webp",
      imgAlt: "OnChain Studios Logo",
    },
    {
      institution: "Carrus",
      title: "Software Engineer",
      description: (
        <>
          <span>
            Developed responsive web applications using Vue.js, connecting
            health professionals with organizations and leveraging the Google
            Places API to identify nearby opportunities.
          </span>
          <span>
            Integrated GraphQL and Apollo Client for optimized data fetching and
            state management, ensuring high performance and scalability across
            the application.
          </span>
          <span>
            Implemented unit testing with Jest to maintain code quality and
            reliability throughout the development lifecycle.
          </span>
          <span>
            Collaborated with cross-functional teams to deliver seamless user
            experiences while adhering to technical and design requirements.
          </span>
        </>
      ),
      startDate: "August 2021",
      endDate: "August 2022",
      skillList: ["Vue", "HTML", "CSS", "Jest", "Apollo", "GraphQL"],
      imgSrc: "/carrus.webp",
      imgAlt: "Carrus Logo",
    },
    {
      institution: "Intermountain Healthcare",
      title: "Software Engineer Intern",
      description: (
        <>
          <span>
            As an intern, contributed as a full-stack web developer, writing
            microservices in Node.js and building responsive UI components with
            React.
          </span>
          <span>
            Led training sessions on unit testing best practices using Jest and
            React Testing Library to ensure code quality and maintainability.
          </span>
          <span>
            Gained hands-on experience with state management using Redux,
            working in an Agile development environment, and collaborating on
            version control best practices. Strengthened understanding of
            database structures and relationships to optimize backend
            interactions.
          </span>
        </>
      ),
      startDate: "May 2021",
      endDate: "August 2021",
      skillList: ["React", "Jest", "React Testing Library", "Node"],
      imgSrc: "/intermountain.webp",
      imgAlt: "Intermountain Healthcare Logo",
    },
  ];

  return (
    <div>
      <h1>Experience</h1>
      <EduExpCardList itemList={experienceList} />
    </div>
  );
};

export default Experience;
