import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { AiTwotoneStar } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mian Mansoor Ahmad </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />
            <br />
            <AiTwotoneStar /> I am pursuing my Higher Education in Computer Science from
            <span className="purple"> National University of Science and Technology, </span>
            H-12 Campus.
            <br />
            <br />
            <AiTwotoneStar /> I started my initial career around mid 2017 and 
            got into 
            <span className="purple"> Data Science </span>
            in early 2020.
            <br />
            <br />
            My hobbies are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Inline Skating
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and Camping
            </li>
            <li className="about-activity">
              <ImPointRight /> Long Rides on my Motorcycle
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
