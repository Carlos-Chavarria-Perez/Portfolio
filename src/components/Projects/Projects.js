import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Hotel from "../../Assets/Projects/Hotel.png";
import Task from "../../Assets/Projects/Task.png";
import Budget from "../../Assets/Projects/Budget.png";


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
              imgPath={Budget}
              isBlog={false}
              title="House Budget"
              description="Full Stack application for Personal Expnese Tracking. Front-End made with React Back-End on Node.JS and Database wtih AWS"
              demoLink="https://housebudgetapplication.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotel}
              isBlog={false}
              title="Hotel Catalog Application"
              description="Catalog app for near by attractions, for Hotel Santo Tomas. "
              demoLink="https://hotelsantotomascatalog.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Task}
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
