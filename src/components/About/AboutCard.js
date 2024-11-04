import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohak Sharma </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I am currently employed as a backend developer at Vas Ventures.
            <br />
            I am pursuing my B.Tech in Computer Science and Engineering (JK Lakshmipat University, 2021–2025, CGPA: 7.07) .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games and sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Bike rides
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Mohak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
