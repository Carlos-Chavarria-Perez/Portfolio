import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've worked in <b className="purple">Finance</b> for most of my
              professional career, and during this time I discovered my passion
              for <b className="purple">technology</b>.
              <br />
              <br />
              It all started with a simple <b className="purple">Python</b>{" "}
              script, and from that point on there was no going back. My mindset
              completely changed — it became about how I could{" "}
              <b className="purple">build</b> solutions, make them{" "}
              <b className="purple">user-friendly</b>, and still deliver the
              critical data that was needed.
              <br />
              <br />
              This is what inspired me to begin my journey from{" "}
              <b className="purple">Finance</b> into
              <b className="purple"> Full Stack Web Development</b>.
              <br />
              <br />
              I’ve been learning and building with frameworks like
              <b className="purple"> React</b> and{" "}
              <b className="purple">Angular</b> for the Front End,
              <b className="purple"> Node.js</b> and{" "}
              <b className="purple">Express</b> for the Back End, and{" "}
              <b className="purple">SQL Server</b> for Databases — and I’m now
              about to dive deeper into
              <b className="purple"> AWS</b> for cloud technologies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Carlos-Chavarria-Perez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/carlos-chavarria-b04635141/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
