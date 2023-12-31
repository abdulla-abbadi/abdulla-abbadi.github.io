import React from "react";
import ScrollService from "../../../utilities/ScrollService";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/abdulla-abbadi-016777b0/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/abdulla-abbadi" target="_blank">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://twitter.com/BootstrapIi" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-detail-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Abdulla</span>
            </span>
          </div>
          <div className="profile-detail-role">
            <div className="primary-text profile-role-tagline">
              I'm a Software Developer, knowledgeable in all stages of web
              development. I'm looking forward to working with great teams who
              are very excited about their work and fun to work with.
            </div>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="abdull_abbadi.pdf" download="Abdulla_Abbadi_resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
