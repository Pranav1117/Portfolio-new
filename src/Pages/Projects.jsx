import React from "react";
import "../style.css";
import Food from '../Assets/Media/Projects-Sc/Food.png'
import Ecom from '../Assets/Media/Projects-Sc/E-comm.png'
import Blog from '../Assets/Media/Projects-Sc/blog.png'
import Clock from '../Assets/Media/Projects-Sc/Digital clock.png'
import react from '../Assets/Media/Tech-icons/react.png'
import html from '../Assets/Media/Tech-icons/html.png'
import css from '../Assets/Media/Tech-icons/css.png'
import express from '../Assets/Media/Tech-icons/express.png'
import js from '../Assets/Media/Tech-icons/javascript.png'
import mongnodb from '../Assets/Media/Tech-icons/mongo.png'
import { Link } from "react-router-dom";





const Projects = () => {
  return (
    <div className="projects">
      <header>
        <h2 id="h2">Projects</h2>
        <p className="during">During my MERN Course I've completed projects for each stack</p>
      </header>


      <div className="projects-wrapper">
        <header id="project-heading">Projects i worked on</header>
        <hr />
        
       
        <div className="project-content">
          <div className="projects-points">
            <div className="key-features">
              <header>Food.com(clone)</header>
              <div className="points">
                <ul>
                  <li>User Authentication: Implement a secure user authentication system for account creation, login, and logout.</li>
                  <li>Bookmarking Functionality: Develop a feature allowing users to bookmark and save favorite recipes.</li>
                  <li>Recipe Search: Implement a search functionality for users to find recipes based on keywords, ingredients, or cuisine.</li>
                  <li>Database Integration: Integrate a database to securely store user information, recipes, and bookmarks.</li>
                  <li>Responsive User Interface: Design an intuitive and responsive UI for seamless navigation.</li>
                </ul>
              </div>
            </div>
            <div className="tech-used">
              <img src={react} alt="React"/>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={express} alt="Express"/>
              <img src={mongnodb} alt="MongoDB"/>



            </div>
          </div>
          <div className="project-img">
            <Link to='https://food-com-frontend.onrender.com/' target="_blank">
            <img src={Food} alt="Food.com"/>
            </Link>
          </div>
        </div>

        <hr style={{borderColor:"#494949"}}/>
       
        <div className="project-content">
          <div className="projects-points">
          <div className="key-features">
              <header>Black Market(E-commerce site)</header>
              <div className="points">
                <ul>
                  <li>Implemented robust user authentication with secure registration, login, and password management using hashed and salted passwords.</li>
                  <li>Designed an intuitive product catalog featuring well-organized categories and detailed product pages with images, and descriptions</li>
                  <li>Implemented a dynamic search bar.</li>
                  <li>Database Integration: Integrate a database to securely store user information, products.</li>
                  <li>Responsive User Interface: Design an intuitive and responsive UI for seamless navigation.</li>
                </ul>
              </div>
            </div>
            <div className="tech-used">
            <img src={react} alt="React"/>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={express} alt="Express"/>
              <img src={mongnodb} alt="MongoDB"/>
            </div>
          </div>
          <div className="project-img">
          <Link to='https://e-commerce-frontend-qtvx.onrender.com/' target="_blank">
            <img src={Ecom} alt="E-commerce site"/>
</Link>

          </div>
        </div>
       
              <hr style={{borderColor:"#494949"}}/>
              
         <div className="project-content">
          <div className="projects-points">
          <div className="key-features">
              <header> The Siren (Blog-Site)</header>
              <div className="points">
                <ul>
                  <li>Implemented dynamic routing in a React application using react-router-dom, allowing the display of different content based on the URL. This enhances user navigation and provides a seamless, dynamic user experience.</li>
                  <li>Designed a visually appealing and user-friendly page showcasing detailed information and images for a specific topic, ensuring an engaging and informative user experience.</li>
                  <li>Successfully implemented user authentication, enabling secure user registration and login functionality, with user data securely stored in the database.</li>
                  <li>Executed a responsive design strategy to ensure optimal user experiences across various devices and screen sizes. Utilized CSS media queries and flexible layouts to create a website that seamlessly adapts to desktops, tablets, and mobile devices.</li>
                </ul>
              </div>
            </div>
            <div className="tech-used">
            <img src={react} alt="React"/>
              <img src={html} alt="HTML"/>
              <img src={css} alt="CSS"/>
              <img src={express} alt="Express"/>
              <img src={mongnodb} alt="MongoDB"/>
            </div>
          </div>
          <div className="project-img">
            <Link to='https://node-blog-frontend.onrender.com/' target="_blank">

          <img src={Blog} alt="Blog Page"/>
            </Link>

          </div>
        </div>
       
              <hr style={{borderColor:"#494949"}}/>
              
              <div className="project-content">
          <div className="projects-points">
          <div className="key-features">
              <header> Digital Clock</header>
              <div className="points">
                <ul>
                  <li>Implemented a JavaScript-powered digital clock that provides users with accurate and real-time information, ensuring a seamless and up-to-date display of the current time.</li>
                  <li>Integrated a feature where the digital clock triggers dynamic image changes based on pre-set alarm times. This visually enhances the user experience, offering a personalized and interactive element to the traditional clock display.</li>
                  <li>Developed a user-friendly interface allowing users to set alarms at specific times. </li>
                  <li>Ensured a responsive design for the digital clock, making it accessible and visually appealing across various devices and screen sizes. </li>
                </ul>
              </div>
            </div>
            <div className="tech-used">
              <img src={js} alt="JavaScript"/>
              <img src={css} alt="CSS"/>
              <img src={html} alt="HTML"/>
            </div>
          </div>
          <div className="project-img">
            <Link to='https://pranav1117.github.io/Digital-Clock-js-13-Sept/' target="_blank">
              
          <img src={Clock} alt="Digital-Clock"/>
              </Link> 

          </div>
        </div>
              
              <hr style={{borderColor:"#494949"}}/>
       
               {/* <div className="project-content">
          <div className="projects-points">
            <div className="tech-used"></div>
          </div>
          <div className="project-img"></div>
        </div> */}
       
       
        {/* <div className="project-content">
          <div className="projects-points">
            <div className="tech-used"></div>
          </div>
          <div className="project-img"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
