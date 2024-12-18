import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import scorpio from "../../Assets/Projects/scorpio.png";
import malaria_detection from "../../Assets/Projects/malaria-detection.gif";
import review from "../../Assets/Projects/review.png";
import masterthesis from "../../Assets/Projects/masterthesis.png";
import portrait_HSLU from "../../Assets/Projects/portrait_HSLU.png";
import uzh_3mt from "../../Assets/Projects/uzh_3mt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          An overview of what I have been up to.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={review}
              isBlog={false}
              title="Publication"
              description="Artifact Reduction in 3D and 4D Cone-Beam Computed Tomography Images With Deep Learning: A Review"
              pubLink="https://ieeexplore.ieee.org/abstract/document/10398205"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uzh_3mt}
              isBlog={false}
              title="🏆 3 minute thesis"
              description="I won the 3 minute thesis audience award at the University of Zurich with my talk on detecting malaria with deep learning."
              Link="https://www.grc.uzh.ch/de/events/3mt-overview/3mt-winner.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malaria_detection}
              isBlog={false}
              title="Malaria Detection Webapp"
              description="Deep learning algorithm to detect malaria on blood smears."
              ghLink="https://github.com/danielbarco/malariadetection_webapp/tree/main"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portrait_HSLU}
              isBlog={false}
              title="Portrait HSLU"
              description="Gives you the background information on my motivation to do a PhD in the field of data science."
              Link="https://www.hslu.ch/de-ch/wirtschaft/studium/master/applied-information-and-data-science/erfahrungsberichte/berufsbild-doktorand/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={masterthesis}
              isBlog={false}
              title="Master Thesis Varroa Mite Detection"
              description="In my master thesis I developed a deep learning algorithm to detect varroa mites from screening pages."
              Link="https://www.thurgauerzeitung.ch/ostschweiz/frauenfeld/mit-dem-smartphone-gegen-milben-thurgauer-unterstuetzt-zuechter-im-kampf-gegen-das-bienensterben-ld.1240543"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scorpio}
              isBlog={false}
              title="Scorpio Website"
              description="Website design for a local travel agency."
              Link="https://scorpio.ch/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
