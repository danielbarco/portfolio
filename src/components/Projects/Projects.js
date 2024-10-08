import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import scorpio from "../../Assets/Projects/scorpio.png";
import malaria_detection from "../../Assets/Projects/malaria-detection.gif";

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
              imgPath={scorpio}
              isBlog={false}
              title="Scorpio website"
              description="Website design for a local travel agency."
              demoLink="https://scorpio.ch/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malaria_detection}
              isBlog={false}
              title="Malaria Detection"
              description="Deep learning algorithm to detect malaria on blood smears."
              ghLink="https://github.com/danielbarco/malariadetection_webapp/tree/main"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
