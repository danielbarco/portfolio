import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daniel Barco </span>
            from <span className="purple"> Winterthur, Switzerland.</span>
            <br />
            <br />
            I am currently a <span className="purple">PhD candidate in Data Science </span> at the University of Zurich.
            <br />
            <br />
            My research at the Centre for Artificial Intelligence (ZHAW) focuses on the development of deep learning algorithms for vision tasks.
            <br />
            <br />
            I have completed <span className="purple">MSc in Applied Information and Data Science </span> from the University of Applied Sciences of Luzern (HSLU), a MSSc in International and European Relations from the University of Linköping in Sweden as well as a BSc in International Management from the Zurich University of Applied Sciences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cycling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I want to use data science for social good!"{" "}
          </p>
          <footer className="blockquote-footer">Daniel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
