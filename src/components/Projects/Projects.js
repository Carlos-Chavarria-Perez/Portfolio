import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Hotel from "../../Assets/Projects/Hotel.png";
import Task from "../../Assets/Projects/Task.png";
import Budget from "../../Assets/Projects/Budget.png";
import Scheduler from "../../Assets/Projects/Scheduler.png";

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
              title="House Budget"
              description="A full-stack application for personal expense tracking. Built with React on the front end, Node.js on the back end, and AWS for database hosting."
              demoLink="https://housebudgetapplication.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotel}
              title="Hotel Catalog Application"
              description="An interactive catalog app developed for Hotel Santo Tomas. Helps guests get oriented with nearby attractions, amenities, banks, and other essential information during their stay."
              demoLink="https://hotelsantotomascatalog.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scheduler}
              title="Scheduler Application"
              description="A staff scheduling app designed for hotels. Built with React and integrated with Firebase to store and manage personnel shifts efficiently."
              demoLink="https://schedules-af574.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Task}
              title="To-Do Application"
              description="A task management app built with Angular. Currently optimized for desktop, with mobile responsiveness in progress. Features include adding, deleting, and updating tasks."
              demoLink="https://todoapplicationwithlocalstorage.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
