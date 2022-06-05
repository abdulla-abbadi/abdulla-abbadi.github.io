import React, { useState, useEffect, useRef, createRef } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import education from "../../assets/Resume/education.svg"
import workHistory from "../../assets/Resume/work-history.svg"
import programmingSkills from "../../assets/Resume/programming-skills.svg"
import projects from "../../assets/Resume/projects.svg"
import interests from "../../assets/Resume/interests.svg"
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
    { label: "Work History", logoSrc: workHistory},
    { label: "Programming Skills", logoSrc: programmingSkills },
    { label: "Projects", logoSrc: projects },
    { label: "Interests", logoSrc: interests },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Pyhton", ratingPercentage: 80 },
    { skill: "Python Django", ratingPercentage: 80 },
    { skill: "Python Flask", ratingPercentage: 70 },
    { skill: "C", ratingPercentage: 50 },
    { skill: "C++", ratingPercentage: 50 },
    { skill: "Core Java", ratingPercentage: 60 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 60 },
    { skill: "React Native", ratingPercentage: 30 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Bootstrap", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Portfolio",
      duration: { fromDate: "Fab. 2022", toDate: "Apr. 2022" },
      description:
        "Built a personal Portfolio ",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Ecommerce Art and Cafts Website ",
      duration: { fromDate: "Oct.2021", toDate: "Mar.2022" },
      description:
        "Online ecommerce website for exibiting and selling crafts and art work online. Used WhatsApp for orders due to the absence of any online payment options in the country and slow internet connections",
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
        subHeading={"MINORS IN PSYCHOLOGY AND BIOLOGICAL SCIENCES"}
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

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"FREELANCE, Aden Yemen"}
          subHeading={"FULL STACK DEVELOPER"}
          fromDate={"Oct. 2021"}
          toDate={"Mar. 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an Ecommerce web app for an artist/designer to sell and display his craftworks. 
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - The App has admin control, where the admin user dynamically adds, modifies and deletes exhibits. 
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            -  Also, the admin can monitor the app activites and control the contacts info and orders details.{" "}
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
              - <a href='https://www.caveofwishs.com/' target='_blank'> link to project</a>
           </span>
        </div>
      </div>
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

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
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
    let offsetHeight = 360;

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
        <img
          className="bullet-logo"
          src={bullet.logoSrc}
          alt="B"
        />
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