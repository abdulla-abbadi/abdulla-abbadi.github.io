import React from 'react'
import Typical from 'react-typical'
import ScrollService from "../../../utilities/ScrollService";
import './profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
          <div className='profile-details'>
            <div className='colz'>
              <div className='colz-icon'>
                <a href='https://www.linkedin.com/in/abdulla-abbadi-016777b0/' target='_blank'>
                  <i className='fa fa-linkedin'></i>
                </a>
                <a href='https://github.com/abdulla-abbadi' target='_blank'>
                  <i className='fa fa-github'></i>
                </a>
                <a href='https://twitter.com/BootstrapIi' target='_blank'>
                  <i className='fa fa-twitter'></i>
                </a>
              </div>
            </div>
            <div className='profile-detail-name'>
              <span className='primary-text'>
                {" "}
                Hello, I'm <span className='highlighted-text'>Abdulla</span>
              </span>
            </div>
            <div className='profile-detail-role'>
              <span className='primary-text'>
                {" "}
                <h1>
                  {" "}
                  <Typical
                  loop={Infinity}
                  steps={[
                    'Full Stack Developer',
                    1000,
                    'Django Backend Developer',
                    1000,
                    'React Frontend Devolper',
                    1000,
                    'VanillaJS Frontend Devolper',
                    1000,
                  ]}
                  />
                </h1>
                <span className='profile-role-tagline'>
                  Got what it takes to develope web apps, and to coordinate with team members 
                </span>
              </span>
            </div>
            <div className='profile-options'>
              <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>Hire Me</button>
              <a href='abdulla_abbadi.pdf' download="Abdulla_Abbadi_resume.pdf">
                <button className='btn highlighted-btn'>Get Resume</button>
              </a>

            </div>
          </div>
          <div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>
          </div>
        </div>
    </div>
  )
}
