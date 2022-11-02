import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import education from "../../assets/Resume/education.svg";
import programmingSkills from "../../assets/Resume/programming-skills.svg";
import projects from "../../assets/Resume/projects.svg";
import interests from "../../assets/Resume/interests.svg";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.links
            ? props.links.map((link) => (
                <a
                  href={link.link}
                  className="link"
                  key={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={linkTypes[link.type]}></i>
                </a>
              ))
            : ""}

          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: education },
    { label: "Projects", logoSrc: projects },
    { label: "Programming Skills", logoSrc: programmingSkills },
    { label: "Interests", logoSrc: interests },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Pyhton", ratingPercentage: 80 },
    { skill: "Python Django", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "Python Flask", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 60 },
    { skill: "ReactJS", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "C", ratingPercentage: 50 },
  ];

  const linkTypes = {
    youtube: "fa fa-youtube",
    gitHub: "fa fa-github",
    hyperLink: "fa fa-link",
  };
  const projectsDetails = [
    {
      title: "Portfolio",
      links: [
        { type: "hyperLink", link: "https://abbadi-portfolio.herokuapp.com/" },
      ],

      duration: { fromDate: "Jan. 2022", toDate: "Apr. 2022" },
      description:
        "Developed a personal Portfolio to present to future employers my experience, skills, and education.",
      subHeading: "Technologies Used: React JS, Bootsrap, Nodejs",
    },
    {
      title: "e-commerce crafs shop",
      links: [{ type: "hyperLink", link: "https://www.caveofwishs.com/" }],
      duration: { fromDate: "Mar.2021", toDate: "Jan.2022" },
      description:
        "Online ecommerce website for exibiting and selling crafts and gifts online. Designed use cases to accommodate slow internet connection and offline services.The app helped increase sales by 25%.",
      subHeading:
        "Technologies Used: Python Djnago framework, Vanilla Javascript, jQuery, Bootstrap, CropperJs",
    },
    {
      title: "Massive Muscles App",
      links: [
        {
          type: "gitHub",
          link: "https://github.com/CSE-Courses/course-project-a3-massive-muscles",
        },
      ],
      duration: { fromDate: "Jan. 2022", toDate: "Apr. 2022" },
      description:
        "Collaborated on school project implementing Agile scrum methodology.Developed the project's back-end user functionalities, and also contributed to the profile page front-end.",
      subHeading: "Technologies Used: React JS, Bootsrap, Nodejs",
    },
    {
      title: "Real-Time code blog",
      links: [
        {
          type: "gitHub",
          link: "https://github.com/wafflez180/CSE312-Web-Apps-Project",
        },
        { type: "youtube", link: "https://youtu.be/VgEjhzVwAKs" },
      ],
      duration: { fromDate: "Mar.2021", toDate: "Jan.2022" },
      description:
        "Online ecommerce website for exibiting and selling crafts and art work online. Used WhatsApp for orders due to the absence of any online order options in the country and slow internet connections",
      subHeading:
        "Technologies Used: Python Djnago framework, Vanilla Javascript, jQuery, Bootstrap, CropperJs",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University at buffalo, Buffalo, New york"}
        subHeading={"BACHELOR OF SCIENCE COMPUTER SCIENCE"}
        fromDate={"2017"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"University at buffalo, Buffalo, New York"}
        subHeading={"MINORS IN PYSCHOLGY AND BIOLOGICAL SCIENCES"}
        fromDate={"2015"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"Newcomers High School, Queens, New York"}
        subHeading={"HIGH SCHOOL DIPLOMA"}
        fromDate={"2011"}
        toDate={"2013"}
      />
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          links={projectsDetails.links}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Electronics"
        description="Building small electroic projects, using Arduino Uno or Raspberry Pi"
      />
      <ResumeHeading
        heading="Watching historical TV series"
        description="I like to watch historical TV series, like Dirilis: Ertugrul, Last kingdom etc."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 600;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo" src={bullet.logoSrc} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
