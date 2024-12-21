import Footer from "./Footer";
import Header from "./Header";
import masterImage from "../assets/uday.jpeg";

function About() {
  return (
    <div>
      <Header />
      <div className="about-section">
        <img src={masterImage} alt="images" />
        <div className="description">
          <div className="intro">
            <h2>Introduction</h2>
            <p>
              Hello! I'm S.P. Uday Kiran Reddy, a recent graduate from
              Presidency University with a degree in Computer Engineering. I am
              a dedicated software developer with a profound passion for coding
              and a robust foundation in computer science. My expertise spans
              Java programming, as well as front-end technologies including
              HTML, CSS, JavaScript, and ReactJS. I thrive on creating
              innovative solutions and am constantly seeking to expand my
              knowledge and skills. My enthusiasm for technology drives me to
              stay updated with the latest trends and best practices in software
              development. With a strong commitment to excellence and a creative
              approach to problem-solving, I aim to contribute significantly to
              any project I undertake.
            </p>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <ul>
              <li>Advanced Java (JDBC, Servlets, Spring Framework) </li>
              <li>Android development using Java (basic)</li>
              <li>
                <dl>
                  <dt>Front End Technologies</dt>
                  <dd>Hyper Text Markup Language (HTML)</dd>
                  <dd>Cascading Style Sheets (CSS)</dd>
                  <dd>Java Script (JS)</dd>
                  <dd>React JS</dd>
                </dl>
              </li>
            </ul>
          </div>
          <div className="skills">
            <h2>Certificates</h2>
            <ul>
              <li>
                <a
                  href="https://www.udemy.com/certificate/UC-9f329ea4-4336-4a58-b744-5874bf7c4f4f/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Udemy: Web Development Bootcamp 🔗
                </a>
              </li>
              <li>
                <a
                  href="https://www.hackerrank.com/certificates/135326470107"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HackerRank: Java Certification 🔗
                </a>
              </li>
              <li>
                <a
                  href="https://www.hackerrank.com/certificates/3ded60890440"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HackerRank: SQL Certification 🔗
                </a>
              </li>
            </ul>
          </div>
          <div className="hobbies">
            <h2>Hobbies</h2>
            <ul>
              <li>Playing Cricket</li>
              <li>Playing Chess</li>
              <li>Watching Movies</li>
              <li>Exploring new Technologies</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
