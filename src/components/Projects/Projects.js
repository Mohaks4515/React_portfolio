import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import astro from "../../Assets/Projects/img1.jpg";
import ekamCalC from "../../Assets/Projects/img2.jpg";
import underwaterTemple from "../../Assets/Projects/img3.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={astro}
              isBlog={false}
              title="Call-Astro"
              description="Developed user-friendly reports by efficiently aggregating data from multiple files, ensuring clear presentation and easy interpretation for enhanced decision-making. Libraries used: datetime, reportlab, URLlib, Byteos."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ekamCalC}
              isBlog={false}
              title="EkamCal-C"
              description="A web app integrating various calculators (scientific, financial, health) into one platform. It streamlines access to essential tools for students and professionals. Managing development from analysis to testing, ensuring usability and accuracy. Tools used: HTML, CSS, Bootstrap, JavaScript."
              
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={underwaterTemple}
              isBlog={false}
              title="Underwater Temple Simulation (VR)"
              description="Created a realistic 3D underwater temple simulation with detailed modeling and immersive visuals using Unreal Engine and Blender. The project focused on providing an immersive virtual reality experience."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
