import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="House Budget"
              description="Full Stack application for Personal Expnese Tracking. Front-End made with React Back-End on Node.JS and Database wtih AWS"
              demoLink="https://housebudgetapplication.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hotel Catalog App"
              description="Catalog app for near by attractions, for Hotel Santo Tomas. "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="To Do Application"
              description="To Do Application built with React.js. Features include adding, deleting and updating tasks"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://todoapplicationwithlocalstorage.netlify.app"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
