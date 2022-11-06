import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"

function Home() {
  return (
    <div className= "home">
      <div className = "about">
        <h2>Hi, my name is kamal</h2>
        <div className="prompt">
          <p>
            A software developer with a passion for learning and creating
          </p>
            <a href="https://www.linkedin.com/in/kamal-issa-075636204/"><LinkedInIcon /></a>
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJvqsPsFrLtsFCqjLXGbnWkMxFbtlCsdVMbvqpZscVNlhLRkjBffTZGZlfCssZNZgLSmBKg"><EmailIcon /></a>
            <a href="https://github.com/xardbazz"><GithubIcon /></a>
        </div>
      </div>
      <div className = "skills">
        <h1>Skills</h1>
          <ol className = "list">
            <li className = "item">
              <h2>Front-End</h2>
              <span>
                HTML, CSS, React Native, BootStrap, MaterialUI, Yarn, JavaScript,
                StyledComponents, jQuery
                </span>
            </li>
            <li className = "item">
              <h2>Back-End</h2>
              <span>
                C++, C#, .NET, MySQL, PHP, Java, Python, Node.js
              </span>
            </li>
            <li className = "item">
              <h2>Softwares</h2>
              <span>
                Windows, Adobe Full, Microsoft Office, Android, Microsoft Visual Studio,
                Android Studio, Sublime Text, and various social media platforms
              </span>
            </li>
          </ol>
      </div>
    </div>
  )
}

export default Home